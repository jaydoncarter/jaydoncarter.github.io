import Button from "./Button";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt="" />
        ) : (
          <div className="project-card__placeholder">
            PROJECT // {project.id.toUpperCase()}
          </div>
        )}
      </div>

      <div className="project-card__content">
        <span className="project-card__id">
          PROJECT_{project.id.toUpperCase()}
        </span>

        <h3 className="project-card__title">
          {project.title}
        </h3>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.github && (
            <Button href={project.github} variant="primary">
              GitHub
            </Button>
          )}

          {project.demo && (
            <Button href={project.demo}>
              {project.demoLabel || "Live Demo"}
            </Button>
          )}

          {project.download && (
            <Button
              href={project.download}
              download
            >
              {project.downloadLabel || "Download"}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;