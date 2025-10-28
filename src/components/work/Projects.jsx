import { useState, useEffect } from "react";
import "./work.css";

const Projects = ({ projects }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if screen width is mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  // For mobile, show limited items
  const displayedProjects = isMobile
    ? projects.slice(0, visibleCount)
    : projects;

  return (
    <div className="work__section">
      <div className="work__container container grid">
        {displayedProjects.map((project, index) => (
          <div className="project__card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project__img"
            />

            <div className="project__data">
              <h3 className="project__title">{project.name}</h3>
              <p className="project__description">{project.description}</p>

              <ul className="tags">
                {project.stacks.map((stack, i) => (
                  <li key={i}>{stack}</li>
                ))}
              </ul>

              <div className="project__links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__button"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show Load More button only on mobile */}
      {isMobile && visibleCount < projects.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
