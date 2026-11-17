import { useState } from "react";
import "./Accordion.css";

// Cada item: { question, answer, icon?, hint? }
// - answer puede ser un texto o una lista de párrafos
// - icon (opcional) se muestra a la izquierda del título
// - hint (opcional) es el texto chico a la derecha mientras está cerrado
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const paragraphs = Array.isArray(item.answer) ? item.answer : [item.answer];

        return (
          <div className="accordion-item" key={item.question}>
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              <span className="accordion-question">
                {item.icon && (
                  <span className="accordion-lead-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.question}
              </span>

              <span className="accordion-end">
                {item.hint && !isOpen && (
                  <span className="accordion-hint">{item.hint}</span>
                )}
                <span
                  className={
                    isOpen ? "accordion-icon accordion-icon--open" : "accordion-icon"
                  }
                >
                  +
                </span>
              </span>
            </button>

            <div
              className={
                isOpen ? "accordion-panel accordion-panel--open" : "accordion-panel"
              }
            >
              <div className="accordion-panel__inner">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;