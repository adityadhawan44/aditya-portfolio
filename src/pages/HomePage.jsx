import { useEffect, useState } from 'react';
import workspaceHero from '../assets/web/workspace-hero.jpg';
import workspaceDetail from '../assets/web/workspace-detail.jpg';
import speakerImage from '../assets/web/speaker.jpg';
import studyClass from '../assets/web/study-class.jpg';
import heroPodium from '../assets/web/set2/hero-podium.jpg';
import brandSpeaker from '../assets/web/set2/brand-speaker.jpg';
import brandTeam from '../assets/web/set2/brand-team.jpg';
import brandWorkspace from '../assets/web/set2/brand-workspace.jpg';
import AnimatedMetric from '../components/AnimatedMetric';
import MagneticLink from '../components/MagneticLink';
import { buildSignals, contentPillars, currentFocus, identitySignals, siteMeta, spotlightCards, stats, whyBuild } from '../data/siteData';

function HomePage() {
  const identities = ['AI Builder', 'Education Innovator', 'Automation Developer', 'Student Entrepreneur'];
  const [identityIndex, setIdentityIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIdentityIndex((current) => (current + 1) % identities.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, [identities.length]);

  return (
    <>
      <section className="hero-grid page-hero">
        <div className="hero-copy editorial-panel aurora-panel reveal-card">
          <p className="section-eyebrow">AI + education + automation</p>
          <h1 className="display-title">Building AI-powered systems for learning, growth, and digital leverage.</h1>
          <div className="identity-rotator" aria-live="polite">
            <span className="identity-label">Current identity</span>
            <strong className="identity-value" key={identities[identityIndex]}>{identities[identityIndex]}</strong>
          </div>
          <p className="lead-copy">
            I started building after seeing how many students around me had effort, but not enough clarity, direction, or access to smarter tools. Now I am focused on products that make progress easier through AI, systems thinking, and better digital experiences.
          </p>
          <div className="cta-cluster">
            <MagneticLink className="button dark" to="/projects">View selected work</MagneticLink>
            <MagneticLink className="button light" to="/about">Why I build</MagneticLink>
          </div>
          <div className="stat-row">
            {stats.map((item) => <AnimatedMetric key={item.label} value={item.value} label={item.label} />)}
          </div>
        </div>

        <div className="hero-visual editorial-panel dark-panel reveal-card perspective-panel">
          <img className="hero-photo" src={heroPodium} alt="General podium and microphone stage scene" />
          <div className="image-caption-block">
            <span>Current positioning</span>
            <p>Student entrepreneur. Educator. AI builder. Someone preparing for a future shaped by systems, tools, and digital trust.</p>
          </div>
          <div className="status-widget-row">
            <article className="status-widget">
              <span>Current focus</span>
              <strong>AI education systems</strong>
            </article>
            <article className="status-widget live">
              <span>Status</span>
              <strong>Building</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="signal-marquee editorial-panel dark-panel reveal-card">
        <div className="marquee-track">
          {[...buildSignals, ...buildSignals].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <section className="split-feature reveal-card">
        <div>
          <p className="section-eyebrow">Identity</p>
          <h2 className="section-title">Not another student portfolio. A builder profile with a clearer direction.</h2>
        </div>
        <div className="feature-copy">
          <p>
            The goal of this site is to make one thing obvious within a few seconds: I am building toward AI, education, automation, and long-term product thinking.
          </p>
          <p>
            That matters more than sounding corporate. I would rather communicate real direction, real proof of work, and real ambition than hide behind generic portfolio language.
          </p>
        </div>
      </section>

      <section className="spotlight-grid">
        {identitySignals.map((card) => (
          <article className="editorial-panel spotlight-card reveal-card" key={card.title}>
            <p className="section-eyebrow">Core signal</p>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </article>
        ))}
      </section>

      <section className="feature-cards-grid">
        <article className="feature-card tall-card dark-panel reveal-card">
          <p className="section-eyebrow soft">Why I build</p>
          <h3>Confusion wastes talent.</h3>
          <p>I care about products that reduce friction for students and make progress feel more navigable, not more overwhelming.</p>
          <MagneticLink className="inline-action" to="/about">Read the full story</MagneticLink>
        </article>
        <article className="feature-card image-card warm-panel reveal-card">
          <p className="section-eyebrow">Projects</p>
          <h3>Built around real motives</h3>
          <p>Each project now explains the problem, why I chose it, what I built, and where I think it can go next.</p>
          <MagneticLink className="inline-action" to="/projects">See the case studies</MagneticLink>
        </article>
        <article className="feature-card image-card plum-panel reveal-card">
          <p className="section-eyebrow soft">What I am building</p>
          <h3>Systems over noise</h3>
          <p>I am more interested in leverage, automation, and useful AI experiences than in making static brochure projects.</p>
          <MagneticLink className="inline-action" to="/contact">Start a conversation</MagneticLink>
        </article>
      </section>

      <section className="editorial-panel mission-grid reveal-card">
        <div>
          <p className="section-eyebrow">Current focus</p>
          <h2 className="section-title">The direction is becoming clearer.</h2>
        </div>
        <div className="signal-list">
          {currentFocus.map((item) => (
            <article className="signal-card" key={item}>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="terminal-panel editorial-panel dark-panel reveal-card">
        <div>
          <p className="section-eyebrow soft">Live system notes</p>
          <h2 className="section-title light">A builder profile should feel active, not archived.</h2>
        </div>
        <div className="terminal-shell" aria-label="Current builder directions">
          <p>&gt; Building AI systems for students who need clearer next steps</p>
          <p>&gt; Exploring education technology with product-first thinking</p>
          <p>&gt; Automating workflows that remove friction from learning and content</p>
          <p>&gt; Scaling a brand around systems, clarity, and long-term leverage</p>
        </div>
      </section>

      <section className="editorial-panel why-build-panel reveal-card">
        <div>
          <p className="section-eyebrow">Why I build</p>
          <h2 className="section-title">The motivation is personal, not generic.</h2>
        </div>
        <div className="story-stack">
          {whyBuild.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="immersive-gallery">
        <article className="gallery-copy editorial-panel sunset-panel reveal-card">
          <p className="section-eyebrow">Brand direction</p>
          <h2 className="section-title">The website should feel more like a future founder profile than a template portfolio.</h2>
          <p>
            That means stronger hierarchy, cleaner messaging, better emotional flow, and enough visual depth to make the work feel intentional instead of interchangeable.
          </p>
        </article>

        <div className="gallery-image-stack reveal-card">
          <img className="gallery-large" src={workspaceHero} alt="Modern organized workspace with a laptop" />
          <div className="gallery-split">
            <img src={speakerImage} alt="General public speaking image" />
            <img src={workspaceDetail} alt="Modern workspace with a laptop and desk setup" />
          </div>
        </div>
      </section>

      <section className="editorial-band dark-panel reveal-card">
        <div className="brand-content">
          <p className="section-eyebrow soft">Public brand</p>
          <h2 className="section-title light brand-title">Building in public around AI, student growth, systems, and long-term leverage.</h2>
        </div>
        <div className="pill-row">
          {contentPillars.map((item) => (
            <span key={item} className="dark-pill">{item}</span>
          ))}
        </div>
        <div className="brand-layout">
          <div className="brand-copy">
            <p>I want the internet version of my work to feel connected: what I teach, what I build, what I publish, and what I am moving toward.</p>
            <p>The goal is not to look polished for its own sake. The goal is to build a brand that feels useful, directional, and believable.</p>
          </div>
          <div className="brand-visual-grid">
            <img className="brand-visual-large" src={studyClass} alt="General student study setup" />
            <img src={brandSpeaker} alt="General speaker on stage" />
            <img src={brandWorkspace} alt="Modern workspace with laptop and desk accessories" />
            <img src={brandTeam} alt="General office team collaborating" />
          </div>
        </div>
      </section>

      <section className="spotlight-grid">
        {spotlightCards.map((card) => (
          <article className="editorial-panel spotlight-card reveal-card" key={card.title}>
            <p className="section-eyebrow">Proof of direction</p>
            <h3>{card.title}</h3>
            <p>{card.copy}</p>
          </article>
        ))}
      </section>

      <section className="closing-callout editorial-panel teal-panel reveal-card">
        <div>
          <p className="section-eyebrow soft">Contact</p>
          <h2 className="section-title light">Open to internships, product collaborations, education projects, and serious builder conversations.</h2>
        </div>
        <div className="contact-stack light-links">
          <a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a>
          <a href="tel:+919654689325">{siteMeta.phone}</a>
          <a href={siteMeta.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
        </div>
      </section>
    </>
  );
}

export default HomePage;
