import type { Metadata } from "next";
import styles from "./coorg.module.css";

export const metadata: Metadata = {
  title: "What Coorg Is Known For | Peppy Woods",
  description:
    "Discover what Coorg is known for: coffee estates, black pepper, the Western Ghats, Talacauvery, waterfalls, Kodava culture and slow hill-country living.",
};

const signatures = [
  {
    number: "01",
    title: "Coffee estates",
    text: "Coorg is Karnataka’s celebrated coffee country. Robusta and Arabica grow beneath layered shade, shaping the region’s landscape, work and everyday ritual.",
    image: "/gallery/coffee-cherries.png",
  },
  {
    number: "02",
    title: "Black pepper & spices",
    text: "Pepper vines climb through plantation canopies alongside cardamom and other aromatic spices—giving Coorg’s estates their layered character.",
    image: "/gallery/pepper-vines.png",
  },
  {
    number: "03",
    title: "Western Ghats",
    text: "Rolling green hills, forest edges, monsoon mist and cool mornings make Coorg one of the Western Ghats’ most recognisable hill landscapes.",
    image: "/gallery/ghats-coffee.png",
  },
  {
    number: "04",
    title: "The River Cauvery",
    text: "Talacauvery in the Brahmagiri Hills is revered as the origin of the Cauvery, giving water a deep natural and cultural meaning across Kodagu.",
    image: "/images/peppy-woods-hero.png",
  },
  {
    number: "05",
    title: "Waterfalls & forest",
    text: "Abbey Falls, mountain streams, rain-fed greenery and forest walks are central to the way travellers remember Coorg.",
    image: "/gallery/coffee-sunrise.png",
  },
  {
    number: "06",
    title: "Kodava culture",
    text: "Distinctive traditions, warm plantation hospitality, family homes, festivals and a celebrated cuisine give Coorg an identity beyond scenery.",
    image: "/gallery/campfire.png",
  },
];

const places = [
  {
    label: "Hill town",
    title: "Madikeri",
    text: "The best-known town in Coorg, with an old hill-station rhythm, Madikeri Fort and access to some of Kodagu’s signature viewpoints.",
    image: "/coorg/madikeri.png",
    imagePosition: "center",
  },
  {
    label: "Viewpoint",
    title: "Raja’s Seat",
    text: "A garden and viewpoint remembered for layered hills, open skies and quiet sunset panoramas.",
    image: "/coorg/rajas-seat.png",
    imagePosition: "center 55%",
  },
  {
    label: "Waterfall",
    title: "Abbey Falls",
    text: "A dramatic cascade approached through a coffee-and-spice landscape near Madikeri.",
    image: "/coorg/abbey-falls.png",
    imagePosition: "center",
  },
  {
    label: "Sacred origin",
    title: "Talacauvery",
    text: "The revered birthplace of the River Cauvery, set high in the Brahmagiri Hills.",
    image: "/coorg/talacauvery.png",
    imagePosition: "center 38%",
  },
  {
    label: "Plantation country",
    title: "Somwarpet & Virajpet",
    text: "Estate heartlands known for coffee, spices, family-run plantations and a slower rural experience.",
    image: "/coorg/plantation-country.png",
    imagePosition: "center",
  },
  {
    label: "River experience",
    title: "Dubare",
    text: "A Cauvery-side forest setting associated with nature, river activities and the wider wildlife landscape.",
    image: "/coorg/dubare-elephant-camp.png",
    imagePosition: "center",
  },
];

const knownFor = [
  "Coffee under shade trees",
  "Pepper climbing the canopy",
  "Mist moving across the hills",
  "The sacred source of the Cauvery",
  "Waterfalls after the monsoon",
  "Kodava hospitality and cuisine",
  "Plantation homes and slow mornings",
  "Forest trails, birds and open skies",
];

