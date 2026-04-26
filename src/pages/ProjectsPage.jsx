import projectScreens from '../assets/web/set2/project-desk-screens.jpg';
import projectEquipment from '../assets/web/set2/project-equipment.jpg';
import projectNotebook from '../assets/web/set2/project-notebook.jpg';
import projectCoffeeDesk from '../assets/web/set2/project-coffee-desk.jpg';
import { projects } from '../data/siteData';

const projectVisuals = [projectScreens, projectEquipment, projectNotebook, projectCoffeeDesk];

function ProjectsPage() {
  return (
    <>
      <section className="page-hero projects-hero editorial-panel">
        <div>
          <p className="section-eyebrow">Selected projects</p>
          <h1 className="display-title">Work presented as premium case studies, not generic tiles.</h1>
        </div>
        <p className="lead-copy narrow-copy">
          The layout direction is inspired by luxury portfolio websites, but the storytelling is product-led. Each project highlights the problem, the response, the tools, and the outcome.
        </p>
      </section>

      <section className="project-showcase-list">
        {projects.map((project, index) => (
          <article className={`project-showcase ${index % 2 === 0 ? '' : 'reverse'}`} key={project.slug}>
            <div className={`project-image-frame ${index % 3 === 0 ? 'dark-panel' : index % 3 === 1 ? 'warm-panel' : 'olive-panel'}`}>
              <img className="project-image" src={projectVisuals[index % projectVisuals.length]} alt={project.title} />
              <span>{project.title}</span>
            </div>
            <div className="project-story editorial-panel">
              <p className="section-eyebrow">{project.subtitle}</p>
              <h2>{project.title}</h2>
              <p><strong>Problem</strong> {project.problem}</p>
              <p><strong>Solution</strong> {project.solution}</p>
              <p><strong>Result</strong> {project.result}</p>
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