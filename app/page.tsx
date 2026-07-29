"use client";

import { FormEvent, useState } from "react";

const investments = [
  ["Land appreciation", "Titled estate land in the Western Ghats corridor, where acreage rarely comes to market."],
  ["Premium timber value", "600+ timber trees per acre maturing into a long-horizon asset on your own land."],
  ["Recurring pepper income", "Black pepper vines on the timber begin yielding early and return every season."],
  ["Coffee harvest", "Shade-grown coffee under the canopy adds a second annual crop to the same acre."],
  ["Professional management", "Soil Systems runs the plantation end to end — you review, they grow."],
  ["Near Coorg lifestyle", "Estate country, waterfall drives and hill towns — Coorg living without Coorg prices."],
  ["Cool Ghats climate", "Misty mornings and gentle summers at Western Ghats elevation, year round."],
  ["Resort access", "La Cavana Resort is 40 minutes away — ownership with a holiday built in."],
];

const journey = [
  ["Purchase", "Acre plots, clear title, registered in your name."],
  ["Managed plantation", "The team plants and tends coffee, pepper and timber from day one."],
  ["Timber growth", "Trees compound quietly in the background for decades."],
  ["Pepper cultivation", "Vines climb the timber and start producing within a few seasons."],
  ["Coffee harvest", "Annual shade-grown harvests bring recurring income."],
  ["Long-term appreciation", "Land, timber and yield all grow on separate clocks."],
  ["Legacy asset", "An estate your children inherit — not a statement they file."],
];

const gallery = [
  ["Coffee at sunrise", "/gallery/coffee-sunrise.png", "gallery-wide", "center center"],
  ["Coffee cherries", "/gallery/coffee-cherries.png", "", "center center"],
  ["The timber lane", "/gallery/timber-lane.png", "gallery-tall", "center center"],
  ["Western Ghats layers", "/gallery/ghats-coffee.png", "gallery-tall", "center center"],
  ["Pepper on the vine", "/gallery/pepper-vines.png", "gallery-wide", "center center"],
  ["Pepper beneath the canopy", "/gallery/pepper-canopy.png", "", "center center"],
];

const moments = [
  "Morning coffee from your own trees",
  "Nature walks under the timber canopy",
  "Family weekends in the hills",
  "Campfire evenings and star-thick skies",
  "Birdsong, wildlife and waterfall drives",
  "Mountain views that never repeat",
];

const stories = [
  ["“We came for the investment maths and stayed for the mist. Our daughters now argue over whose acre it is.”", "Arjun & Meera Rao", "Owners since launch · Bengaluru"],
  ["“I wanted farmland without becoming a farmer. The team sends updates; I send visitors.”", "Kavitha Shenoy", "Owner, 2 acres · Mangaluru"],
  ["“The pepper paid before I expected, the timber is for my son. Land you can walk beats numbers on a screen.”", "Vikram Nair", "Owner · Dubai NRI"],
];

