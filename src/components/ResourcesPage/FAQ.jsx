import React from "react";
import { Collapse, Row, Col } from "antd";
import "./FAQ.css"; // Custom CSS file for additional styles
import FAQImg from "../../Assets/FAQ.png"; // Default import for an image file
const { Panel } = Collapse;

const FAQ = () => {
  const faqData = [
    {
      question: "What can I expect during my first session?",
      answer:
        "Your first session is an opportunity to get to know your therapist and discuss your goals for therapy. It typically involves a review of your history and current concerns to create a tailored plan for your needs.",
    },
    {
      question: "Are sessions in-person or virtual?",
      answer:
        "We offer both in-person sessions at our office and virtual sessions via Google Meets to accommodate your preferences and schedule.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule an appointment by calling our office, visiting our website, or emailing us. Our team will assist you in finding a time that works best for you.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept several major insurance plans. Please contact us to confirm if your plan is covered. For out-of-network plans, we provide superbills for reimbursement.",
    },
    {
      question: "What if I can’t afford therapy?",
      answer:
        "We offer a limited number of sliding-scale slots for clients based on financial need. Contact us to discuss your situation, and we will do our best to work with you.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept credit/debit cards, HSA/FSA cards, and electronic payments through our secure client portal.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We require at least 24 hours' notice for cancellations. Late cancellations or no-shows may incur a fee.",
    },
    {
      question: "How often should I come to therapy?",
      answer:
        "The frequency of sessions is based on your needs and goals. Many clients start with weekly sessions and adjust as progress is made.",
    },
    {
      question: "Can I change therapists if I don’t feel it’s a good fit?",
      answer:
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
            src={FAQImg} // Replace with your FAQ illustration/image URL
            alt="FAQ Illustration"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          />
        </Col>
        {/* Right Column: FAQ Questions */}
        <Col xs={24} md={14}>
          <Collapse accordion>
            {faqData.map((item, index) => (
              <Panel header={item.question} key={index}>
                <p>{item.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;
