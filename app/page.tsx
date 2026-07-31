"use client";

import { type FormEvent, useState } from "react";

const estateLayers = [
  {
    number: "01",
    title: "Land & legacy",
    text: "A clearly defined one-acre estate plot in the Western Ghats landscape—made for weekends now and generations later.",
    image: "/gallery/ghats-coffee.png",
  },
  {
    number: "02",
    title: "Coffee plantation",
    text: "Shade-grown Robusta coffee brings the character, ritual and long-term crop potential of a working hill plantation.",
    image: "/gallery/coffee-cherries.png",
  },
  {
    number: "03",
    title: "Pepper plantation",
    text: "Black pepper vines add an equally important plantation layer, planned to mature with suitable host trees and field care.",
    image: "/gallery/pepper-vines.png",
  },
  {
    number: "04",
    title: "Water & climate",
    text: "A Western Ghats setting, Cauvery-linked water source and plantation-suited climate support year-round estate planning.",
    image: "/gallery/pepper-canopy.png",
  },
];

const waterPoints = [
  ["Western Ghats", "A high-rainfall hill ecosystem shaped by mist, shade and seasonal abundance."],
  ["Cauvery water source", "A Cauvery-linked source is presented as a key part of the plantation’s water story."],
  ["Reliable availability", "Water planning supports irrigation, soil care and day-to-day plantation operations."],
  ["Suitable climate", "The region’s shade, rainfall and moderated temperatures suit coffee and pepper cultivation."],
];

const gallery = [
  ["Coffee plantation at sunrise", "/gallery/coffee-sunrise.png", "wide"],
  ["Coffee cherries", "/gallery/coffee-cherries.png", ""],
  ["Pepper vines", "/gallery/pepper-vines.png", "tall"],
  ["Western Ghats plantation", "/gallery/ghats-coffee.png", "tall"],
  ["Coffee hills at sunrise", "/gallery/coffee-hills-sunrise.png", "tall"],
  ["Pepper beneath the canopy", "/gallery/pepper-canopy.png", "wide"],
  ["Timber-lined estate path", "/gallery/timber-lane.png", ""],
];

const amenities = [
  {
    title: "Timber",
    text: "Timber-lined plantation character adds shade, structure and a lasting green estate identity.",
    image: "/gallery/timber-lane.png",
  },
  {
    title: "Coffee Plantation",
    text: "A working coffee landscape brings the ritual, aroma and calm of life in the hills.",
    image: "/gallery/coffee-cherries.png",
  },
  {
    title: "Black Pepper Plantations",
    text: "Pepper vines grow through the plantation canopy as an essential part of the estate story.",
    image: "/gallery/pepper-vines.png",
  },
  {
    title: "Secure Gated Community",
    text: "A controlled-entry estate setting designed to offer privacy and greater peace of mind.",
    image: "/gallery/estate-villa.png",
  },
  {
    title: "Well-planned Roads",
    text: "Thoughtfully planned internal access helps connect plots, plantation areas and shared spaces.",
    image: "/drone/estate-contours.webp",
  },
  {
    title: "Abundant Water Supply",
    text: "Water planning supports the needs of the plantation and day-to-day estate life.",
    image: "/coorg/abbey-falls.png",
  },
  {
    title: "Electricity Access",
    text: "Electricity access supports comfortable stays and the practical needs of estate living.",
    image: "/gallery/la-cavana-cabin.png",
  },
  {
    title: "Clubhouse",
    text: "A welcoming shared space for conversations, quiet breaks and time with the community.",
    image: "/images/estate-pavilion.png",
  },
  {
    title: "Serene Green Landscapes",
    text: "Open hills, layered plantations and deep greenery create a peaceful everyday retreat.",
    image: "/drone/estate-horizon.webp",
  },
];

const audiences = [
  ["First-time buyer", "A simple one-acre proposition with the offer stated upfront."],
  ["Investor", "Land, coffee, pepper and timber developing on different timelines."],
  ["Family", "A hill retreat with space for slower weekends and shared memories."],
  ["Retired professional", "A managed plantation setting without day-to-day field work."],
  ["NRI", "A tangible Indian land story supported by local plantation operations."],
  ["Weekend-home buyer", "Western Ghats calm within the wider Coorg lifestyle region."],
  ["Coffee lover", "A closer relationship with shade-grown Robusta coffee."],
  ["Nature lover", "Mist, water, canopy, birdsong and plantation trails."],
];

