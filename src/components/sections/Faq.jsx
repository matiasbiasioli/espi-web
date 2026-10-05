import Accordion from "../ui/Accordion";
import "./Faq.css";

const FAQ_ITEMS = [
  {
    question: "[Pregunta frecuente 1]",
    answer: "[Respuesta]",
  },
  {
    question: "[Pregunta frecuente 2]",
    answer: "[Respuesta]",
  },
  {
    question: "[Pregunta frecuente 3]",
    answer: "[Respuesta]",
  },
];

function Faq() {
  return (
    <section className="faq">
      <div className="container">
        <p className="faq__eyebrow">Preguntas frecuentes</p>
        <h2 className="faq__title">FAQ</h2>
        <Accordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}

export default Faq;