import React from "react";
import { Row, Col, Card, Button } from "antd";
import "./ServiceCard.css";
import { useNavigate } from "react-router-dom";
const services = [
  {
    id: 1,
    title: "Individual Counseling",
    description:
      "Personalized one-on-one sessions designed to help you address anxiety, depression, stress, or trauma in a confidential and supportive environment.",
    image:
      "https://dy7glz37jgl0b.cloudfront.net/advice/images/4cc78ebfbd184ca74659371a1455905e-istock-1328878125_l.jpg",
    link: "/individual-counseling",
  },
  {
    id: 2,
    title: "Couples Counseling",
    description:
      "Strengthen your relationship with tools to improve communication, build trust, and restore emotional and physical intimacy.",
    image:
      "https://wakecounseling.com/wp-content/uploads/elementor/thumbs/marriage-couples-counseling-qswccn1ysf589iafxaa4vgnungcpn50oubuwldzuqg.jpg",
    link: "/couples-counseling",
  },
  {
    id: 3,
    title: "Group Counseling",
    description:
      "Join a supportive community to share experiences and develop strategies for overcoming life’s challenges together.",
    image:
      "https://media.istockphoto.com/id/1454585686/photo/diversity-mental-health-and-group-therapy-counseling-support-meeting-healthy-conversation-and.jpg?s=612x612&w=0&k=20&c=7-kDTlCiMLzq_MM6yhnv7mZbyB7HWxM1n_JE5EkR9ZE=",
    link: "/group-counseling",
  },
  {
    id: 4,
    title: "Telehealth Counseling",
    description:
      "Convenient and flexible therapy sessions from the comfort of your home, using secure and HIPAA-compliant platforms.",
    image:
      "https://freedomwithincenter.com/wp-content/uploads/2018/09/APA-Blog-Online-Therapy-II-1-1080x675.jpg",
    link: "/telehealth-counseling",
  },
];

const OurServices = () => {
  const navigate = useNavigate();
  const navigateToService = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    navigate("/ourservices");
  };
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
                  className="services-image"
                />
              }
              className="services-card"
            >
              <h2 className="services-title">{service.title}</h2>
              <p className="services-description">{service.description}</p>
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
        <button onClick={navigateToService} className="btn btn-success">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default OurServices;
