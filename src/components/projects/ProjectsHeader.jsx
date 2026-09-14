import VantaBackground from "../home/VantaBackground";
import "./ProjectsHeader.css";

function ProjectsHeader() {
  return (
    <header className="projects-header">
      <VantaBackground />

      <div className="container projects-header__content">
        <h1 className="projects-header__title">
          Projects
        </h1>

        <div className="projects-header__meta">
          <span>
            Software Development | Mathematical Modeling | Problem Solving
          </span>
        </div>
      </div>
    </header>
  );
}

export default ProjectsHeader;