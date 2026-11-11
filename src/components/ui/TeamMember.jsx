import "./TeamMember.css";

function TeamMember({ name, role, badge, bio, image, reverse }) {
  // Misma técnica que CourseCard: la ruta de la imagen viene del JSON
  const imageUrl = image
    ? new URL(`../../assets/images/${image}`, import.meta.url).href
    : null;

  return (
    <article className={reverse ? "team-member team-member--reverse" : "team-member"}>
      <div className="team-member__photo">
        {imageUrl ? <img src={imageUrl} alt={name} /> : <span>Foto</span>}
      </div>

      <div className="team-member__text">
        <span className="team-member__badge">{badge}</span>
        <h2 className="team-member__name">{name}</h2>
        <p className="team-member__role">{role}</p>
        {bio.map((paragraph) => (
          <p className="team-member__bio" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export default TeamMember;