export default function CoorgPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Peppy Woods home">
          <span className={styles.brandMark}>PW</span>
          <span>
            <strong>Peppy Woods</strong>
            <small>Coorg · Managed estates</small>
          </span>
        </a>
        <nav aria-label="Coorg page navigation">
          <a href="#known-for">Known for</a>
          <a href="#places">Places</a>
          <a href="#peppy-woods">Peppy Woods</a>
          <a className={styles.headerCta} href="/#visit">Plan a visit</a>
        </nav>
      </header>

      <section className={styles.hero}>
        <img
          src="/images/peppy-woods-hero.png"
          alt="Misty plantation hills in the Western Ghats"
          fetchPriority="high"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p>Kodagu · Karnataka · Western Ghats</p>
          <h1 aria-label="Coorg is known for"><strong>COORG</strong><span>is known for</span></h1>
          <h2>Coffee. Mist. Water.<br /><em>A culture of its own.</em></h2>
          <p className={styles.heroLead}>
            A hill country shaped by plantations, monsoon forests, the River
            Cauvery and a way of life that feels unmistakably Kodagu.
          </p>
          <a className={styles.primaryButton} href="#known-for">Discover Coorg <span>↓</span></a>
        </div>
        <div className={styles.heroIndex}>
          <div><strong>Coffee</strong><span>Plantation country</span></div>
          <div><strong>Cauvery</strong><span>Sacred river origin</span></div>
          <div><strong>Kodava</strong><span>Culture & hospitality</span></div>
        </div>
      </section>

      <section className={styles.intro}>
        <div>
          <p className={styles.eyebrow}>The identity of Coorg</p>
          <h2>Not one attraction.<br /><em>A complete atmosphere.</em></h2>
        </div>
        <div className={styles.introCopy}>
          <p>
            Coorg—also called Kodagu—is known for the way its signature elements
            come together: coffee beneath tall shade trees, pepper curling up the
            canopy, mist over forested hills and water moving through the landscape.
          </p>
          <p>
            Its appeal is also deeply human. Kodava traditions, local cuisine,
            plantation hospitality and unhurried mornings turn a beautiful region
            into a place people remember.
          </p>
        </div>
      </section>

      <section className={styles.signatures} id="known-for">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Six signatures</p>
          <h2>What Coorg<br /><em>is known for.</em></h2>
          <p>
            The landscape, crops, water and culture that make Kodagu one of South
            India’s most distinctive hill regions.
          </p>
        </div>

        <div className={styles.signatureGrid}>
          {signatures.map((item) => (
            <article key={item.title}>
              <img src={item.image} alt="" loading="lazy" />
              <div className={styles.cardShade} />
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.rhythm}>
        <div className={styles.rhythmImage}>
          <img src="/gallery/coffee-sunrise.png" alt="Coffee plantation in the morning light" loading="lazy" />
        </div>
        <div className={styles.rhythmCopy}>
          <p className={`${styles.eyebrow} ${styles.light}`}>The rhythm of the hills</p>
          <h2>What people<br /><em>remember.</em></h2>
          <div className={styles.knownList}>
            {knownFor.map((item, index) => (
              <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.places} id="places">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Names to know</p>
          <h2>Places that shape<br /><em>the Coorg story.</em></h2>
          <p>
            These are regional highlights, not distance claims from Peppy Woods.
            Travel time and routes should be checked for every visit.
          </p>
        </div>

        <div className={styles.placeGrid}>
          {places.map((place, index) => (
            <article key={place.title}>
              <div className={styles.placeImage}>
                <img
                  src={place.image}
                  alt={`${place.title} in Coorg`}
                  loading="lazy"
                  style={{ objectPosition: place.imagePosition }}
                />
                <span>{place.label}</span>
                <b>{String(index + 1).padStart(2, "0")}</b>
              </div>
              <div className={styles.placeCopy}>
                <h3>{place.title}</h3>
                <p>{place.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.peppyConnection} id="peppy-woods">
        <div className={styles.connectionCopy}>
          <p className={`${styles.eyebrow} ${styles.light}`}>Peppy Woods & the Coorg experience</p>
          <h2>Close to the feeling.<br /><em>Clear about the location.</em></h2>
          <p>
            Peppy Woods is presented near Guthigar in the Sullia estate region of
            Karnataka, with access to the wider Coorg hill-country experience.
            Exact site access, parcel details and travel routes are shared during a
            scheduled land visit.
          </p>
          <div className={styles.locationFacts}>
            <div><span>Project area</span><strong>Near Guthigar, Sullia</strong></div>
            <div><span>Wider destination</span><strong>Coorg hill country</strong></div>
            <div><span>Landscape</span><strong>Western Ghats</strong></div>
          </div>
        </div>
        <div className={styles.connectionImage}>
          <img src="/gallery/ghats-coffee.png" alt="Layered Western Ghats plantation landscape" loading="lazy" />
          <span>Peppy Woods · Western Ghats</span>
        </div>
      </section>

      <section className={styles.cta}>
        <img src="/images/estate-pavilion.png" alt="A pavilion in a green plantation setting" loading="lazy" />
        <div className={styles.ctaShade} />
        <div className={styles.ctaCopy}>
          <p className={`${styles.eyebrow} ${styles.light}`}>Continue exploring</p>
          <h2>Know the destination.<br /><em>Then walk the land.</em></h2>
          <p>
            Return to the Peppy Woods offer, review the one-acre proposition and
            arrange a private site visit through an authorised representative.
          </p>
          <div>
            <a className={styles.primaryButton} href="/#offer">View the offer</a>
            <a className={styles.secondaryLink} href="/#visit">Plan a site visit <span>→</span></a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <a className={styles.brand} href="/">
          <span className={styles.brandMark}>PW</span>
          <span><strong>Peppy Woods</strong><small>Coorg · Managed estates</small></span>
        </a>
        <p>Escape the City. Own the Hills. Build a Legacy.</p>
        <div><a href="/">Home</a><a href="/#offer">The offer</a><a href="/#questions">Buyer questions</a></div>
        <small>
          Coorg destination content is for general regional context. Verify routes,
          seasonal access and project-specific location details independently.
        </small>
      </footer>
    </main>
  );
}
