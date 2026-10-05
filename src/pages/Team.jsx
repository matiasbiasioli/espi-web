import team from "../data/team.json";
import TeamCard from "../components/ui/TeamCard";
import "./Team.css";

function Team() {
  return (
    <section className="team-page">
      <div className="container">
        <p className="team-page__eyebrow">Quiénes somos</p>
        <h1 className="team-page__title">Equipo</h1>

        <div className="team-page__grid">
          {team.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;