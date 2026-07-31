import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete Peppy Woods brochure", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  for (const required of [
    /Peppy Woods/i,
    /Coorg/i,
    /1 Acre/i,
    /₹37/,
    /₹83/,
    /₹41/,
    /₹20/,
    /Coffee plantation/i,
    /Pepper plantation/i,
    /Water/i,
    /Western Ghats/i,
    /Cauvery/i,
    /Plan a visit/i,
  ]) {
    assert.match(html, required);
  }
});

test("uses the acre-based offer and complete launch pricing", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.doesNotMatch(html, /4300/i);
  assert.doesNotMatch(html, /3[\s-]*acres?/i);
  assert.doesNotMatch(html, /₹80/i);
  assert.doesNotMatch(html, /₹46|₹25/i);
  assert.doesNotMatch(html, /professional ownership/i);
  assert.doesNotMatch(html, /owner details/i);
  assert.match(html, /₹37/);
  assert.match(html, /₹85\/sq\. ft\./i);
  assert.match(html, /₹83 Lakhs/);
  assert.match(html, /₹191\/sq\. ft\./i);
  assert.match(html, /For the first 5 customers only/i);
  assert.match(
    html,
    /<section[^>]*offer-final[^>]*id="offer"[^>]*>[\s\S]*1 ACRE[\s\S]*₹37[\s\S]*Actual Value[\s\S]*₹83 Lakhs[\s\S]*PER ACRE[\s\S]*first 5 customers only[\s\S]*½ ACRE[\s\S]*₹20[\s\S]*Actual Value[\s\S]*₹41 Lakhs[\s\S]*HALF-ACRE ESTATE[\s\S]*first 5 customers only[\s\S]*<\/section>/i,
  );
  assert.match(html, /½ ACRE/);
  assert.match(html, /₹41 Lakhs/);
  assert.match(html, /₹20/);
  assert.match(html, /₹92\/sq\. ft\./i);
  assert.doesNotMatch(source, /hero-offer/);
  assert.ok(source.indexOf('id="offer"') > source.indexOf('id="visit"'));
  const finalOfferIndex = source.indexOf('id="offer"');
  for (const price of ["₹83 Lakhs", "₹37", "₹41 Lakhs", "₹20"]) {
    assert.ok(source.indexOf(price) > finalOfferIndex);
  }
  assert.match(css, /\.pricing-poster-price\s*\{[^}]*font-size:\s*clamp\(2\.5rem,\s*7vw,\s*4\.5rem\)/s);
  assert.match(css, /\.pricing-poster-actual s\s*\{[^}]*text-decoration-thickness:\s*3px/s);
});

test("renders the dedicated Coorg guide", async () => {
  const response = await render("/coorg");
  assert.equal(response.status, 200);

  const html = await response.text();
  for (const required of [
    /Coorg is known for/i,
    /Coffee estates/i,
    /Black pepper/i,
    /Western Ghats/i,
    /Talacauvery/i,
    /Cauvery/i,
    /Kodava culture/i,
    /Abbey Falls/i,
    /Guthigar/i,
    /Sullia/i,
    /coorg\/madikeri\.png/i,
    /coorg\/rajas-seat\.png/i,
    /coorg\/abbey-falls\.png/i,
    /coorg\/talacauvery\.png/i,
    /coorg\/plantation-country\.png/i,
    /coorg\/dubare-elephant-camp\.png/i,
  ]) {
    assert.match(html, required);
  }
});

test("keeps the homepage hero hierarchy balanced and highlights the final promise", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(html, /hero-tagline-highlight/);
  assert.match(html, /Build a Legacy\./);
  assert.match(css, /\.hero-location strong\s*\{[^}]*font-size:\s*64px/s);
  assert.match(css, /h1\s*\{[^}]*font-size:\s*64px/s);
  assert.match(css, /\.hero-tagline-highlight\s*\{[^}]*color:\s*var\(--gold-pale\)/s);
  assert.match(css, /\.hero-tagline-highlight\s*\{[^}]*font-size:\s*48px/s);
});

