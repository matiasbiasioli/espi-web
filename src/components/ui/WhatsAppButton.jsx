import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "5491127756906"; // sin +, espacios ni guiones
const WHATSAPP_MESSAGE = "Hola! Quería hacer una consulta.";

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Animación de entrada: aparece un momento después de cargar la página
    const enterTimer = setTimeout(() => setIsVisible(true), 600);
    // El globo de texto aparece solo, un poco después
    const bubbleTimer = setTimeout(() => setShowBubble(true), 2000);
    // Y se esconde solo pasado un rato, para no molestar
    const hideBubbleTimer = setTimeout(() => setShowBubble(false), 7000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(bubbleTimer);
      clearTimeout(hideBubbleTimer);
    };
  }, []);

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div
      className={
        isVisible ? "whatsapp-fab whatsapp-fab--visible" : "whatsapp-fab"
      }
    >
      {showBubble && (
        <div className="whatsapp-fab__bubble">Consultanos por WhatsApp</div>
      )}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab__button"
        aria-label="Consultanos por WhatsApp"
        onMouseEnter={() => setShowBubble(true)}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default WhatsAppButton;
