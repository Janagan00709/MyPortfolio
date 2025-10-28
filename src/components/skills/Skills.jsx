import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Programming from "./Programming";
import Tools from "./Tools";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Programming/>
        <Tools/>
      </div>
    </section>
  );
};

export default Skills;
