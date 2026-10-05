import "./PageHero.css";

function PageHero({ eyebrow, title }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
      </div>
    </section>
  );
}

export default PageHero;