import speakerImage from '../assets/web/speaker.jpg';
import { siteMeta } from '../data/siteData';

function ContactPage() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="editorial-panel">
          <p className="section-eyebrow">Contact</p>
          <h1 className="display-title">A dedicated closing page designed to convert attention into action.</h1>
          <p className="lead-copy">
            Use this page for internships, collaborations, speaking, classes, and founder conversations. The structure is minimal on purpose so the contact decision feels easy.
          </p>
        </div>
        <div className="editorial-panel dark-panel contact-card-large">
          <img className="contact-hero-image" src={speakerImage} alt="Speaker holding a microphone" />
          <span>Email</span>
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <span>Phone</span>
          <a href="tel:+919654689325">{siteMeta.phone}</a>
          <span>LinkedIn</span>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">aditya-bhagwat-9654ad</a>
        </div>
      </section>

      <section className="contact-grid-editorial">
        <article className="editorial-panel warm-panel">
          <p className="section-eyebrow">Hire me</p>
          <h3>Internships and product work</h3>
          <p>Open to frontend, AI, automation, and digital product opportunities where execution and communication matter.</p>
        </article>
        <article className="editorial-panel olive-panel">
          <p className="section-eyebrow">Collaborate</p>
          <h3>Education, content, and systems</h3>
          <p>Well-suited for projects that need teaching clarity, founder energy, and a more strategic digital presence.</p>
        </article>
        <article className="editorial-panel">
          <p className="section-eyebrow">Join my classes</p>
          <h3>Learning with structure</h3>
          <p>For students and parents looking for long-term conceptual growth, not rushed short-term coaching noise.</p>
        </article>
      </section>
    </>
  );
}

export default ContactPage;