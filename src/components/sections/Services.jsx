import { Link } from "react-router-dom";
import { LuArrowRight, LuCircleCheck } from "react-icons/lu";
import { SERVICES } from "../../data/servicesData";
import "./Services.css";

const MODALITIES = [
  "Sesiones presenciales",
  "Sesiones online",
  "Primer contacto por mensaje o formulario",
];

function Services() {
  return (
    <section className="services">
      <div className="services__box">
        <div className="container">
          <h2 className="services__title">Qué ofrecemos</h2>

          {/* Modalidad de atención: bajada del título + etiquetas */}
          <p className="services__intro">
            La atención puede ser presencial o a distancia, según lo que mejor
            se adapte a cada proceso.
          </p>

          <ul className="services__tags">
            {MODALITIES.map((item) => (
              <li key={item}>
                <LuCircleCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <ul className="services__list">
            {SERVICES.map(({ id, title, icon }) => (
              <li key={id}>
                {/* La fila entera es el link: ícono | nombre | "Conocer más" */}
                <Link to={`/servicios#${id}`} className="services__row">
                  <span className="services__mark" aria-hidden="true">
                    {icon}
                  </span>

                  <h3 className="services__row-title">{title}</h3>

                  <span className="services__row-cta">
                    <span className="services__row-label">Conocer más</span>
                    <LuArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;