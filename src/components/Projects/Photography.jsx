/** @format */

import { useState, useEffect, useMemo } from "react";
import "./Photography.css";

// Import all images
import img1 from "../../assets/Projects/Calculator.png";
import img2 from "../../assets/Projects/CTF-Cat.png";
import img3 from "../../assets/Projects/Dottel.png";
import img4 from "../../assets/Projects/Ewaste_Dashboard.png";
import img5 from "../../assets/Projects/Seamstylers_about.png";
import img6 from "../../assets/Projects/Servyou_cart.png";
import img7 from "../../assets/Projects/Seamstylers_cart.png";
import img8 from "../../assets/Projects/ToDo.png";
import img9 from "../../assets/Projects/CTF.png";
import img10 from "../../assets/Projects/Ewaste_Dashboard1.png";
import img11 from "../../assets/Projects/Calculator.png";
import img12 from "../../assets/Projects/Seamstylers_Product.png";
import img13 from "../../assets/Projects/Principal_Portfolio.png";
import img14 from "../../assets/Projects/Ewaste_Gadgets.png";
import img15 from "../../assets/Projects/Dottel_about.png";
import img16 from "../../assets/Projects/Ewaste.png";
import img17 from "../../assets/Projects/PortFolio.png";
import img18 from "../../assets/Projects/Seamstylers_admin.png";
import img19 from "../../assets/Projects/Servyou.png";
import img20 from "../../assets/Projects/Seamstylers.png";

const Photography = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = useMemo(
    () => [
      { id: 1, src: img1, alt: "Calculator" },
      { id: 2, src: img2, alt: "CTF-CAT" },
      { id: 3, src: img3, alt: "Dottel" },
      { id: 4, src: img4, alt: "Ewaste Dashboard" },
      { id: 5, src: img5, alt: "Seamstylers About" },
      { id: 6, src: img6, alt: "Servyou Cart" },
      { id: 7, src: img7, alt: "Seamstylers Cart" },
      { id: 8, src: img8, alt: "ToDo App" },
      { id: 9, src: img9, alt: "CTF Project" },
      { id: 10, src: img10, alt: "Ewaste Dashboard 1" },
      { id: 11, src: img11, alt: "Smart Door Lock" },
      { id: 12, src: img12, alt: "Seamstylers Product" },
      { id: 13, src: img13, alt: "Principal Portfolio" },
      { id: 14, src: img14, alt: "Ewaste Gadgets" },
      { id: 15, src: img15, alt: "Dottel About" },
      { id: 16, src: img16, alt: "Ewaste" },
      { id: 17, src: img17, alt: "Portfolio" },
      { id: 18, src: img18, alt: "Seamstylers Admin" },
      { id: 19, src: img19, alt: "Servyou" },
      { id: 20, src: img20, alt: "Seamstylers" },
    ],
    []
  );

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
  }, [images]);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleImageClick = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  return (
    <div id="projects">
      <div id="photographs" className="box">
        <h1 className="sub-project">UI/UX Gallery</h1>
        <div className="pos_Set">
          <div className="slider">
            {images.map((image, index) => (
              <span
                key={image.id}
                style={{ "--i": image.id }}
                onClick={() => handleImageClick(index)}
                className="image-container"
              >
                <img className="scales" src={image.src} alt={image.alt} />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>
              ✕
            </button>

            <button className="arrow-btn prev-arrow" onClick={handlePrev}>
              ❮
            </button>

            <div className="modal-image-wrapper">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                className="modal-image"
              />
            </div>

            <button className="arrow-btn next-arrow" onClick={handleNext}>
              ❯
            </button>

            <p className="modal-title">{images[selectedIndex].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
