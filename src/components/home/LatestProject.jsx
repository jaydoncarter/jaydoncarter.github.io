import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import "./LatestProject.css";

function LatestProject() {
  const project = projects.find(
    (project) => project.featured
  );

  if (!project) {
    return null;
  }

  return (
    <section className="latest-project container">
      <div className="section-heading">

        <div>
          <span className="section-heading__label">
            Featured Work
          </span>

          <h2>Latest project</h2>
        </div>
      </div>

      <div className="latest-project__card">
        <ProjectCard project={project} />
      </div>
    </section>
  );
}

export default LatestProject;