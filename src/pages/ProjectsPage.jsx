import projectScreens from '../assets/web/set2/project-desk-screens.jpg';
import projectEquipment from '../assets/web/set2/project-equipment.jpg';
import projectNotebook from '../assets/web/set2/project-notebook.jpg';
import projectCoffeeDesk from '../assets/web/set2/project-coffee-desk.jpg';
import MagneticLink from '../components/MagneticLink';
import { projects } from '../data/siteData';

const projectVisuals = [projectScreens, projectEquipment, projectNotebook, projectCoffeeDesk];

function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero editorial-panel">
        <div>
          <p className="section-eyebrow">Selected projects</p>
          <h1 className="display-title">Projects should explain what I noticed, why I cared, and what I built next.</h1>
        </div>
        <p className="lead-copy narrow-copy">
          I do not want this section to feel like title plus stack plus screenshot. Each case study is framed around motivation, product thinking, features, impact, and future direction.
        </p>
      </section>

      <section className="project-showcase-list">
        {projects.map((project, index) => (
          <article className={`project-showcase ${index % 2 === 0 ? '' : 'reverse'}`} key={project.slug}>
            <div className={`project-image-frame ${index % 3 === 0 ? 'dark-panel' : index % 3 === 1 ? 'warm-panel' : 'olive-panel'}`}>
              <img className="project-image" src={projectVisuals[index % projectVisuals.length]} alt={project.title} />
              <span>{project.title}</span>
              <div className="project-image-meter" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-story editorial-panel">
              <p className="section-eyebrow">{project.subtitle}</p>
              <h2>{project.title}</h2>
              <p><strong>Problem</strong> {project.problem}</p>
              <p><strong>Why I built it</strong> {project.why}</p>
              <p><strong>Solution</strong> {project.solution}</p>
              <div className="project-detail-grid">
                <article className="project-detail-card">
                  <span>Features</span>
                  <ul className="project-bullet-list">
                    {project.features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
                <article className="project-detail-card">
                  <span>Impact</span>
                  <p>{project.impact}</p>
                  <span>Future vision</span>
                  <p>{project.vision}</p>
                </article>
              </div>
              <div className="project-actions">
                {project.codeUrl ? (
                  <MagneticLink className="button dark" href={project.codeUrl} target="_blank" rel="noreferrer">
                    View GitHub
                  </MagneticLink>
                ) : null}
                {project.liveUrl ? (
                  <MagneticLink className="button light" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Preview
                  </MagneticLink>
                ) : null}
              </div>
              <div className="stack-tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default ProjectsPage;
