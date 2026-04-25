import { Link } from 'react-router-dom';
import profilePhoto from '../assets/profile.jpg';
import { contentPillars, projects, siteMeta, stats } from '../data/siteData';

function HomePage() {
  return (
    <>
      <section className="hero-grid page-hero">
        <div className="hero-copy editorial-panel">
          <p className="section-eyebrow">Luxury editorial portfolio</p>
          <h1 className="display-title">Educator, AI builder, and founder with a premium digital presence.</h1>
          <p className="lead-copy">
            Built around the visual rhythm of high-end photography portfolios, this site presents Aditya as more than a student or developer. It positions him as a disciplined educator, product-minded builder, and future entrepreneur.
          </p>
          <div className="cta-cluster">
            <Link className="button dark" to="/projects">View selected work</Link>
            <Link className="button light" to="/contact">Work with me</Link>
          </div>
          <div className="stat-row">
            {stats.map((item) => (
              <article className="stat-chip" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual editorial-panel dark-panel">
          <img className="hero-photo" src={profilePhoto} alt="Aditya Bhagwat speaking at a podium" />
          <div className="image-caption-block">
            <span>Featured portrait</span>
            <p>Public speaking, teaching, and founder energy presented with a more refined visual language.</p>
          </div>
        </div>
      </section>

      <section className="split-feature">
        <div>
          <p className="section-eyebrow">Positioning</p>
          <h2 className="section-title">Not just a portfolio. A narrative of credibility, ambition, and execution.</h2>
        </div>
        <div className="feature-copy">
          <p>
            The structure is intentionally multi-page so each part of the story gets room to breathe: home for first impression, about for trust, projects for proof, teaching for authority, and contact for conversion.
          </p>
          <p>
            Instead of chasing a flashy dev-template look, the site borrows from luxury photography websites with stronger type hierarchy, quieter spacing, and image-led composition.
          </p>
        </div>
      </section>

      <section className="feature-cards-grid">
        <article className="feature-card tall-card dark-panel">
          <p className="section-eyebrow soft">About</p>
          <h3>Story with authority</h3>
          <p>From early teaching to JEE Advanced and DTU, the About page frames the journey as discipline plus momentum.</p>
          <Link className="inline-action" to="/about">Read the story</Link>
        </article>
        <article className="feature-card image-card warm-panel">
          <p className="section-eyebrow">Projects</p>
          <h3>Case-study style work</h3>
          <p>Projects are presented with problem, solution, stack, and result so they read like serious work, not placeholder cards.</p>
          <Link className="inline-action" to="/projects">Browse projects</Link>
        </article>
        <article className="feature-card image-card olive-panel">
          <p className="section-eyebrow">Teaching</p>
          <h3>A premium academic offering</h3>
          <p>Classes, conceptual clarity, and mentoring are positioned like a refined service, not a casual tuition ad.</p>
          <Link className="inline-action" to="/teaching">See teaching page</Link>
        </article>
      </section>

      <section className="editorial-band dark-panel">
        <div>
          <p className="section-eyebrow soft">Content brand</p>
          <h2 className="section-title light">Building in public through ideas, systems, and student growth.</h2>
        </div>
        <div className="pill-row">
          {contentPillars.map((item) => (
            <span key={item} className="dark-pill">{item}</span>
          ))}
        </div>
        <div className="band-copy">
          <p>Step Up is where the educational voice, AI curiosity, and personal brand start to merge into something larger.</p>
          <p>Use this page as the digital foundation for future YouTube embeds, shorts, and public-facing case studies.</p>
        </div>
      </section>

      <section className="closing-callout">
        <div>
          <p className="section-eyebrow">Quick contact</p>
          <h2 className="section-title">Available for collaborations, internships, coaching, and serious conversations.</h2>
        </div>
        <div className="contact-stack">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <a href="tel:+919654689325">{siteMeta.phone}</a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
        </div>
      </section>
    </>
  );
}

export default HomePage;
