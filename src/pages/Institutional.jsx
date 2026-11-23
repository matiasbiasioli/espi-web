import { LuCircleCheck } from "react-icons/lu";
import PageHero from "../components/sections/PageHero";
import Button from "../components/ui/Button";
import "./Institutional.css";

const TIMELINE = [
  {
    year: "2022",
    title: "Una búsqueda compartida",
    text: "ESPI nace de una búsqueda compartida que comenzó en 2022, cuando un grupo de profesionales nos reunimos en torno a la investigación, la divulgación y el trabajo interdisciplinario. Nos convocaba el interés por explorar herramientas, prácticas y perspectivas que ampliaran las formas de comprender y acompañar los procesos de salud y enfermedad.",
  },
  {
    year: "2025",
    title: "Nace ESPI",
    text: "En 2025, esa búsqueda tomó forma con la creación de ESPI: un espacio desde el cual integrar saberes, trabajar en equipo y ofrecer propuestas de acompañamiento que articulen la evidencia científica con una mirada integral de la salud.",
  },
  {
    year: "Hoy",
    title: "Un equipo interdisciplinario",
    text: "Desde entonces, fuimos construyendo un equipo interdisciplinario que hoy reúne a más de 15 profesionales de distintas áreas. Compartimos una perspectiva de trabajo que reconoce la singularidad de cada persona y busca ofrecer respuestas acordes a sus necesidades, historia y contexto.",
    stat: { number: "+15", label: "profesionales de distintas áreas" },
  },
];

const TEAMWORK = [
  "Articulación entre profesionales",
  "Espacios de discusión y reflexión clínica",
  "Ateneos",
  "Supervisiones",
  "Actualización permanente",
];

function Institutional() {
  return (
    <>
      <PageHero eyebrow="Quiénes somos" title="Nuestra historia" />

      {/* Línea de tiempo: tres tarjetas unidas por una línea */}
      <section className="institutional-timeline">
        <div className="container">
          <ol className="institutional-timeline__list">
            {TIMELINE.map(({ year, title, text, stat }) => (
              <li className="institutional-timeline__item" key={year}>
                <span className="institutional-timeline__dot" aria-hidden="true" />

                <article className="institutional-timeline__card">
                  <span className="institutional-timeline__year">{year}</span>
                  <h2>{title}</h2>
                  <p>{text}</p>

                  {stat && (
                    <div className="institutional-timeline__stat">
                      <strong>{stat.number}</strong>
                      <span>{stat.label}</span>
                    </div>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trabajo en equipo, en caja redondeada */}
      <section className="institutional-teamwork">
        <div className="institutional-teamwork__box">
          <div className="container institutional-teamwork__inner">
            <div>
              <p className="institutional-teamwork__eyebrow">Trabajo en equipo</p>
              <h2 className="institutional-teamwork__title">Cómo trabajamos</h2>
              <p className="institutional-teamwork__text">
                Creemos que el trabajo en equipo es fundamental para sostener
                una atención de calidad. Por eso, promovemos la articulación
                entre profesionales, los espacios de discusión y reflexión
                clínica, los ateneos, las supervisiones y la actualización
                permanente. Estas instancias nos permiten compartir
                conocimientos, revisar nuestras prácticas y construir criterios
                de acompañamiento de manera conjunta.
              </p>
            </div>

            <ul className="institutional-teamwork__list">
              {TEAMWORK.map((item) => (
                <li key={item}>
                  <LuCircleCheck aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Compromiso */}
      <section className="institutional-commitment">
        <div className="container">
          <div className="institutional-commitment__box">
            <p className="institutional-commitment__lead">
              Nuestro compromiso es ofrecer un espacio de cuidado donde cada
              persona pueda sentirse escuchada, acompañada y respetada en su
              singularidad. Buscamos favorecer procesos de cambio y aprendizaje,
              promoviendo una participación activa en el cuidado de la propia
              salud.
            </p>
            <p className="institutional-commitment__text">
              Seguimos construyendo este camino con curiosidad, compromiso y
              apertura, buscando nuevas formas de acompañar a las personas y de
              promover una salud más consciente, participativa e integral.
            </p>
          </div>
        </div>
      </section>

      {/* Cierre */}
      <section className="institutional-cta">
        <div className="container institutional-cta__inner">
          <h2>¿Querés conocer más sobre nuestro trabajo?</h2>
          <div className="institutional-cta__actions">
            <Button to="/equipo" variant="outline" size="lg">
              Conocé al equipo
            </Button>
            <Button to="/contacto" variant="primary">
              Contactanos
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Institutional;