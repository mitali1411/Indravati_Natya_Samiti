import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1739992115892-36453a241b5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2NXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1733503711063-3427bff34612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3MXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739860822393-e439b0f4e3ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDV8fHxlbnwwfHx8fHw%3D"
];

const Story = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container position-relative d-flex flex-column align-items-center" id="story">
        <h3>Stories<span className="text-dark"> & </span>Updates</h3>
      <div className="carousel slide">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>
              <img src={image} className="d-block rounded" alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="position-absolute top-50 start-0 translate-middle-y btn btn-dark"
      >
        <HiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="position-absolute top-50 end-0 translate-middle-y btn btn-dark"
      >
        <HiChevronRight size={24} />
      </button>

      <div className="position-absolute bottom-0 d-flex justify-content-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-sm mx-1 ${index === currentIndex ? "btn-danger" : "btn-secondary"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Story;