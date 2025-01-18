import React, { useState } from "react";
import { Button, Row, Col, Spin } from "antd";
import "./Contact.css";

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);

  return (
    <div className="contact-container">
      {/* Title Section */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’re here to help and would love to hear from you! Reach out to us
          with your inquiries or visit us in person.
        </p>
      </div>

      {/* Three Columns for Contact Details */}
      <Row gutter={[32, 32]} className="contact-details">
        {/* Contact Information */}
        <Col xs={24} md={8}>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Address:</strong> <br />
              108 S. Franklin Avenue, Suite 4 <br />
              Valley Stream, NY 11580
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:5163039925">516.303.9925</a>
            </p>
            <p>
              <strong>Fax:</strong> <a href="fax:5163039920">516.303.9920</a>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:admin@SynergyMHC.com">admin@SynergyMHC.com</a>
            </p>
            <Button
              className="contact-button"
              type="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeeSO-jAwfz6hhugdJsf3WR12PG8z7d9hWcUrAZWHbtPo9zXw/viewform"
              target="_blank"
            >
              Service Request Form
            </Button>
          </div>
        </Col>

        {/* Office Hours */}
        <Col xs={24} md={8}>
          <div className="office-hours">
            <h2>Office Hours</h2>
            <ul>
              <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 10:00 AM – 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </Col>

        {/* Social Media */}
        <Col xs={24} md={8}>
          <div className="social-media">
            <h2>Connect With Us</h2>
            <a
              href="https://www.psychologytoday.com/profile/261382"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://childrensvillage.org/wp-content/uploads/2021/01/psychology-today-vector-logo.png"
                alt="Psychology Today Verified"
                className="social-logo"
              />
            </a>
          </div>
        </Col>
      </Row>

      {/* Map Section with Loading Animation */}
      <Row className="map-section text-center my-4 d-flex">
        <Col xs={24}>
          <div className="map-container ">
            {isMapLoading && (
              <div className="map-placeholder">
                <Spin size="large" tip="Loading Map..." />
                <p>Map Loading</p>
              </div>
            )}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.629322642446!2d-73.70707138459862!3d40.66894177933573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27b115d30b4e7%3A0x6a5f15ef8c9d8e97!2s108%20S%20Franklin%20Ave%20%234%2C%20Valley%20Stream%2C%20NY%2011580%2C%20USA!5e0!3m2!1sen!2sus!4v1617642542698!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              onLoad={() => setIsMapLoading(false)} // Hide spinner once the map loads
            ></iframe>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
