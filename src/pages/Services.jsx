import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHero from "../components/sections/PageHero";
import Accordion from "../components/ui/Accordion";
import Button from "../components/ui/Button";
import { SERVICES, SERVICES_INTRO } from "../data/servicesData";
import "./Services.css";

// Adaptamos los servicios al formato del acordeón
const SERVICE_ITEMS = SERVICES.map(({ id, title, icon, description }) => ({
  id,
  question: title,
  icon,
  answer: description,
  hint: "Expandir para conocer más",
}));

const PROCESS_STEPS = [
  {
    title: "Admisión personalizada",
    description:
      "Evaluamos tus necesidades para orientarte con el equipo más adecuado.",
  },
  {
    title: "Evaluación",
    description: "[Lorem ipsum — descripción.]",
  },
  {
    title: "Plan de acompañamiento",
    description:
      "[Lorem ipsum — descripción.]",
  },
];

const FAQ_ITEMS = [
  { question: "¿Cuánto dura un proceso?", answer: "[Respuesta]" },
  {
    question: "¿Es presencial u online?",
    answer: "Podés elegir la modalidad que mejor se adapte a vos",
  },
];

function ServicesPage() {
  // Si la URL es /servicios#talleres, openId vale "talleres"
  const { hash } = useLocation();
  const openId = hash.replace("#", "");

  // Baja hasta el servicio indicado (con una pausa corta para que la página termine de cargar)
  useEffect(() => {
    if (!openId) return;

    const timer = setTimeout(() => {
      document
        .getElementById(openId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => clearTimeout(timer);
  }, [openId]);

  return (
    <>
      <PageHero eyebrow="Qué ofrecemos" title="Servicios" />

      <section className="services-detail">
        <div className="container">
          <p className="services-detail__intro">{SERVICES_INTRO}</p>

          <div className="services-detail__list">
            {/* key={openId}: si cambia el ancla, el acordeón se rearma con ese ítem abierto */}
            <Accordion
              key={openId}
              items={SERVICE_ITEMS}
              initialOpenId={openId}
            />
          </div>
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
          <h2 className="services-faq__title">
            Preguntas sobre nuestros servicios
          </h2>
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