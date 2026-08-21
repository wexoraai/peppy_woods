import nodemailer from "nodemailer";

const DEFAULT_SMTP_HOST = "smtpout.secureserver.net";
const DEFAULT_SMTP_PORT = 465;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const REQUEST_TYPES = new Set([
  "Site visit",
  "Price quote",
  "Quote and site visit",
]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const INDIAN_PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/;

function jsonResponse(body, status, headers = {}) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function asTrimmedString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizePhone(value) {
  return value.replace(/[\s()-]/g, "");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getClientIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function getRateLimitStore() {
  if (!globalThis.__peppyWoodsEnquiryRateLimits) {
    globalThis.__peppyWoodsEnquiryRateLimits = new Map();
  }

  return globalThis.__peppyWoodsEnquiryRateLimits;
}

function isRateLimited(clientIp, now) {
  const store = getRateLimitStore();

  if (store.size > 1_000) {
    for (const [key, value] of store.entries()) {
      if (value.resetAt <= now) {
        store.delete(key);
      }
    }
  }

  const current = store.get(clientIp);
  if (!current || current.resetAt <= now) {
    store.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX_REQUESTS;
}

function formatIstTimestamp(date) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);
}

function validatePayload(payload) {
  const name = asTrimmedString(payload.name);
  const phone = asTrimmedString(payload.phone);
  const email = asTrimmedString(payload.email).toLowerCase();
  const requestType = asTrimmedString(payload.requestType);
  const preferredDate = asTrimmedString(payload.preferredDate);
  const message = asTrimmedString(payload.message);
  const website = asTrimmedString(payload.website);

  if (website) {
    return { isBot: true };
  }

  if (!name || !phone || !email) {
    return {
      error: "Full name, phone number and email address are required.",
    };
  }

  if (name.length > 120) {
    return { error: "Full name is too long." };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { error: "Enter a valid email address." };
  }

  if (!INDIAN_PHONE_PATTERN.test(normalizePhone(phone))) {
    return { error: "Enter a valid Indian phone number." };
  }

  if (!REQUEST_TYPES.has(requestType)) {
    return { error: "Choose a valid enquiry type." };
  }

  if (preferredDate && !/^\d{4}-\d{2}-\d{2}$/.test(preferredDate)) {
    return { error: "Choose a valid preferred visit date." };
  }

  if (message.length > 2_000) {
    return { error: "Message must be 2,000 characters or fewer." };
  }

  return {
    data: {
      name,
      phone,
      email,
      requestType,
      preferredDate: preferredDate || "Not specified",
      message: message || "No additional message",
    },
  };
}

function buildEmailContent(enquiry, submittedAt) {
  const rows = [
    ["Full name", enquiry.name],
    ["Phone number", enquiry.phone],
    ["Email address", enquiry.email],
    ["I would like", enquiry.requestType],
    ["Preferred visit date", enquiry.preferredDate],
    ["Message", enquiry.message],
    ["Submitted at", `${submittedAt} (IST)`],
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:12px 16px;text-align:left;vertical-align:top;border-bottom:1px solid #dfe7e2;color:#12392f;font-family:Arial,sans-serif;font-size:14px;width:180px;">
            ${escapeHtml(label)}
          </th>
          <td style="padding:12px 16px;vertical-align:top;border-bottom:1px solid #dfe7e2;color:#1f2925;font-family:Arial,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap;">
            ${escapeHtml(value)}
          </td>
        </tr>`,
    )
    .join("");

  const html = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Peppy Woods enquiry</title>
      </head>
      <body style="margin:0;padding:24px;background:#f4f0e6;">
        <div style="max-width:680px;margin:0 auto;overflow:hidden;border:1px solid #d8dfdb;border-radius:12px;background:#ffffff;">
          <div style="padding:24px;background:#12392f;color:#ffffff;">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#e5c581;">New website enquiry</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;line-height:1.2;">Peppy Woods</h1>
          </div>
          <table role="presentation" style="width:100%;border-collapse:collapse;">
            ${htmlRows}
          </table>
          <p style="margin:0;padding:20px 24px;color:#62716a;font-family:Arial,sans-serif;font-size:13px;line-height:1.6;">
            Reply to this email to contact ${escapeHtml(enquiry.name)} directly.
          </p>
        </div>
      </body>
    </html>`;

  const text = [
    "New Peppy Woods website enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    `Reply to this email to contact ${enquiry.name} directly.`,
  ].join("\n");

  return { html, text };
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return jsonResponse({ error: "Invalid request." }, 400);
  }

  const validation = validatePayload(payload);
  if (validation.isBot) {
    return jsonResponse({ ok: true }, 200);
  }

  if (validation.error) {
    return jsonResponse({ error: validation.error }, 400);
  }

  const now = Date.now();
  if (isRateLimited(getClientIp(request), now)) {
    return jsonResponse(
      { error: "Too many requests. Please wait a few minutes and try again." },
      429,
      { "Retry-After": String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1_000)) },
    );
  }

  const smtpHost = process.env.SMTP_HOST || DEFAULT_SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || DEFAULT_SMTP_PORT);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASS;
  const toEmail = process.env.ENQUIRY_TO_EMAIL;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL || smtpUser;

  if (
    !smtpUser ||
    !smtpPassword ||
    !toEmail ||
    !fromEmail ||
    !Number.isInteger(smtpPort) ||
    smtpPort <= 0
  ) {
    console.error("Enquiry email service is missing required environment variables.");
    return jsonResponse(
      { error: "Email service is temporarily unavailable. Please try again later." },
      500,
    );
  }

  const submittedAt = formatIstTimestamp(new Date(now));
  const { html, text } = buildEmailContent(validation.data, submittedAt);

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      tls: {
        minVersion: "TLSv1.2",
      },
    });

    await transporter.sendMail({
      from: `Peppy Woods Website <${fromEmail}>`,
      to: toEmail,
      replyTo: validation.data.email,
      subject: `Peppy Woods enquiry · ${validation.data.requestType} · ${validation.data.name}`,
      html,
      text,
    });
  } catch (error) {
    const smtpFailure =
      error && typeof error === "object"
        ? {
            code: typeof error.code === "string" ? error.code : "unknown",
            command:
              typeof error.command === "string" ? error.command : "unknown",
            responseCode:
              typeof error.responseCode === "number"
                ? error.responseCode
                : "unknown",
          }
        : { code: "unknown", command: "unknown", responseCode: "unknown" };
    console.error("The enquiry email provider could not be reached.", smtpFailure);
    return jsonResponse(
      { error: "We could not send your request. Please try again." },
      500,
    );
  }

  return jsonResponse({ ok: true }, 200);
}
