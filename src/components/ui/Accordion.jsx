import { useState } from "react";
import "./Accordion.css";

// Cada item: { id?, question, answer, icon?, hint? }
// - id (opcional): permite llegar a ese ítem con un ancla (#id)
// - initialOpenId (opcional): ítem que arranca abierto
function Accordion({ items, initialOpenId }) {
  const [openIndex, setOpenIndex] = useState(() => {
    if (!initialOpenId) return null;
    const index = items.findIndex((item) => item.id === initialOpenId);
    return index === -1 ? null : index;
  });

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const paragraphs = Array.isArray(item.answer) ? item.answer : [item.answer];

        return (
          <div className="accordion-item" id={item.id} key={item.question}>
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