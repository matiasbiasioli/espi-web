import "./Services.css";

const SERVICES = [
  {
    title: "Psicoterapia",
    description: "[Descripción]",
    icon: (
      <svg viewBox="0 0 40 40">
        <path
          d="M20 6c-9 0-15 6-15 13 0 4 2.3 7.5 6 10l-1.5 6 6.8-3.6c1.2.2 2.4.3 3.7.3 9 0 15-6 15-13S29 6 20 6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="14" cy="19" r="1.6" fill="currentColor" />
        <circle cx="20" cy="19" r="1.6" fill="currentColor" />
        <circle cx="26" cy="19" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Fitomedicina",
    description: "[Descripción]",
    icon: (
      <svg viewBox="0 0 40 40">
        <path
          d="M20 33c-9-1-14-8-13-19 11-1 18 4 19 13 .5 3.5-.5 6-6 6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M20 33C15 24 12 17 8 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Herramientas supervisadas",
    description: "[Descripción]",
    icon: (
      <svg viewBox="0 0 40 40">
        <path
          d="M20 6l12 4v9c0 8-5 13.5-12 16-7-2.5-12-8-12-16v-9z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 20l4 4 8-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Formación para profesionales",
    description: "[Descripción]",
    icon: (
      <svg viewBox="0 0 40 40">
        <path
          d="M20 8L4 15l16 7 16-7z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11 18.5v7c0 2.5 4 5 9 5s9-2.5 9-5v-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M33 16v9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section className="services">
      <div className="container">
        <p className="services__eyebrow">Qué ofrecemos</p>
        <h2 className="services__title">Servicios</h2>

        <div className="services__grid">
          {SERVICES.map(({ title, description, icon }) => (
            <article className="services__card" key={title}>
              <div className="services__mark" aria-hidden="true">
                {icon}
              </div>
              <h3 className="services__card-title">{title}</h3>
              <p className="services__card-copy">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;