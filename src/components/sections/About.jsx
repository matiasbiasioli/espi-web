import "./About.css";
import fotoInstitucional from "../../assets/images/foto-institucional.png";

function About() {
  return (
    <section className="about">
      <div className="container about__inner">
        <div className="about__frame">
          <img
            src={fotoInstitucional}
            alt="Cuidar tu salud también es cuidar tu seguridad"
            className="about__photo"
          />
        </div>
        <div className="about__text">
          <p className="about__eyebrow">Cuerpo · Mente · Dimensión del espíritu</p>
          <h2 className="about__title">
            Un espacio pensado como{" "}
            <span className="about__accent-serif">acompañamiento integral</span>
          </h2>
          <p className="about__paragraph">
            En ESPI trabajamos desde un enfoque integral, articulando clínica
            médica, salud mental y psicoterapias asistidas con
            responsabilidad y criterio profesional. Cada proceso comienza con
            una admisión personalizada para evaluar tus necesidades y
            acompañarte con el equipo más adecuado.
          </p>
          <p className="about__paragraph">
            Si estás buscando un espacio serio, cuidado y comprometido con tu
            salud, podemos orientarte.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;