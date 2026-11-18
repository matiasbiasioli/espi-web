import Accordion from "../ui/Accordion";
import "./Faq.css";

const FAQ_ITEMS = [
  {
    question: "¿Qué es ESPI?",
    answer: "ESPI (Espacio de Salud Psicoterapéutico Integral) es un espacio de acompañamiento que entiende la salud desde una perspectiva integral, contemplando las dimensiones física, mental, emocional, espiritual y el entorno de cada persona.\n\n Integramos medicina, psicoterapia y herramientas como la meditación, la alimentación consciente, el movimiento y el uso responsable de plantas y hongos con potencial terapéutico. Buscamos acompañar a cada persona en la construcción de su propio camino de bienestar, promoviendo la autonomía y la participación activa en su proceso.\n\n Entendemos la salud como un proceso que va más allá del alivio de los síntomas e incluye la posibilidad de generar cambios sostenibles en la vida cotidiana",
  },
  {
    question: "¿Qué son las terapias asistidas con psicodélicos (TAP)?",
    answer: "Son abordajes terapéuticos que investigan e integran el uso de sustancias psicodélicas en un contexto de acompañamiento profesional. Su potencial terapéutico se estudia en distintas problemáticas de salud mental, aunque la evidencia y el grado de desarrollo varían según la sustancia y la indicación.\n\n En estos procesos, la sustancia no constituye el tratamiento por sí sola: la preparación, el acompañamiento y la integración posterior son componentes fundamentales. El objetivo es favorecer la exploración de la experiencia y, a partir de ella, construir nuevos sentidos y posibilidades de cambio.\n\n En ESPI abordamos estas prácticas desde una perspectiva clínica, ética e integral, considerando la evidencia disponible, los riesgos, las contraindicaciones y el marco legal vigente.",
  },
  {
    question: "¿Qué significa trabajar desde un enfoque integrativo?",
    answer: "Significa comprender que la salud no depende de un único factor y que cada persona necesita un abordaje acorde a su historia, sus necesidades y su contexto.\n\n Por eso, articulamos los conocimientos de la medicina y la psicoterapia con el trabajo sobre los hábitos cotidianos: cómo nos alimentamos, cómo nos movemos, cómo descansamos, cómo nos vinculamos y qué espacios tenemos para la introspección y el autocuidado.\n\n Las intervenciones se adaptan a cada proceso, integrando distintas herramientas según las necesidades de la persona, sin perder de vista la evidencia científica y la seguridad clínica.",
  },
  {
    question: "¿ESPI trabaja únicamente con Terapias asistidas con psicodélicos (TAP)?",
    answer: "No. Nuestro enfoque no se centra en una sustancia ni en una herramienta específica. Integramos recursos de la medicina, la psicoterapia y las prácticas de autocuidado según las necesidades de cada persona.\n\n El trabajo sobre los hábitos, el descanso, la alimentación, el movimiento, la regulación emocional y los vínculos ocupa un lugar central. Cuando corresponde, también contemplamos otras herramientas terapéuticas, siempre valorando sus posibles beneficios, riesgos y limitaciones.",
  },
  {
    question: "¿Cómo sé qué propuesta es adecuada para mí?",
    answer: "Cada proceso es diferente. Podés comunicarte con nuestro equipo para conocer las propuestas disponibles y evaluar cuál se ajusta mejor a tus necesidades. Cuando se trata de un abordaje clínico o terapéutico, es importante realizar una valoración individual antes de definir los pasos a seguir.",
  },
  {
    question: "¿Cómo puedo acceder a los servicios de ESPI?",
    answer: "Podés explorar las propuestas y los servicios disponibles en nuestra página web. En la sección de contacto encontrarás los canales para comunicarte con nuestro equipo y recibir orientación sobre la propuesta que mejor se adapte a tu consulta.\n\n También podés escribirnos directamente por WhatsApp. Te ayudaremos a conocer las opciones disponibles y los pasos a seguir.",
  },
];

function Faq() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq__title">Preguntas Frecuentes</h2>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}

export default Faq;