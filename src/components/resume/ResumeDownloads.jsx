import { resumeDownloads } from "../../data/resume";
import "./ResumeDownloads.css";

function ResumeDownloads() {
  return (
    <section className="resume-downloads">
      <div className="container">
        <div className="resume-downloads__header">
          <span>Curriculum Vitae</span>
          <h2>Downloads</h2>
          <p>
            Available in several formats for easy viewing,
            editing, or printing.
          </p>
        </div>

        <div className="resume-downloads__buttons">
          {resumeDownloads.map((download) => (
            <a
              key={download.label}
              href={download.path}
              download={download.filename}
              className="resume-download-button"
            >
              <span className="resume-download-button__type">
                {download.label}
              </span>

              <span className="resume-download-button__arrow">
                ↓
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResumeDownloads;