import { useState } from "react";
import "./Accordion.css";

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div className="accordion-item" key={item.question}>
            <button
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className={isOpen ? "accordion-icon accordion-icon--open" : "accordion-icon"}>
                +
              </span>
            </button>
            <div
              className="accordion-panel"
              style={{ maxHeight: isOpen ? "200px" : "0px" }}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;