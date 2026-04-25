import workspaceHero from '../assets/web/workspace-hero.jpg';
import speakerImage from '../assets/web/speaker.jpg';
import studyClass from '../assets/web/study-class.jpg';
import { lessons, values } from '../data/siteData';

function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="editorial-panel text-panel rose-panel">
          <p className="section-eyebrow">About</p>
          <h1 className="display-title">A builder shaped by teaching, discipline, and long-term thinking.</h1>
          <p className="lead-copy">
            I started teaching early and learned to value clarity before complexity. JEE Advanced strengthened discipline. DTU added technical depth. Now I am building at the intersection of education, AI, systems, and personal brand.
          </p>
        </div>
        <div className="about-collage editorial-panel warm-panel">
          <img className="portrait-secondary" src={studyClass} alt="General study and learning scene" />
          <img className="collage-card collage-card-top" src={speakerImage} alt="General speaker holding microphone" />
          <img className="collage-card collage-card-bottom" src={workspaceHero} alt="Modern organized workspace with a laptop" />
        </div>
      </section>

      <section className="timeline-layout editorial-panel">
        <div>
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">Progress built in distinct chapters.</h2>
        </div>
        <div className="timeline-list">
          <article>
            <span>01</span>
            <div>
              <h3>Teaching foundation</h3>
              <p>Started by helping students understand difficult concepts with more confidence and simplicity.</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Academic credibility</h3>
              <p>JEE Advanced qualification and DTU sharpened the profile with proof, rigor, and momentum.</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Operator mindset</h3>
              <p>Turned teaching into systems thinking through structure, outcomes, and trust-building.</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>Builder era</h3>
              <p>Expanded into AI projects, automation flows, and a more public-facing brand presence.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="dual-column-section">
        <article className="editorial-panel dark-panel">
          <p className="section-eyebrow soft">Values</p>
          <div className="stack-list light-list">
            {values.map((value) => (
              <p key={value}>{value}</p>
            ))}
          </div>
        </article>
        <article className="editorial-panel aurora-panel">
          <p className="section-eyebrow">Lessons learned</p>
          <div className="stack-list">
            {lessons.map((lesson) => (
              <p key={lesson}>{lesson}</p>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutPage;