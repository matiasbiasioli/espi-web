import { Link } from "react-router-dom";
import "./Button.css";

function Button({ to, href, variant = "primary", children, ...props }) {
  const className = `btn btn--${variant}`;

  if (to) {
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} {...props}>
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