const steps = [
  ["Walk the plot", "Visit the estate, understand the one-acre plot and inspect the coffee, pepper and water setting."],
  ["Review the facts", "Verify title records, survey, access, water-source details, approvals, sale terms and the management agreement."],
  ["Complete registration", "Proceed with the individual plot registration pathway, subject to legal verification and applicable approvals."],
  ["Let the plantation grow", "Soil Systems coordinates field operations while coffee, pepper and long-horizon plantation assets mature."],
];

const faqs = [
  ["What exactly is the offer?", "Peppy Woods presents both one-acre and 0.5-acre managed-estate options. The complete value and limited launch pricing are presented together in the final section, subject to availability, documentation and final sale terms."],
  ["Where is Peppy Woods?", "Peppy Woods is presented near Guthigar in the Sullia estate region of Karnataka, within the wider Coorg and Western Ghats lifestyle corridor. Exact site access is shared for a scheduled visit."],
  ["What grows on the plantation?", "Robusta coffee and black pepper are the two core crop stories. Payyani timber is planned as a longer-horizon plantation layer."],
  ["Why is water a key advantage?", "The Western Ghats setting, a Cauvery-linked water source and reliable plantation water planning are presented as important site strengths. Buyers should verify the exact source, capacity and seasonal availability on site."],
  ["Who looks after the plantation?", "Soil Systems coordinates plantation planning and field operations, including soil care, planting, irrigation, pruning and harvest planning, according to the final management agreement."],
  ["What should I verify before buying?", "Review title and survey records, plot boundaries, access, water-source evidence, approvals, sale documents, registration costs, management terms and all applicable taxes with independent legal and financial advisers."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [enquiryState, setEnquiryState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [enquiryMessage, setEnquiryMessage] = useState("");

  const handleEnquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      requestType: String(form.get("requestType") ?? ""),
      preferredDate: String(form.get("preferredDate") ?? ""),
      message: String(form.get("message") ?? "").trim(),
      website: String(form.get("website") ?? "").trim(),
    };
    const normalizedPhone = payload.phone.replace(/[\s()-]/g, "");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const indianPhonePattern = /^(?:\+91|91|0)?[6-9]\d{9}$/;

    if (!payload.name || !payload.phone || !payload.email) {
      setEnquiryState("error");
      setEnquiryMessage("Full name, phone number and email address are required.");
      return;
    }

    if (!emailPattern.test(payload.email)) {
      setEnquiryState("error");
      setEnquiryMessage("Enter a valid email address and try again.");
      return;
    }

    if (!indianPhonePattern.test(normalizedPhone)) {
      setEnquiryState("error");
      setEnquiryMessage("Enter a valid Indian phone number and try again.");
      return;
    }

    setEnquiryState("sending");
    setEnquiryMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.error || "We could not send your request. Please try again.",
        );
      }

      formElement.reset();
      setEnquiryState("success");
      setEnquiryMessage(
        "Thank you. Your request has been sent to the Peppy Woods team. We will contact you shortly.",
      );
    } catch (error) {
      setEnquiryState("error");
      setEnquiryMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request. Please check your connection and try again.",
      );
    }
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Peppy Woods home">
          <span className="brand-mark">PW</span>
          <span className="brand-name">
            <strong>Peppy Woods</strong>
            <small>Coorg · Managed estates</small>
          </span>
        </a>

        <button
          className="menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a href="#offer" onClick={() => setMenuOpen(false)}>The offer</a>
          <a href="#plantation" onClick={() => setMenuOpen(false)}>Plantation</a>
          <a href="#water" onClick={() => setMenuOpen(false)}>Water</a>
          <a href="/coorg" onClick={() => setMenuOpen(false)}>Coorg guide</a>
          <a href="#questions" onClick={() => setMenuOpen(false)}>Questions</a>
          <a className="nav-cta" href="#request-visit" onClick={() => setMenuOpen(false)}>Plan a visit</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/drone/estate-horizon.webp"
          alt="Drone view of a cultivated hill estate surrounded by forest and mountains"
          fetchPriority="high"
        />
        <div className="hero-shade" />

        <div className="hero-copy">
          <div className="hero-location" aria-label="Coorg, Western Ghats, Karnataka">
            <strong>COORG</strong>
            <span>Western Ghats<br />Karnataka</span>
          </div>
          <h1>Peppy Woods</h1>
          <p className="hero-tagline">
            <span>Escape the City,</span>
            <span className="hero-tagline-coorg">Own the Hills of <em>Coorg</em>,</span>
            <strong className="hero-tagline-highlight">Build a Legacy.</strong>
          </p>
          <p className="hero-intro">
            A managed coffee, pepper and timber estate proposition in Karnataka’s
            water-rich hill country.
          </p>
          <div className="hero-actions">
            <a className="button button-gold" href="#offer">See the offer</a>
            <a className="text-link" href="#plantation">Explore the plantation <span>↓</span></a>
          </div>
        </div>

        <div className="hero-media-column" aria-label="Drone views of the Peppy Woods landscape">
          <figure className="hero-media-feature">
            <img
              src="/drone/estate-contours.webp"
              alt="Panoramic drone view of the Peppy Woods plantation and surrounding Western Ghats"
              loading="eager"
            />
            <figcaption><span>Drone view 01</span><strong>Plantation panorama</strong></figcaption>
          </figure>
          <figure>
            <img
              src="/drone/estate-clearing.webp"
              alt="Aerial view of a cultivated clearing enclosed by forest"
              loading="lazy"
            />
            <figcaption><span>Drone view 02</span><strong>Forest edge</strong></figcaption>
          </figure>
          <figure>
            <img
              src="/drone/estate-canopy.webp"
              alt="Drone view showing planted fields, forest canopy and estate tracks"
              loading="lazy"
            />
            <figcaption><span>Drone view 03</span><strong>Estate pattern</strong></figcaption>
          </figure>
        </div>

        <div className="hero-facts" aria-label="Peppy Woods highlights">
          <div><strong>1 Acre</strong><span>managed-estate plot</span></div>
          <div><strong>Coorg</strong><span>Western Ghats</span></div>
          <div><strong>Coffee + Pepper</strong><span>equal plantation focus</span></div>
          <div><strong>Water</strong><span>Cauvery-linked source</span></div>
        </div>
      </section>

      <section className="plantation section" id="plantation">
        <div className="section-heading">
          <p className="eyebrow">The plantation</p>
          <h2>One living estate.<br />Four layers of value.</h2>
          <p>
            Peppy Woods brings lifestyle and long-term thinking together—without
            reducing the story to a single crop or promise.
          </p>
        </div>

        <div className="layer-grid">
          {estateLayers.map((layer) => (
            <article className="layer-card" key={layer.title}>
              <img src={layer.image} alt="" loading="lazy" />
              <div className="layer-shade" />
              <span>{layer.number}</span>
              <div>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="water section-wide" id="water">
        <div className="water-image">
          <img src="/gallery/ghats-coffee.png" alt="Lush Western Ghats coffee plantation in mist" loading="lazy" />
          <div className="water-badge"><span>Major USP</span><strong>Water</strong></div>
        </div>
        <div className="water-copy">
          <p className="eyebrow light">The Western Ghats advantage</p>
          <h2>Water is not a footnote.<br /><em>It is the foundation.</em></h2>
          <p className="water-lead">
            In plantation country, dependable water shapes what can grow, how the
            land is maintained and how resilient the estate can become.
          </p>
          <div className="water-list">
            {waterPoints.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <small>
            Water source, rights, capacity, quality and seasonal availability must be
            verified during technical and legal due diligence.
          </small>
        </div>
      </section>

      <section className="gallery-section section">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow">Plantation imagery</p>
            <h2>Coffee and pepper,<br />seen side by side.</h2>
          </div>
          <p>
            Coffee and pepper receive equal visual weight, supported by the landscape,
            canopy and working-estate setting around them.
          </p>
        </div>
        <div className="gallery-grid">
          {gallery.map(([title, src, className]) => (
            <figure className={className} key={title}>
              <img src={src} alt={title} loading="lazy" />
              <figcaption>{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="path section-wide">
        <div className="path-heading">
          <p className="eyebrow light">A simpler buying journey</p>
          <h2>From first walk<br />to a living legacy.</h2>
          <p>
            The process is explained in plain language, with verification before
            commitment and plantation care after registration.
          </p>
        </div>
        <div className="path-list">
          {steps.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="audience section">
        <div className="audience-heading">
          <p className="eyebrow">Who sees value here?</p>
          <h2>Different reasons.<br />One memorable place.</h2>
        </div>
        <div className="audience-grid">
          {audiences.map(([title, text], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="location section" id="location">
        <div className="location-copy">
          <p className="eyebrow">Location · Karnataka</p>
          <h2>Coorg.<br /><em>Clearly placed.</em></h2>
          <p className="location-address">Near Guthigar · Sullia · Western Ghats</p>
          <p>
            Peppy Woods is presented in the Sullia estate region, with access to the
            wider Coorg hill-country experience—plantation roads, waterfall drives,
            cool mornings and a slower rhythm.
          </p>
          <div className="location-actions">
            <a className="text-link dark" href="/coorg">What Coorg is known for <span>→</span></a>
            <a className="text-link dark" href="#request-visit">Plan a private site walk <span>↓</span></a>
          </div>
        </div>
        <div className="location-card">
          <span className="map-title">Peppy Woods</span>
          <div className="contours" aria-hidden="true">
            <i /><i /><i /><i /><i /><b>PW</b>
          </div>
          <div className="place-list">
            <div><span>Destination</span><strong>Coorg region</strong></div>
            <div><span>Estate area</span><strong>Near Guthigar, Sullia</strong></div>
            <div><span>Landscape</span><strong>Western Ghats</strong></div>
            <div><span>State</span><strong>Karnataka</strong></div>
          </div>
        </div>
      </section>

      <section className="amenities section" id="amenities">
        <div className="amenities-heading">
          <div>
            <p className="eyebrow amenities-eyebrow">Estate amenities</p>
            <h2>Everything for a<br /><em>peaceful retreat.</em></h2>
          </div>
          <aside className="amenities-availability" aria-label="Current estate availability">
            <span>Current estate availability</span>
            <strong>30 acres only</strong>
            <p>A deliberately limited plantation community in the Western Ghats.</p>
          </aside>
        </div>

        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <article className="amenity-card" key={amenity.title}>
              <img src={amenity.image} alt={amenity.title} loading="lazy" />
              <div className="amenity-shade" aria-hidden="true" />
              <span className="amenity-number">{String(index + 1).padStart(2, "0")}</span>
              <div className="amenity-copy">
                <h3>{amenity.title}</h3>
                <p>{amenity.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="questions section" id="questions">
        <div className="questions-cover">
          <p className="eyebrow light">Buyer clarity</p>
          <h2>Questions answered<br /><em>before they become doubts.</em></h2>
          <p>
            A premium brochure should be persuasive and precise. These are the facts
            to understand—and the details to verify.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary><span>0{index + 1}</span>{question}<b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="visit section-wide" id="visit">
        <img src="/images/estate-pavilion.png" alt="Timber pavilion in a green plantation setting" loading="lazy" />
        <div className="visit-shade" />
        <div className="visit-copy">
          <p className="eyebrow light">The next step</p>
          <h2>Bring your questions.<br />Walk the land.<br /><em>See the difference.</em></h2>
          <p>
            Ask your authorised Peppy Woods representative to arrange a private visit.
            Inspect the one-acre plot, coffee, pepper and water story in person.
          </p>
          <div className="visit-actions">
            <a className="button button-gold" href="#request-visit">Request a site visit</a>
            <a className="text-link" href="#questions">Open buyer questions <span>↑</span></a>
          </div>
        </div>
        <div className="visit-summary">
          <span>Peppy Woods · Coorg</span>
          <strong>PRIVATE SITE VISIT</strong>
          <b>Walk the land</b>
          <small>Experience the plantation, water story and estate setting in person.</small>
          <em>Visits arranged by prior appointment</em>
        </div>
      </section>

      <section className="offer section offer-final" id="offer">
        <div className="offer-heading">
          <p className="eyebrow">The final consideration</p>
          <h2>Choose your estate.<br /><em>See the value clearly.</em></h2>
          <p>
            Now that you know the land, plantation and water story, compare the two
            estate options and their limited launch pricing.
          </p>
        </div>

        <div className="offer-panel">
          <div className="offer-panel-top">
            <span>Peppy Woods · Coorg</span>
            <span>Limited launch availability</span>
          </div>
          <div
            className="pricing-poster"
            aria-label="One acre launch offer 37 Lakhs against an actual value of 83 Lakhs; half-acre launch offer 20 Lakhs against an actual value of 41 Lakhs"
          >
            <article className="pricing-poster-option pricing-poster-option-acre">
              <h3>1 ACRE</h3>
              <div className="pricing-poster-price-line">
                <strong className="pricing-poster-price">₹37 <span>LAKHS</span></strong>
                <span className="pricing-poster-actual">
                  Actual Value · ₹191/sq. ft. <s>₹83 Lakhs</s>
                </span>
              </div>
              <strong className="pricing-poster-caption">PER ACRE · ₹85/SQ. FT. LAUNCH OFFER</strong>
              <span className="pricing-poster-limit">For the first 5 customers only</span>
            </article>

            <div className="pricing-poster-divider" aria-hidden="true" />

            <article className="pricing-poster-option pricing-poster-option-half">
              <h3>½ ACRE</h3>
              <div className="pricing-poster-price-line">
                <strong className="pricing-poster-price">₹20 <span>LAKHS</span></strong>
                <span className="pricing-poster-actual">
                  Actual Value <s>₹41 Lakhs</s>
                </span>
              </div>
              <strong className="pricing-poster-caption">HALF-ACRE ESTATE · ₹92/SQ. FT. LAUNCH OFFER</strong>
              <span className="pricing-poster-limit">For the first 5 customers only</span>
            </article>
          </div>
          <p>
            Pricing and availability are subject to plot selection, legal verification,
            applicable approvals, documentation, taxes and final sale terms.
          </p>
          <div className="offer-final-actions">
            <a className="button button-gold" href="#request-visit">Request a quote or site visit</a>
          </div>
        </div>
      </section>

      <section className="enquiry section-wide" id="request-visit">
        <div className="enquiry-copy">
          <p className="eyebrow light">Private enquiry</p>
          <h2>Request a quote.<br /><em>Reserve a site visit.</em></h2>
          <p>
            Share how you would like to explore Peppy Woods. The team can prepare
            the current offer details, arrange a private estate walk, or help with both.
          </p>
          <div className="enquiry-steps" aria-label="What happens next">
            <div><span>01</span><p><strong>Choose your request</strong>Quote, site visit, or both.</p></div>
            <div><span>02</span><p><strong>Share your details</strong>Phone and email are required.</p></div>
            <div><span>03</span><p><strong>Receive confirmation</strong>Your enquiry is sent directly to the team.</p></div>
          </div>
        </div>

        <div className="enquiry-card">
          <p className="eyebrow">Request details</p>
          <h3>Tell us how we can help.</h3>
          {enquiryState === "success" ? (
            <div className="enquiry-success" role="status" aria-live="polite">
              <strong>Request sent successfully.</strong>
              <p>{enquiryMessage}</p>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleEnquirySubmit} noValidate>
              <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>
              <div className="form-grid">
                <label className="form-field">
                  <span>Full name</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    maxLength={120}
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    minLength={10}
                    maxLength={20}
                    required
                  />
                </label>
                <label className="form-field">
                  <span>Email address</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={254}
                    required
                  />
                </label>
                <label className="form-field">
                  <span>I would like</span>
                  <select name="requestType" defaultValue="Site visit" required>
                    <option>Site visit</option>
                    <option>Price quote</option>
                    <option>Quote and site visit</option>
                  </select>
                </label>
                <label className="form-field form-field-wide">
                  <span>Preferred visit date <small>Optional</small></span>
                  <input name="preferredDate" type="date" />
                </label>
                <label className="form-field form-field-wide">
                  <span>Message <small>Optional</small></span>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={2000}
                    placeholder="Tell us what you would like to know before your visit."
                  />
                </label>
              </div>
              <button
                className="button button-gold enquiry-submit"
                type="submit"
                disabled={enquiryState === "sending"}
              >
                {enquiryState === "sending" ? "Sending..." : "Prepare my request"}
              </button>
              <p className="form-note">
                Your enquiry will be sent securely to hello@peppywoods.in without
                leaving this page.
              </p>
              {enquiryState === "error" && (
                <p className="form-status form-status-error" role="alert">
                  {enquiryMessage} You can correct the form and retry.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark">PW</span>
            <span className="brand-name"><strong>Peppy Woods</strong><small>Coorg · Managed estates</small></span>
          </a>
          <p>Escape the City. Own the Hills. Build a Legacy.</p>
        </div>
        <div className="footer-links">
          <strong>Explore</strong>
          <a href="#offer">The offer</a>
          <a href="#plantation">Plantation</a>
          <a href="#water">Water</a>
          <a href="/coorg">Coorg guide</a>
          <a href="#questions">Buyer questions</a>
          <a href="#request-visit">Request a quote or visit</a>
        </div>
        <div className="footer-note">
          <strong>Important</strong>
          <p>
            This is a marketing presentation, not a guarantee of title, approvals,
            returns, yield, water availability or future value. Verify all claims and
            documents independently before purchase.
          </p>
        </div>
        <small>© 2026 Peppy Woods · Managed by Soil Systems</small>
      </footer>
    </main>
  );
}
