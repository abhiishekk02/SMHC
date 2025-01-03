import React, { useState, useEffect } from "react";
import "./Home.css";

const HomePage = () => {
  const slides = [
    {
      id: 1,
      title: "Synergy Mental Health Counseling",
      subtitle: "Where it all comes together",
      description:
        "We strive to bring mind, body, and spirit together in balance, creating a stronger, more powerful you.",
      buttonText: "Contact Us Today",
      buttonLink: "/contact",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Your Mental Health Matters",
      subtitle: "We are here to support you",
      description:
        "Take the first step towards a balanced and fulfilling life.",
      buttonText: "Learn More",
      buttonLink: "/about",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Start Your Journey",
      subtitle: "Find the support you need",
      description:
        "Explore our services and discover the power of healing and growth.",
      buttonText: "Explore Services",
      buttonLink: "/services",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(null);

  const handleLongPress = (index) => {
    setActiveSlide(index); // Unblur the image
    setTimeout(() => setActiveSlide(null), 3000); // Reblur after 3 seconds
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? "active" : ""} ${
              activeSlide === index ? "unblurred" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              height: "80vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseDown={() => handleLongPress(index)} // For desktop
            onTouchStart={() => handleLongPress(index)} // For mobile
          >
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100">
              <h1 className="text-white fw-bold">{slide.title}</h1>
              <h2 className="text-success fw-bold">{slide.subtitle}</h2>
              <p className="text-white">{slide.description}</p>
              <a href={slide.buttonLink} className="btn btn-success btn-lg">
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
