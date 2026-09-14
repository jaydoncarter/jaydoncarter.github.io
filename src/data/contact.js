import {
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";

export const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: "jaydoncarter.dev@gmail.com",
    href: "mailto:jaydoncarter.dev@gmail.com?subject=Let's%20Connect",
    description: "Best way to reach me",
    icon: faEnvelope,
  },
  {
    id: "phone",
    label: "Phone",
    value: "801-413-3115",
    href: "tel:8014133115",
    description: "Calls and texts",
    icon: faPhone,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "jaydonmcarter",
    href: "https://www.linkedin.com/in/jaydonmcarter/",
    description: "Professional networking",
    icon: faLinkedin,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "jaydoncarter",
    href: "https://github.com/jaydoncarter",
    description: "Code and projects",
    icon: faGithub,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@jaydon.carter",
    href: "https://www.instagram.com/jaydon.carter/",
    description: "Life outside of code",
    icon: faInstagram,
    external: true,
  },
  {
    id: "strava",
    label: "Strava",
    value: "Jaydon Carter",
    href: "https://www.strava.com/athletes/103472696",
    description: "Running and the outdoors",
    icon: faStrava,
    external: true,
  },
];