import assert from "node:assert/strict";
import { afterEach, test } from "node:test";
import nodemailer from "nodemailer";

import { POST } from "../app/api/enquiry/route.js";

const originalCreateTransport = nodemailer.createTransport;
const originalEnvironment = {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS,
  ENQUIRY_TO_EMAIL: process.env.ENQUIRY_TO_EMAIL,
  ENQUIRY_FROM_EMAIL: process.env.ENQUIRY_FROM_EMAIL,
};

function configureEmailEnvironment() {
  process.env.SMTP_HOST = "smtpout.secureserver.net";
  process.env.SMTP_PORT = "465";
  process.env.SMTP_USER = "hello@peppywoods.in";
  process.env.SMTP_PASS = "test-password-only";
  process.env.ENQUIRY_TO_EMAIL = "hello@peppywoods.in";
  process.env.ENQUIRY_FROM_EMAIL = "hello@peppywoods.in";
}

function makeRequest(body, ip = `203.0.113.${Math.floor(Math.random() * 200) + 1}`) {
  return new Request("https://peppywoods.in/api/enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

function validPayload(overrides = {}) {
  return {
    name: "Kumar Mugadum",
    phone: "+91 98765 43210",
    email: "kumar@example.com",
    requestType: "Quote and site visit",
    preferredDate: "2026-08-15",
    message: "Please share the location and current availability.",
    website: "",
    ...overrides,
  };
}

afterEach(() => {
  nodemailer.createTransport = originalCreateTransport;

  for (const [key, value] of Object.entries(originalEnvironment)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
});

test("sends a complete enquiry through GoDaddy Titan SMTP with Reply-To", async () => {
  configureEmailEnvironment();
  let transportOptions;
  let email;

  nodemailer.createTransport = (options) => {
    transportOptions = options;
    return {
      sendMail: async (message) => {
        email = message;
        return { messageId: "email_test_123" };
      },
    };
  };

  const response = await POST(makeRequest(validPayload(), "203.0.113.10"));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });

  assert.equal(transportOptions.host, "smtpout.secureserver.net");
  assert.equal(transportOptions.port, 465);
  assert.equal(transportOptions.secure, true);
  assert.deepEqual(transportOptions.auth, {
    user: "hello@peppywoods.in",
    pass: "test-password-only",
  });
  assert.equal(email.from, "Peppy Woods Website <hello@peppywoods.in>");
  assert.equal(email.to, "hello@peppywoods.in");
  assert.equal(email.replyTo, "kumar@example.com");

  for (const required of [
    "Full name",
    "Kumar Mugadum",
    "Phone number",
    "+91 98765 43210",
    "Email address",
    "I would like",
    "Quote and site visit",
    "Preferred visit date",
    "2026-08-15",
    "Message",
    "Please share the location and current availability.",
    "Submitted at",
    "(IST)",
  ]) {
    assert.match(email.html, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(email.text, new RegExp(required.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});

test("rejects missing required fields", async () => {
  const response = await POST(
    makeRequest(validPayload({ name: "", phone: "" }), "203.0.113.11"),
  );
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /required/i);
});

test("rejects an invalid email address", async () => {
  const response = await POST(
    makeRequest(validPayload({ email: "not-an-email" }), "203.0.113.12"),
  );
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /valid email/i);
});

test("rejects an invalid Indian phone number", async () => {
  const response = await POST(
    makeRequest(validPayload({ phone: "12345" }), "203.0.113.13"),
  );
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /Indian phone/i);
});

test("silently accepts honeypot submissions without contacting SMTP", async () => {
  let providerCalled = false;
  nodemailer.createTransport = () => {
    providerCalled = true;
    return {
      sendMail: async () => ({ messageId: "should_not_send" }),
    };
  };

  const response = await POST(
    makeRequest(validPayload({ website: "https://spam.example" }), "203.0.113.14"),
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(providerCalled, false);
});

test("returns a safe error when the provider cannot be reached", async () => {
  configureEmailEnvironment();
  nodemailer.createTransport = () => {
    return {
      sendMail: async () => {
        throw new Error("provider secret details");
      },
    };
  };

  const response = await POST(makeRequest(validPayload(), "203.0.113.15"));
  assert.equal(response.status, 500);
  const result = await response.json();
  assert.match(result.error, /could not send/i);
  assert.doesNotMatch(JSON.stringify(result), /provider secret details/i);
  assert.equal("stack" in result, false);
});

test("returns 429 after five requests from one address", async () => {
  configureEmailEnvironment();
  nodemailer.createTransport = () => ({
    sendMail: async () => ({ messageId: "email_test_rate_limit" }),
  });

  const ip = "203.0.113.16";
  for (let index = 0; index < 5; index += 1) {
    const response = await POST(makeRequest(validPayload(), ip));
    assert.equal(response.status, 200);
  }

  const limitedResponse = await POST(makeRequest(validPayload(), ip));
  assert.equal(limitedResponse.status, 429);
  assert.equal(limitedResponse.headers.get("Retry-After"), "600");
  assert.match((await limitedResponse.json()).error, /too many requests/i);
});

test("returns a safe 500 when server configuration is missing", async () => {
  delete process.env.SMTP_HOST;
  delete process.env.SMTP_PORT;
  delete process.env.SMTP_USER;
  delete process.env.SMTP_PASS;
  delete process.env.ENQUIRY_TO_EMAIL;
  delete process.env.ENQUIRY_FROM_EMAIL;

  const response = await POST(makeRequest(validPayload(), "203.0.113.17"));
  assert.equal(response.status, 500);
  const result = await response.json();
  assert.match(result.error, /temporarily unavailable/i);
  assert.equal("stack" in result, false);
});
