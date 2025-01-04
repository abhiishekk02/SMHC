import React from "react";
import { Collapse, Row, Col } from "antd";
import "./FAQ.css"; // Custom CSS file for additional styles
import FAQImg from "../../Assets/FAQ.png"; // Default import for an image file

const FAQ = () => {
  const faqData = [
    {
      key: "1",
      label: "What can I expect during my first session?",
      children:
        "Your first session is an opportunity to get to know your therapist and discuss your goals for therapy. It typically involves a review of your history and current concerns to create a tailored plan for your needs.",
    },
    {
      key: "2",
      label: "Are sessions in-person or virtual?",
      children:
        "We offer both in-person sessions at our office and virtual sessions via Google Meets to accommodate your preferences and schedule.",
    },
    {
      key: "3",
      label: "How do I schedule an appointment?",
      children:
        "You can schedule an appointment by calling our office, visiting our website, or emailing us. Our team will assist you in finding a time that works best for you.",
    },
    {
      key: "4",
      label: "Do you accept insurance?",
      children:
        "Yes, we accept several major insurance plans. Please contact us to confirm if your plan is covered. For out-of-network plans, we provide superbills for reimbursement.",
    },
    {
      key: "5",
      label: "What if I can’t afford therapy?",
      children:
        "We offer a limited number of sliding-scale slots for clients based on financial need. Contact us to discuss your situation, and we will do our best to work with you.",
    },
    {
      key: "6",
      label: "What forms of payment do you accept?",
      children:
        "We accept credit/debit cards, HSA/FSA cards, and electronic payments through our secure client portal.",
    },
    {
      key: "7",
      label: "What is your cancellation policy?",
      children:
        "We require at least 24 hours' notice for cancellations. Late cancellations or no-shows may incur a fee.",
    },
    {
      key: "8",
      label: "How often should I come to therapy?",
      children:
        "The frequency of sessions is based on your needs and goals. Many clients start with weekly sessions and adjust as progress is made.",
    },
    {
      key: "9",
      label: "Can I change therapists if I don’t feel it’s a good fit?",
      children:
        "Absolutely. It’s important to feel comfortable with your therapist. Let us know if you’d like to explore other options.",
    },
  ];

  return (
    <div className="faq-container" style={{ padding: "40px 20px" }}>
      <h2
        className="faq-title"
        style={{ textAlign: "center", marginBottom: "30px" }}
      >
        Frequently Asked Questions
      </h2>
      <Row gutter={[16, 16]} align="middle">
        {/* Left Column: Image */}
        <Col xs={24} md={10} style={{ textAlign: "center" }}>
          <img
            src={FAQImg}
            alt="FAQ Illustration"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          />
        </Col>
        {/* Right Column: FAQ Questions */}
        <Col xs={24} md={14}>
          <Collapse accordion items={faqData} />
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;
