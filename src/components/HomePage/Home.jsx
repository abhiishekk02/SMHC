import React from "react";
import "./Home.css";
import ReviewsSection from "../ReviewsSection/ReviewSection";
import OurServices from "./ServicesCard";
import Footer from "../Footer/Footer";
import img1 from "../../Assets/Logo7.png";

import img2 from "../../Assets/image-2.png";
import img3 from "../../Assets/image-3.png";
import img4 from "../../Assets/image-4.png";
import img5 from "../../Assets/image-5.png";
import img6 from "../../Assets/image-6.png";
import img7 from "../../Assets/image-7.png";

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
      backgroundImage: img1,
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
        "https://www.cdc.gov/dnpao-data-trends-maps/media/images/2-adults-walking-with-young-child.jpg",
    },
    {
      id: 3,
      title: "Start Your Journey",
      subtitle: "Find the support you need",
      description:
        "Explore our services and discover the power of healing and growth.",
      buttonText: "Explore Services",
      buttonLink: "/ourservices",
      backgroundImage:
        "https://plus.unsplash.com/premium_photo-1682546068715-386bd3c676e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide heroSectionContainer"
        data-bs-ride="carousel"
        data-bs-interval="7000"
        data-bs-pause="false"
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
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                height: "80vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center h-100">
                <h1 className="text-white  fw-bold">{slide.title}</h1>
                <h2 className=" fw-bold">{slide.subtitle}</h2>
                <p className="text-white">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="btn btn-success m-4 btn-lg"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="container my-5">
        <div className="ourMission p-4">
          <div className="row">
            <div className="col-md-8">
              <p className=" headingText-OM">Our Mission</p>
              <p className="contentText-OM">
                We strive to bring mind, body and spirit together in balance,
                creating a stronger, more powerful you. We strive to bring mind,
                body and spirit together in balance, creating a stronger, more
                powerful you.
              </p>
            </div>
            <div className="col-md-4">
              <img
                className="ourMissionImg"
                src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=bFjnv2f_Fe0FRY457r4pEN3OQHZcfNzzkCOTXDmaCwQ="
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="ourVision my-4 p-4">
          <div className="row">
            <div className="col-md-4">
              <img
                className="ourMissionImg"
                src="https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=bFjnv2f_Fe0FRY457r4pEN3OQHZcfNzzkCOTXDmaCwQ="
                alt=""
              />
            </div>
            <div className="col-md-8">
              <p className=" headingText-OV">Our Vision</p>
              <p className="contentText-OV">
                We envision an environment that allows everyone access to
                comprehensive, culturally sensitive mental health services to
                navigate life’s challenges, enabling them to live empowered and
                fulfilling lives unfettered by self-limiting beliefs.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="section">
        <h1 className="section-title">What Sets Us Apart</h1>
        <p className="section-description my-4">
          At Synergy Mental Health Consulting, we go beyond traditional
          counseling to provide a truly transformative experience. Here's what
          makes us unique:
        </p>
        <div className="cards">
          <div className="card">
            <div className="icon w-100">
              <img className="w-100" src={img2} alt="" />
            </div>
            <h2>Culturally Sensitive Care</h2>
            <p>
              We understand the importance of cultural context in mental health,
              ensuring our services are inclusive and respectful of your unique
              experiences.
            </p>
          </div>
          <div className="card">
            <div className="icon w-100">
              <img className="w-100" src={img3} alt="" />
            </div>
            <h2>Holistic Approach</h2>
            <p>
              Our services integrate mind, body, and spirit, fostering total
              wellness and helping you achieve balance in every aspect of your
              life.
            </p>
          </div>
          <div className="card">
            <div className="icon w-100">
              <img className="w-100" src={img4} alt="" />
            </div>
            <h2>Experienced Professionals</h2>
            <p>
              Backed by decades of expertise, our team offers compassionate,
              personalized care tailored to your specific needs.
            </p>
          </div>
          <div className="card">
            <div className="icon w-100">
              <img className="w-100" src={img5} alt="" />
            </div>
            <h2>Empowering Community</h2>
            <p>
              We create a safe space for individuals to connect, share, and
              grow, empowering you to reach your fullest potential with the
              support of others.
            </p>
          </div>
          <div className="card">
            <div className="icon w-100">
              <img className="w-100" src={img6} alt="" />
            </div>
            <h2>Commitment to Your Growth</h2>
            <p>
              Our focus is not just on healing but on helping you rediscover
              your strength, dream bigger, and unlock a life of fulfillment.
            </p>
          </div>
          <div className="card">
            <div className="icon w-100">
              <img className="w-100" src={img7} alt="" />
            </div>
            <h2>Accessible and Affordable Care</h2>
            <p>
              We believe mental health support should be accessible to everyone.
              Our commitment to affordability ensures you receive quality care
              without compromising your financial well-being.
            </p>
          </div>
        </div>
      </div>

      <OurServices />

      <Footer />
    </>
  );
};

export default HomePage;
