import ContactHeader from "../components/contact/ContactHeader";
import ContactMethods from "../components/contact/ContactMethods";
import "./Contact.css";

function Contact() {
  return (
    <>
      <ContactHeader />

      <section className="contact-page">
        <div className="container contact-page__content">
          <div className="contact-page__intro">
            <span className="contact-page__eyebrow">
              Get in Touch
            </span>

            <h2>Have a project, opportunity, or idea?</h2>

            <p>
              I'd love to connect, whether you're reaching out about
              opportunities, collaborations, or just want to talk about
              software, computer science, or the outdoors. LinkedIn is
              usually the best way to reach me.
            </p>
          </div>

          <ContactMethods />
        </div>
      </section>
    </>
  );
}

export default Contact;