test("routes plan-a-visit actions to a complete enquiry form", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(html, /href="#request-visit"[^>]*>Plan a visit/i);
  assert.match(html, /id="request-visit"/i);
  assert.match(html, /Request a quote/i);
  assert.match(html, /<input[^>]*(?:name="phone"[^>]*type="tel"|type="tel"[^>]*name="phone")/i);
  assert.match(html, /<input[^>]*(?:name="email"[^>]*type="email"|type="email"[^>]*name="email")/i);
  assert.match(html, /name="requestType"/i);
  assert.match(html, /Quote and site visit/i);
  assert.ok(
    html.indexOf('id="request-visit"') > html.indexOf('id="offer"'),
    "The enquiry form must render below the final pricing section.",
  );
  assert.match(css, /\.offer-final-actions\s*\{[^}]*border-top:\s*1px solid var\(--line\)/s);
  assert.match(css, /\.pricing-poster-option-half \.pricing-poster-price\s*\{[^}]*color:\s*#4f762f/s);
});

test("submits enquiries in-page without mailto navigation", async () => {
  const response = await render();
  const html = await response.text();
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const route = await readFile(
    new URL("../app/api/enquiry/route.js", import.meta.url),
    "utf8",
  );

  assert.doesNotMatch(source, /mailto:/i);
  assert.doesNotMatch(source, /window\.location/i);
  assert.doesNotMatch(source, /target=["']_blank["']/i);
  assert.match(source, /fetch\(["']\/api\/enquiry["']/);
  assert.match(source, /preventDefault\(\)/);
  assert.match(source, /Sending\.\.\./);
  assert.match(source, /name="website"/);
  assert.match(html, /Prepare my request/i);
  assert.match(html, /without leaving this page/i);
  assert.match(route, /process\.env\.SMTP_USER/);
  assert.match(route, /process\.env\.SMTP_PASS/);
  assert.match(route, /process\.env\.ENQUIRY_TO_EMAIL/);
  assert.match(route, /process\.env\.ENQUIRY_FROM_EMAIL/);
  assert.match(route, /replyTo/);
});

test("renders the curated drone imagery in the opening hero", async () => {
  const response = await render();
  const html = await response.text();

  for (const required of [
    /estate-horizon\.webp/i,
    /estate-contours\.webp/i,
    /estate-clearing\.webp/i,
    /estate-canopy\.webp/i,
    /Drone view 01/i,
    /Plantation panorama/i,
  ]) {
    assert.match(html, required);
  }
});

test("fills the plantation gallery with the coffee hills sunrise tile", async () => {
  const response = await render();
  const html = await response.text();
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(html, /coffee-hills-sunrise\.png/i);
  assert.match(html, /Coffee hills at sunrise/i);
  assert.match(css, /\.gallery-grid\s*\{[^}]*grid-auto-flow:\s*dense;/s);
});

test("shows all estate amenities and limited acreage before the buyer FAQ", async () => {
  const response = await render();
  const html = await response.text();
  const source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  for (const required of [
    /Estate amenities/i,
    /Timber/i,
    /Coffee Plantation/i,
    /Black Pepper Plantations/i,
    /Secure Gated Community/i,
    /Well-planned Roads/i,
    /Abundant Water Supply/i,
    /Electricity Access/i,
    /Clubhouse/i,
    /Serene Green Landscapes/i,
    /30 acres only/i,
  ]) {
    assert.match(html, required);
  }

  assert.ok(
    source.indexOf('id="amenities"') < source.indexOf('id="questions"'),
    "The amenities section must render immediately above the FAQ.",
  );
  assert.match(
    css,
    /\.amenities-grid\s*\{[^}]*grid-template-columns:\s*repeat\([\s\S]*auto-fit/s,
  );
  assert.match(html, /eyebrow amenities-eyebrow[^>]*>Estate amenities/i);
  assert.match(
    css,
    /\.amenities-eyebrow\s*\{[^}]*background:\s*var\(--gold\)[^}]*font-size:\s*16px/s,
  );
});
