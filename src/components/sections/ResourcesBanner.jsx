import { LuDownload } from "react-icons/lu";
import Button from "../ui/Button";
import "./ResourcesBanner.css";

function ResourcesBanner() {
  return (
    <section className="resources-banner">
      <div className="container resources-banner__inner">
        <div className="resources-banner__icon" aria-hidden="true">
          <LuDownload />
        </div>
        <div className="resources-banner__text">
          <p className="resources-banner__eyebrow">Para llevarte ya</p>
          <h2 className="resources-banner__title">Recursos gratuitos</h2>
          <p className="resources-banner__copy">
            Guías, clases abiertas y contenido descargable para acompañar tu
            proceso.
          </p>
        </div>
        <Button to="/recursos" variant="primary">
          Ver recursos
        </Button>
      </div>
    </section>
  );
}

export default ResourcesBanner;