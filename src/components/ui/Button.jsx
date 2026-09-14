import { Link } from "react-router-dom";
import "./Button.css";

function Button({
  children,
  to,
  href,
  variant = "default",
  download = false,
  ...props
}) {
  const className = `button button--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download || undefined}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noreferrer"}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;