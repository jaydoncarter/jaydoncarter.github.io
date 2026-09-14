import { resume } from "../../data/resume";
import "./ResumeMain.css";

function ResumeMain() {
  return (
    <section className="resume-main">
      <section className="resume-section">
        <div className="resume-section__heading">
          <span>00</span>
          <h2>Education</h2>
        </div>

        <div className="resume-entries">
          {resume.education.map((school) => (
            <article className="resume-entry" key={school.institution}>
              <div className="resume-entry__header">
                <div>
                  <h3>
                    <a
                      href={school.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {school.institution}
                    </a>
                  </h3>
                  <p className="resume-entry__subtitle">
                    {school.degree}
                  </p>
                </div>

                {school.graduation && (
                  <span className="resume-entry__date">
                    {school.graduation}
                  </span>
                )}
              </div>

              <div className="resume-details">
                <div>
                  <span>GPA</span>
                  <p>{school.gpa}</p>
                </div>

                {school.coursework?.length > 0 && (
                    <div>
                        <span>COURSEWORK</span>
                        <p>{school.coursework.join(", ")}</p>
                    </div>
                )}

                {school.accolades?.length > 0 && (
                    <div>
                        <span>ACCOLADES & INITIATIVES</span>
                        <p>{school.accolades.join(", ")}</p>
                    </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section__heading">
          <span>01</span>
          <h2>Work Experience</h2>
        </div>

        <div className="resume-entries">
          {resume.experience.map((job) => (
            <article className="resume-entry" key={job.title}>
              <div className="resume-entry__header">
                <div>
                  <h3>{job.title}</h3>

                  <p className="resume-entry__subtitle">
                    /{" "}
                    <a
                      href={job.organizationUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {job.organization}
                    </a>
                  </p>
                </div>

                <span className="resume-entry__date">
                  {job.dates}
                </span>
              </div>

              <ul className="resume-entry__bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-section__heading">
          <span>02</span>
          <h2>Technical Skills</h2>
        </div>

        <div className="resume-skills">
          {resume.skills.map((skillGroup) => (
            <div className="resume-skill-row" key={skillGroup.level}>
              <span>{skillGroup.level}</span>

              <div>
                {skillGroup.items.map((skill) => (
                  <code key={skill}>{skill}</code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

export default ResumeMain;