import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/institucional", label: "Institucional" },
  { to: "/servicios", label: "Servicios" },
  { to: "/equipo", label: "Equipo" },
  { to: "/recursos", label: "Recursos" },
  { to: "/contacto", label: "Contacto" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Bloquea el scroll del body mientras el overlay está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <button
        className={
          isOpen ? "navbar__toggle navbar__toggle--open" : "navbar__toggle"
        }
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={
          isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
        }
        aria-expanded={isOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        className={isOpen ? "navbar__list navbar__list--open" : "navbar__list"}
      >
        {NAV_LINKS.map(({ to, label }, index) => (
          <li
            key={to}
            style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
          >
            <NavLink
              to={to}
              end={to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => {
                const base =
                  to === "/contacto"
                    ? "navbar__link navbar__link--cta"
                    : "navbar__link";
                return isActive ? `${base} navbar__link--active` : base;
              }}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
