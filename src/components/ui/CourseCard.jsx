import Button from "./Button";
import "./CourseCard.css";

function CourseCard({ title, tag, description, image }) {
  let imageUrl;
  try {
    imageUrl = new URL(`../../assets/images/${image}`, import.meta.url).href;
  } catch {
    imageUrl = null;
  }

  return (
    <article className="course-card">
      <div className="course-card__img">
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
      <div className="course-card__body">
        <div className="course-card__tag">{tag}</div>
        <h3 className="course-card__title">{title}</h3>
        <p className="course-card__description">{description}</p>
        <Button to="/contacto" variant="outline">
          Consultar
        </Button>
      </div>
    </article>
  );
}

export default CourseCard;