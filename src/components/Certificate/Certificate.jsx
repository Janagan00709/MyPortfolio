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
      alt: "Photography 1",
      title: "ICSSS",
      description: "Capturing the golden hour beauty",
    },
    {
      id: 2,
      src: img2,
      alt: "Photography 2",
      title: "Data Analystics",
      description: "Stories from the city streets",
    },
    {
      id: 3,
      src: img3,
      alt: "Photography 3",
      title: "Web Development",
      description: "The peaks at dawn",
    },
    {
      id: 4,
      src: img4,
      alt: "Photography 4",
      title: "Internshala Web Development",
      description: "Celebrating traditions",
    },
    {
      id: 5,
      src: img5,
      alt: "Photography 5",
      title: "DBMS",
      description: "Nature in its purest form",
    },
    {
      id: 6,
      src: img6,
      alt: "Photography 6",
      title: "C Language",
      description: "Urban nightscapes",
    },
    {
      id: 7,
      src: img7,
      alt: "Photography 7",
      title: "Java ",
      description: "Capturing raw feelings",
    },
    {
      id: 8,
      src: img8,
      alt: "Photography 8",
      title: "Python",
      description: "Adventures around the world",
    },
    {
      id: 9,
      src: img9,
      alt: "Photography 9",
      title: "National Hackathon",
      description: "Preserving our roots",
    },
    {
      id: 10,
      src: img10,
      alt: "Photography 10",
      title: "UX Design",
      description: "The beauty of biodiversity",
    },
    {
      id: 11,
      src: img11,
      alt: "Photography 11",
      title: "Packet Tracker",
      description: "Design meets function",
    },
    {
      id: 12,
      src: img12,
      alt: "Photography 12",
      title: "Venture Capitalist Seminar",
      description: "Where earth meets sky",
    },
    {
      id: 13,
      src: img13,
      alt: "Photography 13",
      title: "Cloud Workshop",
      description: "The beauty of biodiversity",
    },
    {
      id: 14,
      src: img14,
      alt: "Photography 14",
      title: "PHP and MySql",
      description: "Design meets function",
    },
    {
      id: 15,
      src: img15,
      alt: "Photography 15",
      title: "Python Programming",
      description: "Where earth meets sky",
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
          {/* <p className="subtitle">Capturing moments, emotions, and stories through my lens</p> */}
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
              {/* <span className="category-badge">{images[currentIndex].category}</span> */}
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
