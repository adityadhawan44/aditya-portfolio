import aboutLibrary from '../assets/web/set2/about-library.jpg';
import aboutStage from '../assets/web/set2/about-stage.jpg';
import aboutStudyDesk from '../assets/web/set2/about-study-desk.jpg';
import { lessons, storyTimeline, values, whyBuild } from '../data/siteData';

function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <div className="editorial-panel text-panel rose-panel">
          <p className="section-eyebrow">About</p>
          <h1 className="display-title">I did not start with startup language. I started by noticing student struggles up close.</h1>
          <p className="lead-copy">
            Teaching came before identity. JEE built discipline. DTU added engineering depth. Over time, those pieces started pointing in one direction: build AI-driven systems that make learning, guidance, and progress feel less confusing.
          </p>
        </div>
        <div className="about-collage editorial-panel warm-panel">
          <img className="portrait-secondary" src={aboutLibrary} alt="General library and desk scene" />
          <img className="collage-card collage-card-top" src={aboutStage} alt="General man speaking on stage" />
          <img className="collage-card collage-card-bottom" src={aboutStudyDesk} alt="General study desk with books and laptop" />
        </div>
      </section>

      <section className="timeline-layout editorial-panel">
        <div>
          <p className="section-eyebrow">Journey</p>
          <h2 className="section-title">The story makes more sense in sequence.</h2>
        </div>
        <div className="timeline-list">
          {storyTimeline.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
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
          <p className="section-eyebrow">Lessons that stayed with me</p>
          <div className="stack-list">
            {lessons.map((lesson) => (
              <p key={lesson}>{lesson}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="editorial-panel why-build-panel">
        <div>
          <p className="section-eyebrow">Why I build</p>
          <h2 className="section-title">The ambition is to make useful systems, not just finish projects.</h2>
        </div>
        <div className="story-stack">
          {whyBuild.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutPage;
