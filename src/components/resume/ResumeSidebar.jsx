import { Link } from "react-router-dom";
import { resume } from "../../data/resume";
import Button from "../ui/Button";
import "./ResumeSidebar.css";

function ResumeSidebar() {
  return (
    <aside className="resume-sidebar">
      <div className="resume-sidebar__identity">
        <div className="resume-sidebar__avatar">
          <img src="images/profile-surfer.jpg" alt="Photo of Jaydon Carter" className="resume-photo" />
        </div>

        <h2>{resume.name}</h2>
      </div>

      <div className="resume-sidebar__section">
        <span className="resume-sidebar__label">
          Personal Statement
        </span>

        <p>{resume.statement}</p>
      </div>

      <div className="resume-sidebar__section">
        <div className="resume-sidebar__section-heading"> <span className="resume-sidebar__label">Projects</span></div>

        <ul className="resume-sidebar__projects">
          {resume.projects.map((project) => (
            <li key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{project.name}</strong>
                <span>{project.description}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="resume-sidebar__projects-button"> <Button to="/projects" size="small"> View all </Button> </div>
      </div>

      <div className="resume-sidebar__section">
        <span className="resume-sidebar__label">Hobbies</span>

        <div className="resume-sidebar__tags">
          {resume.hobbies.map((hobby) => (
            <span key={hobby}>{hobby}</span>
          ))}
        </div>
      </div>

      <Button to="/contact" variant="primary">
        Contact me
      </Button>
    </aside>
  );
}

export default ResumeSidebar;