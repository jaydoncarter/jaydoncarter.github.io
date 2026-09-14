import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  const completedProjects = projects.filter(
    (project) => project.status === "completed"
  );

  const inProgressProjects = projects.filter(
    (project) => project.status === "in-progress"
  );

  return (
    <>
      <ProjectsHeader />

      <main className="projects-page">
        <section className="projects-section container">
          <div className="section-heading">

            <div>
              <span className="section-heading__label">
                Completed Work
              </span>

              <h2>Completed Projects</h2>
            </div>
          </div>

          <div className="projects-section__list">
            {completedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>

        <div className="projects-divider" />

        <section className="projects-section container">
          <div className="section-heading">


            <div>
              <span className="section-heading__label">
                Current Work
              </span>

              <h2>In Progress</h2>
            </div>
          </div>

          <div className="projects-section__list">
            {inProgressProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;