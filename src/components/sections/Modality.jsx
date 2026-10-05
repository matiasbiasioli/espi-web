import { LuCircleCheck } from "react-icons/lu";
import "./Modality.css";

const CHECK_ITEMS = [
  "Sesiones presenciales",
  "Sesiones online",
  "Primer contacto por mensaje o formulario",
];

function Modality() {
  return (
    <section className="modality">
      <div className="container modality__inner">
        <div className="modality__text">
          <p className="modality__eyebrow">Cómo trabajamos</p>
          <h2 className="modality__title">
            Presencial <span className="modality__accent-serif">y</span> online
          </h2>
          <p className="modality__paragraph">
            La atención puede ser presencial o a distancia, según lo que
            mejor se adapte a cada proceso.
          </p>
          <ul className="modality__check-list">
            {CHECK_ITEMS.map((item) => (
              <li key={item}>
                <LuCircleCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="modality__frame">
          <div
            className="modality__placeholder"
            role="img"
            aria-label="Fotografía de modalidad de atención — pendiente de material del cliente"
          >
            <span>Foto/imagen</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modality;