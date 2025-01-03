import React from "react";
import { Row, Col, Card, Button } from "antd";
import "./ServiceCard.css";

const services = [
  {
    id: 1,
    title: "Individual Counseling",
    description:
      "Personalized one-on-one sessions designed to help you address anxiety, depression, stress, or trauma in a confidential and supportive environment.",
    image:
      "https://img.freepik.com/free-vector/psychologist-consulting-patient-office-therapy-session-cartoon-illustration_74855-15386.jpg",
    link: "/individual-counseling",
  },
  {
    id: 2,
    title: "Couples Counseling",
    description:
      "Strengthen your relationship with tools to improve communication, build trust, and restore emotional and physical intimacy.",
    image:
      "https://img.freepik.com/free-vector/happy-couple-consulting-psychologist-office-therapy-session-cartoon_74855-14682.jpg",
    link: "/couples-counseling",
  },
  {
    id: 3,
    title: "Group Counseling",
    description:
      "Join a supportive community to share experiences and develop strategies for overcoming life’s challenges together.",
    image:
      "https://img.freepik.com/free-vector/group-therapy-concept-patients-talking-about-problems-circle-psychotherapist-consulting-them-flat-vector-illustration-mental-health-treatment_74855-22779.jpg",
    link: "/group-counseling",
  },
  {
    id: 4,
    title: "Telehealth Counseling",
    description:
      "Convenient and flexible therapy sessions from the comfort of your home, using secure and HIPAA-compliant platforms.",
    image:
      "https://img.freepik.com/free-vector/online-therapy-concept-flat-illustration_74855-13993.jpg",
    link: "/telehealth-counseling",
  },
];

const OurServices = () => {
  return (
    <div className="our-services-container">
      <div className="services-header">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Explore our tailored services designed to support your mental health
          and well-being.
        </p>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {services.map((service) => (
          <Col xs={24} sm={12} md={10} key={service.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={service.title}
                  src={service.image}
                  className="service-image"
                />
              }
              className="service-card"
            >
              <h2 className="service-title">{service.title}</h2>
              <p className="service-description">{service.description}</p>
              {/* <Button
                type="primary"
                size="large"
                href={service.link}
                className="learn-more-button"
              >
                Learn More
              </Button> */}
            </Card>
          </Col>
        ))}
      </Row>
      <div className="p-4">
        <p className="my-3 h4">Want to know more about our services?</p>
        <button className="btn btn-success">Learn more</button>
      </div>
    </div>
  );
};

export default OurServices;
