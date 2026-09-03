import "./Disclaimer.css";

function Disclaimer() {
  return (
    <section className="disclaimer">
      <div className="container disclaimer__container">
        <div className="disclaimer__box">
          <span className="disclaimer__icon" aria-hidden="true">
            !
          </span>
          <div className="disclaimer__content">
            <p className="disclaimer__title">Disclaimer</p>
            <p className="disclaimer__text">
              ESPI brinda acompañamiento clínico profesional.
            </p>
            <p className="disclaimer__text">
              <strong>No promueve</strong> curas milagrosas ni reemplaza
              tratamientos médicos.
            </p>
            <p className="disclaimer__text">
              Toda intervención se realiza bajo criterios éticos, supervisión
              profesional y marcos clínicos vigentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Disclaimer;