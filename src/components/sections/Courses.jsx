import courses from "../../data/courses.json";
import CourseCard from "../ui/CourseCard";
import Button from "../ui/Button";
import "./Courses.css";

function Courses() {
  return (
    <section className="courses">
      <div className="container">
        <p className="courses__eyebrow">Formación</p>
        <h2 className="courses__title">Cursos y formación</h2>

        <div className="courses__grid">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        <div className="courses__footer">
          <Button to="/talleres" variant="outline" size="lg">
            Ver más
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Courses;
