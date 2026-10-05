import { Link } from "react-router-dom";
import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import { NAV_LINKS } from "../../data/navLinks";
import logo from "../../assets/images/espi-logo-bg.png";
import "./Footer.css";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/espi.salud", Icon: FaInstagram },
  { label: "Spotify", href: "#", Icon: FaSpotify },
  { label: "YouTube", href: "https://www.youtube.com/@espi.salud-canal", Icon: FaYoutube },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand-block">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="ESPI — Espacio de Salud Psicoterapéutico Integral" />
            </Link>
            <p className="footer__tagline">
              Espacio de salud psicoterapéutico integral
            </p>
          </div>

          <nav className="footer__nav" aria-label="Páginas del sitio">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="footer__nav-link">
                {label}
              </Link>
            ))}
          </nav>

          <div className="footer__social">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer__social-link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© {year} ESPI. Todos los derechos reservados.</p>
          <a
            href="https://saviadigital.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__credit"
          >
            Sitio desarrollado por Savia Digital
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;