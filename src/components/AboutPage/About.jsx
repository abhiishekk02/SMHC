import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>About Us</h1>
        <p>
          We strive to bring mind, body, and spirit together in balance,
          creating a stronger, more powerful you.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="values-section">
        <div className="value">
          <h2>Our Mission</h2>
          <p>
            We strive to bring mind, body, and spirit together in balance,
            creating a stronger, more powerful you.
          </p>
        </div>
        <div className="value">
          <h2>Our Vision</h2>
          <p>
            We envision an environment that allows everyone access to
            comprehensive, culturally sensitive mental health services to
            navigate life’s challenges, enabling them to live empowered and
            fulfilling lives unfettered by self-limiting beliefs.
          </p>
        </div>
        <div className="value">
          <h2>Our Promise</h2>
          <p>
            We help you dream again, tapping into your inner child to help you
            become the person you want to be.
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="founder-section">
        <div className="founder-image">
          <img
            src="https://plus.unsplash.com/premium_photo-1669137759430-3a04cd1a7cd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /* Replace with actual founder's image */
            alt="Sybil Cherisme"
          />
        </div>
        <div className="founder-details">
          <h2>The Founder</h2>
          <p>
            Sybil Cherisme is a licensed School Counselor and Mental Health
            Counselor. She has been working in the Mental Health field for close
            to thirty years, earning her Master’s degree from New York
            University in 1995 and being one of the first to receive licensure
            as a Mental Health Counselor from New York State in 2006.
          </p>
          <p>
            Prior to working as a School Counselor, Sybil Cherisme worked as a
            psychotherapist within the foster care system in the therapeutic
            department, serving some of the most traumatized children.
          </p>
          <button className="read-more-button">Read More</button>
        </div>
      </div>

      {/* Closing Section */}
      <div className="closing-section">
        <h2>Let’s Build a Better You</h2>
        <p>
          Start your journey with us today. Together, we can help you achieve a
          balanced and fulfilling life.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
