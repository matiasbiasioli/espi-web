import PageHero from "../components/sections/PageHero";
import Button from "../components/ui/Button";
import "./Institutional.css";

const PILLARS = [
  {
    title: "Rigor clínico",
    description: "Cada proceso se sostiene en evidencia, criterio profesional y marcos clínicos vigentes.",
  },
  {
    title: "Ética del proceso",
    description: "Sostenemos una ética del proceso, no del milagro — el cambio es producto del trabajo del consultante.",
  },
  {
    title: "Acompañamiento humano",
    description: "Un espacio clínico-profesional con calidez humana, sin discursos esotéricos ni promesas cerradas.",
  },
];

function Institutional() {
  return (
    <>
      <PageHero eyebrow="Quiénes somos" title="Nuestra historia" />

      <section className="institutional-origin">
        <div className="container institutional-origin__inner">
          <h2 className="institutional-origin__title">
            Un espacio pensado desde el <span className="institutional-accent">rigor</span> y la{" "}
            <span className="institutional-accent">calidez</span>
          </h2>
          <p className="institutional-origin__text">
            [Lorem ipsum — acá iría una sintesis de la historia, el origen de ESPI: por qué
            nace el espacio, qué necesidad viene a cubrir.]
          </p>
          <p className="institutional-origin__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section className="institutional-pillars">
        <div className="container">
          <p className="institutional-pillars__eyebrow">Nuestros pilares</p>
          <h2 className="institutional-pillars__title">Cómo trabajamos</h2>

          <div className="institutional-pillars__grid">
            {PILLARS.map(({ title, description }) => (
              <article className="institutional-pillars__card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="institutional-quote">
        <div className="container">
          <blockquote className="institutional-quote__box">
            <p>
              "ESPI acompaña procesos clínicos integrales, basados en
              evidencia y ética, que combinan psicoterapia y herramientas
              supervisadas para recuperar regulación, autonomía y bienestar"
            </p>
          </blockquote>
        </div>
      </section>

      <section className="institutional-cta">
        <div className="container institutional-cta__inner">
          <h2>¿Querés conocer más sobre nuestro trabajo?</h2>
          <Button to="/contacto" variant="primary">
            Contactanos
          </Button>
        </div>
      </section>
    </>
  );
}

export default Institutional;