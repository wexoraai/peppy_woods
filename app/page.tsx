"use client";

import { useState } from "react";

const investments = [
  ["Land appreciation", "Estate land in the Western Ghats corridor, where larger acreage opportunities rarely come to market."],
  ["Payyani timber value", "Approximately 600+ carefully spaced Payyani (Pajanelia longifolia) timber trees per acre, subject to final field layout."],
  ["Pepper crop potential", "Black pepper vines are planned alongside suitable host trees and develop as the plantation matures."],
  ["Coffee crop development", "Shade-grown Robusta coffee is already planted and may reach commercial harvest around the second or third year, depending on field conditions."],
  ["Professional management", "Soil Systems runs the plantation end to end — you review, they grow."],
  ["Near Coorg lifestyle", "Estate country, waterfall drives and hill towns — Coorg living without Coorg prices."],
  ["Cool Ghats climate", "Misty mornings and gentle summers at Western Ghats elevation, year round."],
  ["Layered plantation plan", "Land, Payyani timber, Robusta coffee and black pepper develop on different agricultural timelines."],
];

const journey = [
  ["Purchase", "Individual plots proposed for registration in the purchaser’s name, subject to title verification, survey, applicable approvals and sale documentation."],
  ["Managed plantation", "The team tends the existing coffee and manages planned pepper, Payyani timber and plantation operations."],
  ["Timber growth", "Payyani timber is a long-term plantation asset that develops over decades."],
  ["Pepper cultivation", "Vine establishment and future yield depend on host-tree development, climate, maintenance and agricultural performance."],
  ["Coffee harvest", "Commercial Robusta coffee harvest may begin around the second or third year, depending on plant age, condition and field performance."],
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

const buyerConsiderations = [
  ["Ownership pathway", "Individual plot registration is proposed subject to title verification, survey, approvals and final sale documentation."],
  ["Professional management", "Soil Systems coordinates plantation planning, field operations and ongoing maintenance."],
  ["Coffee and pepper potential", "Robusta coffee and black pepper are intended to develop into recurring crops as the plantation matures."],
  ["Long-term timber value", "Payyani timber is planned as a long-horizon plantation asset."],
  ["Near-Coorg setting", "Western Ghats estate country with access to the wider Coorg lifestyle and hill region."],
];

const faqs = [
  ["Why a managed plantation?", "You own the land and stay connected to its progress while Soil Systems handles soil, planting, labour, irrigation, pruning, harvest and year-round estate upkeep."],
  ["What returns can I expect?", "Coffee and pepper are expected to develop into recurring harvest crops as the plantation matures, while Payyani timber is a long-term asset. Actual commencement, yield and value depend on plant age, rainfall, soil conditions, maintenance, market conditions and agricultural performance."],
  ["How does ownership work?", "Individual plots are proposed for registration in the purchaser’s name, subject to title verification, survey, applicable approvals and final sale documentation. Buyers should obtain independent legal review."],
  ["Who maintains the plantation?", "A resident plantation team working under Soil Systems manages day-to-day operations and provides periodic owner updates."],
  ["How is coffee harvested and sold?", "Coffee is already planted and may begin commercial harvest around the second or third year, depending on plant age and condition. Harvesting, processing and sale arrangements will follow the final plantation management agreement."],
  ["When does pepper income start?", "Pepper income depends on vine establishment, suitable host-tree development, climate, maintenance and crop performance. No immediate-income timeline is assured."],
  ["What legal documentation do I get?", "Available title records, survey information, proposed sale documents and the plantation management agreement are provided for review as applicable. Completion remains subject to legal verification and required approvals."],
  ["Is financing available?", "Financing depends on the buyer and lender. The advisory team can discuss common funding routes, while every buyer should take independent financial advice."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#location" onClick={() => setMenuOpen(false)}>Location</a>
          <a href="#visit" className="nav-cta" onClick={() => setMenuOpen(false)}>Site visit</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/images/peppy-woods-hero.png" alt="Misty green plantation hills at sunrise" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <h1>Escape the city.<br />Own the hills.<br /><em>Build a legacy.</em></h1>
          <p className="hero-intro">A professionally managed Robusta coffee, black pepper and Payyani timber plantation in the Western Ghats—for people who want their investment to grow from the soil.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#visit">Schedule a site visit</a>
            <a className="text-link light" href="#about">Explore Peppy Woods <span>↘</span></a>
          </div>
        </div>
        <div className="hero-note" aria-label="Pre-booking launch offer: 37 lakh per acre for 3-acre bookings">
          <div className="price-kicker"><span>Pre-booking launch offer</span></div>
          <strong><b>₹37</b> lakh</strong>
          <small>per acre* · for 3-acre bookings</small>
          <p className="price-context">Standard starting price: ₹80 lakh per acre. Limited launch inventory.</p>
        </div>
      </section>

      <section className="intro section" id="about">
        <div>
          <p className="eyebrow">About Peppy Woods</p>
          <h2>A plantation designed for generations.</h2>
        </div>
        <div className="intro-copy">
          <p>Imagine waking to mist-covered hills, the aroma of fresh coffee and mornings that belong entirely to you. Peppy Woods is more than farmland—it is a long-term legacy investment.</p>
          <p>Individual plots are proposed for purchaser registration, subject to title verification, survey, applicable approvals and final sale documentation. Soil Systems manages the coffee, pepper, Payyani timber and daily plantation operations.</p>
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

      <section className="buyer-section section">
        <div className="buyer-heading">
          <p className="eyebrow">The proposition</p>
          <h2>Why buyers are considering Peppy Woods.</h2>
          <p>Clearer fundamentals, professionally planned plantation management and a long-term view of land and crops.</p>
        </div>
        <div className="buyer-grid">
          {buyerConsiderations.map(([title, text], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
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

      <section className="location section" id="location">
        <div className="location-copy">
          <p className="eyebrow">Location</p>
          <h2>Near Guthigar,<br />Sullia.</h2>
          <p className="location-address">Western Ghats · Karnataka</p>
          <p>Peppy Woods is located near Guthigar in the Sullia estate region, with access to the wider Coorg hill country. Exact site access and parcel details are shared during a scheduled land visit.</p>
        </div>
        <div className="location-card">
          <p className="map-label">Peppy Woods <span>Location overview</span></p>
          <div className="contours" aria-hidden="true"><i /><i /><i /><i /><i /><b>PW</b></div>
          <div className="place-list">
            <div><span>Plantation</span><strong>Near Guthigar</strong></div>
            <div><span>Estate region</span><strong>Sullia</strong></div>
            <div><span>Landscape</span><strong>Western Ghats</strong></div>
            <div><span>State</span><strong>Karnataka</strong></div>
          </div>
        </div>
      </section>

      <section className="visit section-wide" id="visit">
        <div className="visit-copy">
          <div className="visit-price" aria-label="Pre-booking launch offer: 37 lakh per acre for 3-acre bookings">
            <div className="price-kicker"><span>Pre-booking launch offer</span></div>
            <strong><b>₹37</b> lakh</strong>
            <small>per acre* · for 3-acre bookings</small>
            <p className="price-context">Standard starting price: ₹80 lakh per acre. Limited inventory is available during the launch phase.</p>
          </div>
          <h2>Invest in nature.<br />Grow with time.<br />Leave a legacy.</h2>
          <p>Come walk the land—the mist does the convincing.</p>
        </div>
        <div className="visit-form-wrap">
          <div className="contact-hold">
            <span>Verified sales contact</span>
            <h3>Official contact details will be added shortly.</h3>
            <p>The Soil Systems sales phone, WhatsApp and email are intentionally left blank until the official channels are confirmed.</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-about">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">PW</span><span><strong>Peppy Woods</strong><small>Managed estates</small></span></a>
          <p>A managed plantation by Soil Systems, near Guthigar, Sullia—on the doorstep of Coorg.</p>
        </div>
        <div className="footer-links"><strong>Explore</strong><a href="#about">About</a><a href="#invest">Why invest</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><a href="#location">Location</a><a href="#visit">Contact</a></div>
        <div className="footer-links contact-placeholder"><strong>Contact</strong><span>Sales phone —</span><span>WhatsApp —</span><span>Email —</span></div>
        <small>© 2026 Peppy Woods · Soil Systems <span>·</span> <a href="#">Privacy policy</a> <span>·</span> *₹37 lakh per acre is a limited pre-booking launch offer for 3-acre bookings. Standard starting price is ₹80 lakh per acre. Pricing, availability, crop timelines and yields are indicative and subject to documentation, legal verification, approvals, agricultural conditions and performance.</small>
      </footer>
    </main>
  );
}
