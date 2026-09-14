import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { contactMethods } from "../../data/contact";
import "./ContactMethods.css";

function ContactMethods() {
  return (
    <div className="contact-methods">
      {contactMethods.map((method) => (
        <a
          key={method.id}
          href={method.href}
          className="contact-method"
          aria-label={method.label}
          {...(method.external
            ? {
                target: "_blank",
                rel: "noreferrer",
              }
            : {})}
        >
          <span className="contact-method__icon" aria-hidden="true">
            <FontAwesomeIcon icon={method.icon} />
          </span>

          <span className="contact-method__value">
            {method.value}
          </span>
        </a>
      ))}
    </div>
  );
}

export default ContactMethods;