const faqs = [
  ["Why a managed plantation?", "You own the land and stay connected to its progress while Soil Systems handles soil, planting, labour, irrigation, pruning, harvest and year-round estate upkeep."],
  ["What returns can I expect?", "Peppy Woods combines crops and assets on different timelines: recurring pepper and coffee harvests, long-horizon timber value and potential land appreciation. Detailed projections are shared during the ownership discussion."],
  ["How does ownership work?", "Each acre plot is registered in the buyer’s name, supported by the applicable title, survey and sale documentation for independent legal review."],
  ["Who maintains the plantation?", "A resident plantation team working under Soil Systems manages day-to-day operations and provides periodic owner updates."],
  ["How is coffee harvested and sold?", "The estate team manages seasonal harvesting, processing coordination and sale according to the plantation management agreement."],
  ["When does pepper income start?", "Pepper vines typically begin producing within the first few seasons, with yield developing as the vines mature and conditions allow."],
  ["What legal documentation do I get?", "Buyers receive the relevant sale deed, title documents, survey records and plantation management agreement for review before completion."],
  ["Is financing available?", "Financing depends on the buyer and lender. The advisory team can discuss common funding routes, while every buyer should take independent financial advice."],
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
          <span><strong>Peppy Woods</strong><small>Managed by Soil Systems</small></span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#invest" onClick={() => setMenuOpen(false)}>Why invest</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#visit" className="nav-cta" onClick={() => setMenuOpen(false)}>Site visit</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/peppy-woods-hero.png" alt="Misty green plantation hills at sunrise" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow light">Near Guthigar, Sullia · On Coorg&apos;s doorstep</p>
          <h1>Escape the city.<br />Own the hills.<br /><em>Build a legacy.</em></h1>
          <p className="hero-intro">A professionally managed coffee, pepper and timber plantation in the Western Ghats—for people who want their investment to grow from the soil.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Schedule a site visit</a>
            <a className="text-link light" href="#about">Explore Peppy Woods <span>↘</span></a>
          </div>
        </div>
        <div className="hero-note" aria-label="Original price 1.2 crore. Launch price 37 lakhs per acre">
          <div className="price-kicker"><del>₹1.2 crore</del><span>Launch price</span></div>
          <strong><b>₹37</b> lakhs</strong>
          <small>per acre*</small>
        </div>
      </section>

      <section className="intro section" id="about">
        <div>
          <p className="eyebrow">About Peppy Woods</p>
          <h2>A plantation designed for generations.</h2>
        </div>
        <div className="intro-copy">
          <p>Imagine waking to mist-covered hills, the aroma of fresh coffee and mornings that belong entirely to you. Peppy Woods is more than farmland—it is a long-term legacy investment.</p>
          <p>You own titled estate land near Guthigar, Sullia. Soil Systems and an experienced plantation team manage the coffee, pepper, timber and daily operations while you enjoy ownership.</p>
        </div>
      </section>

      <section className="feature-image section-wide">
        <img src="/images/estate-pavilion.png" alt="A timber and stone pavilion inside a lush coffee estate" loading="lazy" />
        <div className="image-caption"><span>You own the land. Professionals grow it.</span><p>A living asset for wealth creation, a slower way of life and something worth handing down.</p></div>
      </section>

      <section className="investment-section section" id="invest">
        <div className="section-heading investment-heading">
          <p className="eyebrow">Investment · Why Peppy Woods?</p>
          <h2>One acre.<br />Many ways to grow.</h2>
          <p>Land, timber and annual crops work on separate clocks, creating a layered estate proposition in one of South India&apos;s most distinctive landscapes.</p>
        </div>
        <div className="investment-grid">
          {investments.map(([title, text], index) => (
            <article className="investment-card" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journey section">
        <div className="section-heading journey-heading">
          <p className="eyebrow light">The investment model</p>
          <h2>From purchase<br />to legacy.</h2>
          <p className="process-lead">Seven clear stages connect your first walk through the estate to a tangible asset for the next generation.</p>
        </div>
        <div className="journey-list">
          {journey.map(([title, text], index) => (
            <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="gallery-section section" id="gallery">
        <div className="gallery-heading">
          <div><p className="eyebrow">Gallery</p><h2>Life at the plantation.</h2></div>
          <p>Coffee slopes, timber shade, pepper vines and the quiet tracks that connect one part of the estate to another.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map(([title, src, className, position]) => (
            <figure className={className} key={title}>
              <img src={src} alt={title} loading="lazy" style={{ objectPosition: position }} />
              <figcaption>{title}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="management section-wide">
        <div className="management-copy">
          <p className="eyebrow light">Plantation management</p>
          <h2>You own the land. Professionals grow it.</h2>
          <p>Soil Systems and an experienced plantation team manage every operation—soil health, irrigation, planting, pruning and harvest—so returns arrive without your weekends going with them.</p>
        </div>
        <div className="management-flow" aria-label="Plantation management flow">
          {["Owner", "Soil Systems", "Plantation team", "Harvest", "Returns"].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="life section">
        <div className="life-copy">
          <p className="eyebrow">The life</p>
          <h2>Weekends that<br />smell like coffee.</h2>
          <div className="moment-list">{moments.map((moment) => <p key={moment}><span>·</span>{moment}</p>)}</div>
        </div>
        <div className="life-images">
          <img src="/gallery/campfire.png" alt="A campfire evening beneath the trees" loading="lazy" />
        </div>
      </section>

      <section className="resort section-wide">
        <div className="resort-image resort-collage">
          <img className="resort-cabin" src="/gallery/la-cavana-cabin.png" alt="A wooden La Cavana cabin surrounded by trees" loading="lazy" />
          <img className="resort-hillside" src="/gallery/la-cavana-hillside.png" alt="La Cavana Resort on a green hillside at sunset" loading="lazy" />
        </div>
        <div className="resort-copy">
          <span>40 minutes away</span>
          <p className="eyebrow">La Cavana Resort, down the road</p>
          <h2>Own the plantation.<br />Borrow the resort.</h2>
          <p>Pool days, dining and stays at La Cavana pair with your estate weekends—the best of both.</p>
        </div>
      </section>

      <section className="stories section">
        <div className="stories-heading"><p className="eyebrow">Owners&apos; stories</p><h2>People who bought a hill.</h2></div>
        <div className="story-grid">
          {stories.map(([quote, name, role]) => (
            <blockquote key={name}><p>{quote}</p><div className="story-byline"><strong>{name}</strong><span>{role}</span></div></blockquote>
          ))}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading faq-heading"><p className="eyebrow">Questions</p><h2>Asked often.<br />Answered plainly.</h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question}><summary><span>0{index + 1}</span>{question}<b>+</b></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="visit section-wide" id="visit">
        <div className="visit-copy">
          <div className="visit-price" aria-label="Original price 1.2 crore. Launch price 37 lakhs per acre">
            <div className="price-kicker"><del>₹1.2 crore</del><span>Launch price</span></div>
            <strong><b>₹37</b> lakhs</strong>
            <small>per acre*</small>
          </div>
          <h2>Invest in nature.<br />Grow with time.<br />Leave a legacy.</h2>
          <p>Come walk the land—the mist does the convincing.</p>
          <div className="contact-actions">
            <a className="text-link light" href="mailto:hello@peppywoods.in?subject=Peppy Woods brochure request">Download brochure</a>
            <a className="text-link light" href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20speak%20to%20a%20Peppy%20Woods%20advisor." target="_blank" rel="noreferrer">Talk to an advisor</a>
          </div>
        </div>
        <div className="visit-form-wrap">
          {submitted ? (
            <div className="success" role="status"><span>✓</span><h3>Your visit request is noted.</h3><p>The Peppy Woods team will reach out to plan the details.</p><button className="text-link light" onClick={() => setSubmitted(false)}>Send another request</button></div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label><span>Your name</span><input name="name" autoComplete="name" required placeholder="Full name" /></label>
              <div className="form-row">
                <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label>
                <label><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@email.com" /></label>
              </div>
              <label><span>I&apos;m interested in</span><select name="interest" defaultValue="A private site visit"><option>A private site visit</option><option>Ownership details</option><option>Investment and management plan</option></select></label>
              <button className="button button-gold" type="submit">Schedule a site visit <span>→</span></button>
              <small>By submitting, you agree to be contacted about Peppy Woods.</small>
            </form>
          )}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-about">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">PW</span><span><strong>Peppy Woods</strong><small>Managed estates</small></span></a>
          <p>A managed plantation by Soil Systems, near Guthigar, Sullia—on the doorstep of Coorg.</p>
        </div>
        <div className="footer-links"><strong>Explore</strong><a href="#about">About</a><a href="#invest">Why invest</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><a href="#visit">Contact</a></div>
        <div className="footer-links"><strong>Contact</strong><a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">WhatsApp us</a><a href="tel:+919876543210">+91 98765 43210</a><a href="mailto:hello@peppywoods.in">hello@peppywoods.in</a></div>
        <small>© 2026 Peppy Woods · Soil Systems <span>·</span> <a href="#">Privacy policy</a> <span>·</span> *Pricing and crop timelines are indicative and subject to documentation, agricultural conditions and availability.</small>
      </footer>
    </main>
  );
}
