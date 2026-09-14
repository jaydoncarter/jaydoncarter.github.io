import VantaBackground from "../home/VantaBackground";
import "./ContactHeader.css";

function ContactHeader() {
  return (
    <header className="contact-header">
      <VantaBackground />

      <div className="container contact-header__content">
        <h1 className="contact-header__title">Contact</h1>

        <div className="contact-header__meta">
          <span>
            Opportunities | Collaborations | Ideas
          </span>
        </div>
      </div>
    </header>
  );
}

export default ContactHeader;