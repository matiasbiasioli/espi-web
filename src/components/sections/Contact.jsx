import { useState } from "react";
import Button from "../ui/Button";
import "./Contact.css";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const CONTACT_LINKS = [
  {
    label: "@espi.salud",
    href: "https://www.instagram.com/espi.salud",
    Icon: FaInstagram,
    external: true,
  },
  {
    // Cuando tengas el link real: cambiá el href y agregá external: true
    label: "YouTube",
    href: "#",
    Icon: FaYoutube,
  },
  {
    label: "contacto@ejemplo.com",
    href: "mailto:contacto@ejemplo.com",
    Icon: LuMail,
  },
  {
    // Número sin +, espacios ni guiones en el href (wa.me/54911...)
    label: "+54 9 11 0000-0000",
    href: "https://wa.me/5491100000000",
    Icon: FaWhatsapp,
    external: true,
  },
];

const CONSULTATION_OPTIONS = ["Opción 1", "Opción 2", "Opción 3"];

const INITIAL_FORM = {
  nombre: "",
  email: "",
  motivo: "",
  mensaje: "",
};

function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/send-email.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error en el envío");

      setStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="contact">
      <div className="container contact__inner">
        <div className="contact__text">
          <p className="contact__eyebrow">Contacto</p>
          <h2 className="contact__title">Escribinos</h2>
          <p className="contact__copy">
            Contanos tu consulta y te respondemos para coordinar un primer
            encuentro.
          </p>
          <ul className="contact__links">
            {CONTACT_LINKS.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="contact__link"
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                >
                  <span className="contact__link-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__row">
            <label>
              Nombre
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label>
            Motivo de consulta
            <select
              name="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>
              {CONSULTATION_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mensaje
            <textarea
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </label>

          <Button
            type="submit"
            variant="primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </Button>

          {status === "success" && (
            <p className="contact__feedback contact__feedback--success">
              ¡Gracias! Te vamos a responder a la brevedad.
            </p>
          )}
          {status === "error" && (
            <p className="contact__feedback contact__feedback--error">
              Hubo un problema al enviar el mensaje. Probá de nuevo o escribinos
              por Instagram.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
