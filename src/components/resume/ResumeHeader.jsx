
import VantaBackground from "../home/VantaBackground";
import "./ResumeHeader.css";

function ResumeHeader() {
  return (
    <header className="resume-header">
      <VantaBackground />

      <div className="container resume-header__content">

        <h1 className="resume-header__title">
          Resume
        </h1>

        <div className="resume-header__meta">
          <span>
            Computer Science | Applied Mathmatics | Software Engineering
          </span>
        </div>
      </div>
    </header>
  );
}

export default ResumeHeader;
