import team from "../data/team.json";
import PageHero from "../components/sections/PageHero";
import TeamMember from "../components/ui/TeamMember";
import "./Team.css";

function Team() {
  return (
    <>
      <PageHero eyebrow="Quiénes somos" title="Nuestro equipo fundador" />

      <section className="team-page">
        <div className="container">
          <p className="team-page__intro">
            ESPI nace del encuentro entre profesionales con recorridos y saberes
            diversos, unidos por el interés en ampliar las formas de comprender y
            acompañar la salud. Desde distintas experiencias y perspectivas,
            construimos un espacio de trabajo interdisciplinario que integra
            ciencia, prácticas terapéuticas y una mirada humana de cada proceso.
          </p>

          {team.map((member, index) => (
            <TeamMember key={member.id} {...member} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Team;