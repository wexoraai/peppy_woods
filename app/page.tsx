"use client";

import { FormEvent, useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Professionally managed",
    text: "From soil health and irrigation to pruning and harvest, the estate team handles day-to-day operations.",
  },
  {
    number: "02",
    title: "Three layers of value",
    text: "Coffee, pepper and premium timber grow on different timelines, alongside the land itself.",
  },
  {
    number: "03",
    title: "Yours, in every sense",
    text: "Each estate parcel is registered in your name, creating a tangible asset for the next generation.",
  },
];

const process = [
  ["Choose your acre", "Walk the land, understand the plantation plan and select the parcel that feels right."],
  ["Complete due diligence", "Review title, survey records and the management agreement with your own advisor."],
  ["Let the estate grow", "The resident team cultivates, maintains and shares periodic updates from the ground."],
  ["Return to your woods", "Visit for slow weekends, harvest seasons and a life that stays connected to the land."],
];

const places = [
  ["Guthigar", "At the gate"],
  ["Sullia town", "≈ 30 min"],
  ["La Cavana Resort", "≈ 40 min"],
  ["Madikeri, Coorg", "≈ 90 min"],
  ["Mangaluru Airport", "≈ 2.5 hrs"],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Peppy Woods home">
          <span className="brand-mark">PW</span>
          <span>
            <strong>Peppy Woods</strong>
            <small>Managed estates</small>
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
          <a href="#estate" onClick={() => setMenuOpen(false)}>The estate</a>
          <a href="#ownership" onClick={() => setMenuOpen(false)}>Ownership</a>
          <a href="#location" onClick={() => setMenuOpen(false)}>Location</a>
          <a href="#visit" className="nav-cta" onClick={() => setMenuOpen(false)}>Plan a visit</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img
          className="hero-image"
          src="/images/peppy-woods-hero.png"
          alt="Misty green plantation hills at sunrise"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Guthigar · On Coorg&apos;s doorstep</p>
          <h1>Own a living<br />piece of the<br /><em>Western Ghats.</em></h1>
          <p className="hero-intro">
            A rare managed coffee, pepper and timber estate for people seeking
            land, legacy and a slower rhythm of life.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Book a private tour</a>
            <a className="text-link light" href="#estate">Discover the estate <span>↘</span></a>
          </div>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Limited one-acre estate parcels<br />from ₹37 lakhs*</p>
        </div>
      </section>

      <section className="intro section" id="estate">
        <div>
          <p className="eyebrow">A considered way to own land</p>
          <h2>Not a plot.<br />A place that keeps growing.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Peppy Woods brings together titled estate ownership and thoughtful
            plantation management in the cool, rain-fed landscape of the
            Western Ghats.
          </p>
          <p>
            Beneath a canopy of premium timber, shade-grown coffee and pepper
            vines form a productive, layered estate—professionally tended while
            you remain connected to every season.
          </p>
        </div>
      </section>

      <section className="feature-image section-wide">
        <img
          src="/images/estate-pavilion.png"
          alt="A timber and stone pavilion nestled inside a lush coffee estate"
          loading="lazy"
        />
        <div className="image-caption">
          <span>Made for unhurried weekends</span>
          <p>Wake beneath the canopy. Walk your own rows. Let the rain set the pace.</p>
        </div>
      </section>

      <section className="facts section" aria-label="Estate highlights">
        <div className="fact">
          <strong>600<sup>+</sup></strong>
          <span>Premium timber trees<br />planned per acre</span>
        </div>
        <div className="fact">
          <strong>100<sup>%</sup></strong>
          <span>End-to-end plantation<br />management</span>
        </div>
        <div className="fact">
          <strong>3</strong>
          <span>Complementary layers:<br />coffee, pepper & timber</span>
        </div>
      </section>

      <section className="benefits section" id="ownership">
        <div className="section-heading">
          <p className="eyebrow">What ownership feels like</p>
          <h2>The estate life,<br />without the estate work.</h2>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => (
            <article className="benefit" key={benefit.number}>
              <span>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process section">
        <div className="section-heading process-heading">
          <p className="eyebrow light">From first walk to first harvest</p>
          <h2>A clear path<br />to the woods.</h2>
          <p className="process-lead">
            Ownership should feel grounded from the beginning. We keep each step
            considered, transparent and personal.
          </p>
        </div>
        <div className="process-list">
          {process.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="location section" id="location">
        <div className="location-copy">
          <p className="eyebrow">The best kind of connected</p>
          <h2>Deep in nature.<br />Never out of reach.</h2>
          <p>
            Near Guthigar in Sullia taluk, Peppy Woods sits in estate country
            between the coast and Coorg—close enough for a spontaneous weekend,
            far enough to feel transformed.
          </p>
        </div>
        <div className="location-card">
          <p className="map-label">Peppy Woods <span>12.57° N · 75.48° E</span></p>
          <div className="contours" aria-hidden="true">
            <i /><i /><i /><i /><i />
            <b>PW</b>
          </div>
          <div className="place-list">
            {places.map(([place, time]) => (
              <div key={place}><span>{place}</span><strong>{time}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="visit section-wide" id="visit">
        <div className="visit-copy">
          <p className="eyebrow light">Come see what the mist reveals</p>
          <h2>Your acre makes<br />more sense on foot.</h2>
          <p>
            Tell us a little about your plans. We&apos;ll arrange a private
            estate walk and share the ownership details before you travel.
          </p>
        </div>
        <div className="visit-form-wrap">
          {submitted ? (
            <div className="success" role="status">
              <span>✓</span>
              <h3>Your visit request is noted.</h3>
              <p>The Peppy Woods team will reach out to plan the details.</p>
              <button className="text-link light" onClick={() => setSubmitted(false)}>Send another request</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                <span>Your name</span>
                <input name="name" autoComplete="name" required placeholder="Full name" />
              </label>
              <div className="form-row">
                <label>
                  <span>Phone</span>
                  <input name="phone" type="tel" autoComplete="tel" required placeholder="+91" />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required placeholder="you@email.com" />
                </label>
              </div>
              <label>
                <span>I&apos;m interested in</span>
                <select name="interest" defaultValue="A private site visit">
                  <option>A private site visit</option>
                  <option>Ownership details</option>
                  <option>Investment and management plan</option>
                </select>
              </label>
              <button className="button button-gold" type="submit">Request a private tour <span>→</span></button>
              <small>By submitting, you agree to be contacted about Peppy Woods.</small>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">PW</span>
          <span><strong>Peppy Woods</strong><small>Managed estates</small></span>
        </a>
        <p>Land. Life. Legacy.</p>
        <div>
          <a href="#estate">The estate</a>
          <a href="#ownership">Ownership</a>
          <a href="#location">Location</a>
          <a href="#visit">Contact</a>
        </div>
        <small>© 2026 Peppy Woods. *Indicative launch pricing; subject to availability and final documentation.</small>
      </footer>
    </main>
  );
}
