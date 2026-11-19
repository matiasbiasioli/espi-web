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

          <div className="services__grid">
            {SERVICES.map(({ id, title, icon }, index) => (
              <article className="services__card" key={id}>
                <div className="services__card-top">
                  <div className="services__card-top">
                    <div className="services__mark" aria-hidden="true">
                      {icon}
                    </div>
                  </div>
                </div>

                <h3 className="services__card-title">{title}</h3>

                <Link to={`/servicios#${id}`} className="services__card-link">
                  Conocer más
                  <LuArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
