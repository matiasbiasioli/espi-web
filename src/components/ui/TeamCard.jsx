import "./TeamCard.css";

function TeamCard({ name, role, bio, image }) {
  return (
    <article className="team-card">
      <div className="team-card__avatar">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <span className="team-card__avatar-placeholder">Foto</span>
        )}
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
      <p className="team-card__bio">{bio}</p>
    </article>
  );
}

export default TeamCard;