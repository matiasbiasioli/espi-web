import { Link } from "react-router-dom";
import { LuArrowRight } from "react-icons/lu";
import { SERVICES } from "../../data/servicesData";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="services__box">
        <div className="container">
          <h2 className="services__title">Qué ofrecemos</h2>

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