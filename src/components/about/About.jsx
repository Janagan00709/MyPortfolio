import "./about.css";
import { files, resume, work2 } from "../../assets/assets";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={work2} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            As a Full-Stack Developer with expertise in the MERN stack, I
            possess an impressive arsenal of skills in HTML, CSS, JavaScript,
            React, Tailwind, and Node.js.
          </p>
          <a
            download="SayyidMarvanVT_Resume.pdf"
            href={resume}
            className="button button--flex"
          >
            Download Resume
            <img src={files} alt="" className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
