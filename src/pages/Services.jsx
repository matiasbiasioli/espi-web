import PageHero from "../components/sections/PageHero";
import Accordion from "../components/ui/Accordion";
import Button from "../components/ui/Button";
import { SERVICES } from "../data/servicesData";
import "./Services.css";

const PROCESS_STEPS = [
  { title: "Admisión personalizada", description: "Evaluamos tus necesidades para orientarte con el equipo más adecuado." },
  { title: "Evaluación", description: "[Lorem ipsum — descripción del paso de evaluación clínica.]" },
  { title: "Plan de acompañamiento", description: "[Lorem ipsum — descripción de cómo se arma el plan de trabajo.]" },
];

const FAQ_ITEMS = [
  { question: "¿Cuánto dura un proceso?", answer: "[Respuesta pendiente.]" },
  { question: "¿Es presencial u online?", answer: "Podés elegir la modalidad que mejor se adapte a vos — más información en la sección Presencial y online del Inicio." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Qué ofrecemos" title="Servicios" />

      <section className="services-detail">
        <div className="container">
          {SERVICES.map(({ id, title, longDescription, icon }, index) => (
            <article
              className={index % 2 === 1 ? "services-detail__row services-detail__row--reverse" : "services-detail__row"}
              key={id}
            >
              <div className="services-detail__icon" aria-hidden="true">
                {icon}
              </div>
              <div className="services-detail__text">
                <h2>{title}</h2>
                <p>{longDescription}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="container">
          <p className="services-process__eyebrow">Cómo es el proceso</p>
          <h2 className="services-process__title">Tu primer paso con ESPI</h2>

          <div className="services-process__steps">
            {PROCESS_STEPS.map(({ title, description }, index) => (
              <div className="services-process__step" key={title}>
                <span className="services-process__number">{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-faq">
        <div className="container">
          <p className="services-faq__eyebrow">Dudas frecuentes</p>
          <h2 className="services-faq__title">Preguntas sobre nuestros servicios</h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="services-cta">
        <div className="container services-cta__inner">
          <h2>¿Listo para dar el primer paso?</h2>
          <Button to="/contacto" variant="primary">
            Pedir un turno
          </Button>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;