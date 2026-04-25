import studyClass from '../assets/web/study-class.jpg';
import workspaceDetail from '../assets/web/workspace-detail.jpg';
import { teachingPillars } from '../data/siteData';

function TeachingPage() {
  return (
    <>
      <section className="page-hero teaching-hero">
        <div className="editorial-panel dark-panel media-panel reveal-card">
          <img className="section-feature-image" src={studyClass} alt="Student studying at a desk with a chalkboard" />
          <p className="section-eyebrow soft">Teaching</p>
          <h1 className="display-title light">Teaching positioned like a premium service.</h1>
          <p className="lead-copy light-copy">
            This page reframes your classes as a refined educational offering built on clarity, trust, and measurable progress rather than a casual tuition listing.
          </p>
        </div>
        <div className="editorial-panel warm-panel service-panel reveal-card">
          <img className="service-image" src={workspaceDetail} alt="Modern workspace with a laptop and desk setup" />
          <p className="section-eyebrow">Who it is for</p>
          <h2 className="section-title">Students who want depth, structure, and serious mentoring.</h2>
          <p>Ideal for classes 5-12, especially where conceptual understanding matters more than surface memorization.</p>
        </div>
      </section>

      <section className="triple-panel-grid">
        {teachingPillars.map((pillar) => (
          <article className="editorial-panel reveal-card" key={pillar.title}>
            <p className="section-eyebrow">Core pillar</p>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </section>

      <section className="testimonial-band editorial-panel olive-panel reveal-card">
        <div>
          <p className="section-eyebrow">Social proof direction</p>
          <h2 className="section-title">Testimonials can be styled like editorial pull quotes.</h2>
        </div>
        <blockquote>
          "Aditya explains difficult topics with unusual simplicity and seriousness. The teaching style feels focused, not rushed."
        </blockquote>
        <p className="quote-note">Use this area later for parent and student results, score improvements, and trust signals.</p>
      </section>
    </>
  );
}

export default TeachingPage;