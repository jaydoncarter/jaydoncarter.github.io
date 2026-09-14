import { Link } from "react-router-dom";
import "./PageLinks.css";

const pages = [
  {
    number: "00",
    title: "Resume",
    description: "View my resume with education, experience, and downloadable PDF, DOCX, and HTML versions.",
    path: "/resume",
    image: "/images/resume-pic.png",
  },
  {
    number: "01",
    title: "Projects",
    description: "Browse my portfolio: code examples, GitHub links and projects in progress.",
    path: "/projects",
    image: "/images/code-pic.png",
  },
  {
    number: "02",
    title: "Contact",
    description: "Prefer email or LinkedIn? I'd love to hear from you, here you can find how to do so.",
    path: "/contact",
    image: "/images/email-pic.png",
  },
];

function PageLinks() {
  return (
    <section className="page-links container">
      <div className="page-links__grid">
        {pages.map((page) => (
          <Link key={page.path} to={page.path} className="page-link">
            <div className="page-link__image">
              <img src={page.image} alt={page.title} />
            </div>

            <div className="page-link__content">
              <span className="page-link__number">
                {page.number}
              </span>

              <h3>{page.title}</h3>

              <p>{page.description}</p>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PageLinks;