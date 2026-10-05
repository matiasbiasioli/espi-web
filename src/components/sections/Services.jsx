import { SERVICES } from "../../data/servicesData";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <p className="services__eyebrow">Qué ofrecemos</p>
        <h2 className="services__title">Servicios</h2>

        <div className="services__grid">
          {SERVICES.map(({ id, title, shortDescription, icon }) => (
            <article className="services__card" key={id}>
              <div className="services__mark" aria-hidden="true">
                {icon}
              </div>
              <h3 className="services__card-title">{title}</h3>
              <p className="services__card-copy">{shortDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;