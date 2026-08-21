import type { Metadata } from "next";
import Link from "next/link";
import styles from "./privacy-policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Peppy Woods",
  description:
    "Learn how Peppy Woods collects, uses and protects information shared through its website and estate enquiries.",
};

const sections = [
  {
    title: "Information we collect",
    content: (
      <>
        <p>
          When you request a quote, arrange a site visit or contact us, we may
          collect information you choose to provide, including your name, phone
          number, email address, city and details about your estate enquiry.
        </p>
        <p>
          We may also receive basic technical information when you use this
          website, such as your browser type, device type, IP address, pages
          visited and the time of your visit. This information helps us
          understand how the website is used and keep it working reliably.
        </p>
      </>
    ),
  },
  {
    title: "How we use your information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>respond to your questions and estate enquiries;</li>
          <li>arrange calls, quotes and site visits you request;</li>
          <li>share relevant information about Peppy Woods;</li>
          <li>improve our website, services and communications;</li>
          <li>protect the website from misuse and meet legal obligations.</li>
        </ul>
        <p>
          We do not sell or rent your personal information. We will only send
          marketing updates where permitted, and you can ask us to stop at any
          time.
        </p>
      </>
    ),
  },
  {
    title: "Cookies and website analytics",
    content: (
      <p>
        This website may use essential cookies and similar technologies to
        operate correctly, remember preferences and understand general website
        usage. You can control cookies through your browser settings, although
        disabling essential cookies may affect some features.
      </p>
    ),
  },
  {
    title: "When information is shared",
    content: (
      <p>
        We may share information with trusted service providers who help us
        operate the website, deliver communications or manage your requested
        enquiry. They may use it only for the services they provide to us. We
        may also disclose information where required by law, to protect legal
        rights or in connection with a business reorganisation.
      </p>
    ),
  },
  {
    title: "Data retention and security",
    content: (
      <p>
        We keep personal information only for as long as reasonably needed for
        the purpose for which it was collected, including follow-up on your
        enquiry and applicable legal or record-keeping requirements. We use
        reasonable administrative and technical safeguards, but no method of
        online transmission or storage can be guaranteed completely secure.
      </p>
    ),
  },
  {
    title: "Your rights and choices",
    content: (
      <>
        <p>
          Depending on the law that applies to you, you may have the right to
          ask for access to your personal information, request a correction or
          deletion, restrict or object to certain uses, or withdraw consent.
        </p>
        <p>
          To make a request, email us using the address below. We may need to
          verify your identity before completing it. You can also unsubscribe
          from promotional messages at any time by using the option provided in
          the message or by contacting us.
        </p>
      </>
    ),
  },
  {
    title: "Updates to this policy",
    content: (
      <p>
        We may update this policy as our website or practices change. The latest
        version will always appear on this page with its updated date.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Peppy Woods home">
          <span className={styles.mark}>PW</span>
          <span>
            <strong>Peppy Woods</strong>
            <small>Coorg · Managed estates</small>
          </span>
        </Link>
        <Link className={styles.backLink} href="/">
          Back to the estate
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Your information</p>
          <h1>Privacy policy</h1>
          <p className={styles.intro}>
            This policy explains how Peppy Woods collects, uses and protects
            information when you visit our website or enquire about our managed
            farmland estate near Coorg.
          </p>
          <p className={styles.updated}>Last updated: 21 August 2026</p>
        </div>
      </section>

      <div className={styles.contentWrap}>
        <aside className={styles.summary}>
          <span>In brief</span>
          <p>
            We use the details you share to respond to your enquiry and improve
            our services. We do not sell your personal information.
          </p>
        </aside>

        <article className={styles.policy}>
          {sections.map((section, index) => (
            <section className={styles.section} key={section.title}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2>{section.title}</h2>
                {section.content}
              </div>
            </section>
          ))}

          <section className={`${styles.section} ${styles.contact}`}>
            <span className={styles.number}>08</span>
            <div>
              <h2>Contact us</h2>
              <p>
                If you have a privacy question or would like to exercise your
                rights, contact Peppy Woods at:
              </p>
              <a href="mailto:hello@peppywoods.in">hello@peppywoods.in</a>
              <p>Peppy Woods · Managed by Soil Systems · Karnataka, India</p>
            </div>
          </section>
        </article>
      </div>

      <footer className={styles.footer}>
        <p>© 2026 Peppy Woods · Managed by Soil Systems</p>
        <Link href="/">Return to Peppy Woods</Link>
      </footer>
    </main>
  );
}
