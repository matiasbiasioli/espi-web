import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">espi</span>
        <p className="footer__text">
          Espacio de salud psicoterapéutico integral
        </p>
        <p className="footer__copy">© {year} ESPI. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;