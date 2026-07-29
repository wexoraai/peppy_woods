"use client";

import { FormEvent, useState } from "react";

const benefits = [
  {
    number: "01",
    title: "Premium timber",
    text: "Around 600 premium timber trees are planned per acre, creating a patient, long-horizon asset rooted in your own land.",
  },
  {
    number: "02",
    title: "Black pepper",
    text: "Black pepper is cultivated on every suitable tree, adding the potential for recurring seasonal income.",
  },
  {
    number: "03",
    title: "Established coffee",
    text: "An established coffee plantation is being cared for today, with harvesting expected in the coming seasons.",
  },
  {
    number: "04",
    title: "Expert management",
    text: "An experienced plantation team handles the operations while you enjoy the pride and possibilities of ownership.",
  },
];

const process = [
  ["The Coorg lifestyle", "A special opportunity to own estate land on Coorg’s doorstep at an introductory launch price."],
  ["Western Ghats climate", "Lush surroundings, mist-covered hills and a cool, pleasant climate make every visit feel restorative."],
  ["Plantation + resort life", "La Cavana Resort is just 40 minutes away, connecting plantation ownership with a relaxed resort experience."],
  ["Multiple ways to grow", "Land appreciation, timber value, coffee harvests and pepper cultivation come together in one living asset."],
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
          <p className="eyebrow light">Peppy Woods · Near Guthigar, Sullia</p>
          <h1>Escape the city.<br />Own the hills.<br /><em>Build a legacy.</em></h1>
          <p className="hero-intro">
            Wake to mist-covered hills, the aroma of fresh coffee and the
            peaceful sounds of nature at an exclusive managed plantation on
            the doorstep of Coorg.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Book a private tour</a>
            <a className="text-link light" href="#estate">Discover the estate <span>↘</span></a>
          </div>
        </div>
        <div className="hero-note">
          <span>01</span>
          <p>Launch offer<br />₹37 lakhs per acre*</p>
        </div>
      </section>

      <section className="intro section" id="estate">
        <div>
          <p className="eyebrow">Welcome to Peppy Woods</p>
          <h2>More than farmland.<br />A legacy investment.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Near Guthigar in Sullia, Peppy Woods is an exclusive managed
            plantation created for people who want a deeper connection to
            nature and a tangible long-term asset.
          </p>
          <p>
            Timber, black pepper and established coffee grow together in the
            lush Western Ghats, while an experienced team takes care of the
            plantation operations on your behalf.
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
          <span>Ownership, without the operational burden</span>
          <p>You enjoy the estate and its possibilities while experienced professionals manage what grows.</p>
        </div>
      </section>

      <section className="facts section" aria-label="Estate highlights">
        <div className="fact">
          <strong>600<sup>+</sup></strong>
          <span>Premium timber trees<br />around every acre</span>
        </div>
        <div className="fact">
          <strong>2</strong>
          <span>Productive crops:<br />coffee and black pepper</span>
        </div>
        <div className="fact">
          <strong>1</strong>
          <span>Experienced team<br />managing it all</span>
        </div>
      </section>

      <section className="benefits section" id="ownership">
        <div className="section-heading">
          <p className="eyebrow">What grows at Peppy Woods</p>
          <h2>Value that begins<br />in the soil.</h2>
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
          <p className="eyebrow light">Why Peppy Woods?</p>
          <h2>Nature, income<br />and time.</h2>
          <p className="process-lead">
            The best investments do not just grow in value. They grow from the
            soil—across seasons, harvests and generations.
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
          <p className="eyebrow">Near Guthigar, Sullia</p>
          <h2>Own the hills.<br />Stay connected.</h2>
          <p>
            Set in the lush Western Ghats on the doorstep of Coorg, Peppy Woods
            offers a cool climate, peaceful plantation life and easy access to
            the experiences that make this region special.
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
          <p className="eyebrow light">Launch offer · ₹37 lakhs per acre</p>
          <h2>Invest in nature.<br />Grow with time.<br />Leave a legacy.</h2>
          <p>
            Come walk the plantation near Guthigar. We&apos;ll share the
            ownership details, management approach and what the coming seasons
            could hold for your acre.
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
        <p>Invest in Nature. Grow with Time. Leave a Legacy.</p>
        <div>
          <a href="#estate">The estate</a>
          <a href="#ownership">Ownership</a>
          <a href="#location">Location</a>
          <a href="#visit">Contact</a>
        </div>
        <small>© 2026 Peppy Woods · Managed by Soil Systems. *Indicative launch pricing; subject to availability and final documentation.</small>
      </footer>
    </main>
  );
}
