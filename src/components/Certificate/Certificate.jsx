/** @format */

import { useState, useEffect } from "react";
import "./Certificate.css";

// Import all images
import img1 from "../../assets/certificates/ICSSS.jpg";
import img2 from "../../assets/certificates/Data analyst.jpg";
import img3 from "../../assets/certificates/udemy web development.jpg";
import img4 from "../../assets/certificates/Web Development.jpg";
import img5 from "../../assets/certificates/Dbms Certificate.jpg";
import img6 from "../../assets/certificates/C Language Certificate.jpg";
import img7 from "../../assets/certificates/Java.jpg";
import img8 from "../../assets/certificates/Python Certificate.jpg";
import img9 from "../../assets/certificates/Hackathon.jpg";
import img10 from "../../assets/certificates/UI design.jpg";
import img11 from "../../assets/certificates/PacketTracer.jpg";
import img12 from "../../assets/certificates/Participation Certificate.jpg";
import img13 from "../../assets/certificates/Cloud.jpg";
import img14 from "../../assets/certificates/JANAGAN-A-PHP.jpg";
import img15 from "../../assets/certificates/JANAGAN-A-Python.jpg";

const Certificate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: img1,
      alt: "ICSSS Certificate",
      title: "ICSSS Conference",
      description: "Presented innovative research at the International Conference on Smart Systems and Solutions",
    },
    {
      id: 2,
      src: img2,
      alt: "Data Analytics Certificate",
      title: "Data Analytics",
      description: "Mastered data analysis techniques, visualization tools, and statistical modeling for business insights",
    },
    {
      id: 3,
      src: img3,
      alt: "Udemy Web Development Certificate",
      title: "Web Development - Udemy",
      description: "Completed comprehensive full-stack web development bootcamp covering HTML, CSS, JavaScript, and modern frameworks",
    },
    {
      id: 4,
      src: img4,
      alt: "Web Development Certificate",
      title: "Web Development - Internshala",
      description: "Successfully completed intensive training in responsive web design and frontend development best practices",
    },
    {
      id: 5,
      src: img5,
      alt: "DBMS Certificate",
      title: "Database Management Systems",
      description: "Gained expertise in relational databases, SQL queries, normalization, and database optimization techniques",
    },
    {
      id: 6,
      src: img6,
      alt: "C Language Certificate",
      title: "C Programming Language",
      description: "Built strong foundation in procedural programming, memory management, and algorithm implementation in C",
    },
    {
      id: 7,
      src: img7,
      alt: "Java Certificate",
      title: "Java Programming",
      description: "Developed proficiency in object-oriented programming, Java frameworks, and enterprise application development",
    },
    {
      id: 8,
      src: img8,
      alt: "Python Certificate",
      title: "Python Programming",
      description: "Acquired advanced Python skills including data structures, automation, and building scalable applications",
    },
    {
      id: 9,
      src: img9,
      alt: "Hackathon Certificate",
      title: "National Level Hackathon",
      description: "Demonstrated problem-solving abilities and teamwork by developing innovative solutions under time constraints",
    },
    {
      id: 10,
      src: img10,
      alt: "UX Design Certificate",
      title: "UI/UX Design",
      description: "Learned user-centered design principles, wireframing, prototyping, and creating intuitive user experiences",
    },
    {
      id: 11,
      src: img11,
      alt: "Packet Tracer Certificate",
      title: "Cisco Packet Tracer",
      description: "Completed hands-on training in network simulation, routing protocols, and network infrastructure design",
    },
    {
      id: 12,
      src: img12,
      alt: "Venture Capital Certificate",
      title: "Venture Capital Seminar",
      description: "Explored startup ecosystem, funding strategies, and entrepreneurial mindset through industry expert sessions",
    },
    {
      id: 13,
      src: img13,
      alt: "Cloud Computing Certificate",
      title: "Cloud Computing Workshop",
      description: "Gained practical knowledge in cloud architecture, deployment models, and cloud service management",
    },
    {
      id: 14,
      src: img14,
      alt: "PHP MySQL Certificate",
      title: "PHP and MySQL",
      description: "Developed dynamic web applications using server-side scripting and database integration with PHP and MySQL",
    },
    {
      id: 15,
      src: img15,
      alt: "Python Programming Certificate",
      title: "Advanced Python Programming",
      description: "Enhanced Python expertise with advanced concepts including decorators, generators, and asynchronous programming",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="photography-section">
      {/* Animated Background */}
      <div className="stars-background">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header-section">
          <h1 className="main-title">Certificates</h1>
        </div>

        {/* Main Image Display */}
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="main-image"
            />

            {/* Image Info Overlay */}
            <div className="image-info">
              <h2 className="image-title">{images[currentIndex].title}</h2>
              <p className="image-description">
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button className="nav-btn prev-btn" onClick={handlePrev}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="nav-btn next-btn" onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="page-number">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Certificate;