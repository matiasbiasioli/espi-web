import Button from "../ui/Button";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <svg className="hero__blob hero__blob--1" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M45,-58.4C57.4,-49.6,65,-33.5,68.6,-16.5C72.2,0.5,71.8,18.4,64.3,32.9C56.9,47.4,42.5,58.5,26.4,64.8C10.4,71.1,-7.3,72.7,-24.2,68.1C-41.1,63.5,-57.2,52.7,-66.1,37.6C-75,22.5,-76.7,3.1,-72.4,-14.2C-68.1,-31.5,-57.8,-46.7,-44,-55.7C-30.2,-64.7,-15.1,-67.5,1.2,-69.1C17.5,-70.7,35,-71.1,45,-58.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg className="hero__target" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="3" fill="currentColor" />
        </svg>
        <div className="hero__dotgrid" />
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow">Espacio de Salud Psicoterapéutico Integral</p>
        <h1 className="hero__title">
          Rigor <span className="hero__accent-serif">clínico.</span>
          <br />
          Color <span className="hero__accent-highlight">humano.</span>
        </h1>
        <p className="hero__sub">
          Acompañamiento terapéutico clínico. Psicoterapia, fitomedicina y
          herramientas supervisadas. Formación para profesionales. Atención
          presencial y online.
        </p>
        <div className="hero__actions">
          <Button to="/contacto" variant="primary">Pedir un turno</Button>
          <Button to="/servicios" variant="ghost">Ver servicios</Button>
        </div>
      </div>

      <div className="hero__ribbon" aria-hidden="true">
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
          <path d="M0,110 C 240,220 340,0 620,90 C 900,180 1040,20 1440,110" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;