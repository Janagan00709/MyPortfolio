import { useState } from "react";
import "./work.css";
import Projects from "./Projects";
// Import all images
import img1 from "../../assets/Projects/Calculator.png";
import img2 from "../../assets/Projects/Dottel.png";
import img3 from "../../assets/Projects/ToDo.png";
import img4 from "../../assets/Projects/CTF.png";
import img5 from "../../assets/Projects/Principal_Portfolio.png";
import img6 from "../../assets/Projects/Ewaste.png";
import img7 from "../../assets/Projects/PortFolio.png";
import img8 from "../../assets/Projects/Servyou.png";
import img9 from "../../assets/Projects/Seamstylers.png";
import img10 from "../../assets/Projects/DoorLock.png";
import img11 from "../../assets/Projects/TinDog.png";


const projects = [
  {
    name: "Smart Door Lock (AI & IoT)",
    description:
      "Developed an AI-powered smart door lock using YOLOv8n and Raspberry Pi for real-time person detection and automated access control. Designed to enhance security through intelligent scheduling and IoT integration..",
    stacks: ["Yolov3","IOT","AI","HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://github.com/janagan00709/Smart_Door_Lock",
    github: "https://github.com/janagan00709/Smart_Door_Lock",
    image: img10,
    category: "AI",
  },
  {
    name: "SeamStylers (E-Tailor Website)",
    description:
      "Built a custom clothing website where users can order tailor-made outfits and tailors can find job opportunities. Focused on user-friendly design and real-world scalability.",
    stacks: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/janagan00709/Seamstylers",
    github: "https://github.com/janagan00709/Seamstylers",
    image: img9,
    category: "Fullstack",
  },

  {
    name: "E-Waste Management System",
    description:
      "A comprehensive e-waste management platform enabling users to schedule pickups, track waste processing, and access educational resources on sustainable disposal practices.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript" , "PHP", "MySQL"],
    link: "https://github.com/janagan00709/E-waste",
    github: "https://github.com/janagan00709/E-waste",
    image: img6,
    category: "Fullstack",
  },
  {
    name: "Principal Portfolio Website",
    description:
      "Created a professional portfolio website to highlight achievements, publications, and initiatives of the institution’s principal. Designed with a clean interface and structured navigation for formal presentation.",
    stacks: ["React", "NextJs", "Node.js", "Express.js", "MongoDB"],
    link: "https://senthilkumar.vercel.app/",
    github: "https://github.com/janagan00709/Project-P",
    image: img5,
    category: "Fullstack",
  },
  {
    name: "To-Do List App",
    description:
      "Built a simple CRUD-based web app for managing daily tasks. Allows users to add, edit, and delete items easily.",
    stacks: ["React", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/janagan00709/TODOlist",
    github: "https://github.com/janagan00709/TODOlist",
    image: img3,
    category: "Fullstack",
  },
  {
    name: "ServYou (Hackathon Project)",
    description:
      "Developed a token generation web app for food distribution in closed organizations like colleges or IT companies. Focused on reducing manual effort and streamlining service delivery.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript" , "PHP", "MySQL"],
    link: "https://janagan00709.github.io/servyou/",
    github: "https://github.com/janagan00709/servyou",
    image: img8,
    category: "Fullstack",
  },
  {
    name: "Capture The Flag (CTF) Website",
    description:
      "Collaborated with a team to build a cybersecurity competition website using HTML, CSS, JS, PHP, and MySQL. Enabled real-time event management and leaderboard tracking.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript" , "PHP", "MySQL"],
    link: "https://github.com/janagan00709/Capture-the-flag",
    github: "https://github.com/janagan00709/Capture-the-flag",
    image: img4,
    category: "Fullstack",
  },
  {
    name: "Dottel Landing Page",
    description:
      "Designed a modern, responsive landing page to showcase a tech brand concept. Focused on clean visuals and smooth user experience.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://janagan00709.github.io/Landing_Page/",
    github: "https://github.com/janagan00709/Landing_Page",
    image: img2,
    category: "Frontend",
  },

  {
    name: "Calculator App",
    description:
      "Created a simple web-based calculator using HTML, CSS, and JS. Demonstrates logic implementation and UI responsiveness.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://janagan00709.github.io/Calculator/",
    github: "https://github.com/janagan00709/Calculator",
    image: img1,
    category: "Frontend",
  },

  {
    name: "Old Portfolio Website",
    description:
      "Developed a personal portfolio using HTML, CSS, and JS to display projects and achievements. Served as a foundation for your new React-based version.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript"],    
    link: "https://janagan00709.github.io/Portfolio/",
    github: "https://github.com/janagan00709/Portfolio",
    image: img7,
    category: "Frontend",
  },

  {
    name: "TinDog",
    description:
      "Built a fun website similar to Tinder but for dogs, using HTML, CSS, Bootstrap, and JS. Created as a learning project to practice responsive web design and UI components.",
    stacks: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    link: "https://janagan00709.github.io/tindog/",
    github: "https://github.com/janagan00709/tindog",
    image: img11,
    category: "Frontend",
  },
  // {
  //   name: "Netflix+ Clone",
  //   description:
  //     "Clone of Netflix+ streaming UI built with React, Axios, and TMDB API. Includes routing, styled-components, and basic movie info fetch.",
  //   stacks: ["React", "TMDB API"],
  //   link: "https://disney-clone-sable-one.vercel.app",
  //   github: "https://github.com/janagan00709/-clone",
  //   image: disney,
  //   category: "Fullstack,
  // },
  
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent Projects</span>
      <div className="work__filters container grid">
        <button
          className={`work__item ${
            selectedCategory === "All" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          ALL
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Fullstack" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Fullstack")}
        >
          FULLSTACK
        </button>
        <button
          className={`work__item ${
            selectedCategory === "Frontend" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`work__item ${
            selectedCategory === "AI" ? "active-work" : ""
          }`}
          onClick={() => setSelectedCategory("AI")}
        >
          AI
        </button>
      </div>

      <Projects projects={filteredProjects} />
    </section>
  );
};

export default Work;
