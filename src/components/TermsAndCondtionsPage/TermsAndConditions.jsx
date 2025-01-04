import React from "react";
import { Layout, Typography, Card, Button } from "antd";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TermsAndConditions = () => (
  <Layout>
    <Content style={{ padding: "50px", background: "#f1f4e7" }}>
      <Card
        title="Terms and Conditions"
        bordered={false}
        style={{ borderRadius: "8px" }}
      >
        <Title level={4}>Effective Date: 12/21/2024</Title>
        <Paragraph>
          Welcome to the website of Synergy Mental Health Counseling, PLLC
          (“we,” “our,” or “us”). By accessing or using our website, you agree
          to comply with these Terms and Conditions. Please read them carefully
          before using the website.
        </Paragraph>

        <Title level={4}>1. Acceptance of Terms</Title>
        <Paragraph>
          By using this website, you acknowledge that you have read, understood,
          and agree to these Terms and Conditions. If you do not agree, please
          do not use the site.
        </Paragraph>

        <Title level={4}>2. Services Provided</Title>
        <Paragraph>
          Synergy Mental Health Counseling, PLLC offers mental health counseling
          services and information through this website. The content provided on
          the website is for informational purposes only and is not a substitute
          for professional medical or mental health advice, diagnosis, or
          treatment.
        </Paragraph>

        <Title level={4}>3. Use of the Site</Title>
        <Paragraph>
          <strong>Eligibility:</strong> You must be at least 18 years old to use
          this website. By using the website, you represent that you meet this
          requirement.
        </Paragraph>
        <Paragraph>
          <strong>Prohibited Activities:</strong> You agree not to:
        </Paragraph>
        <ul>
          <li>Use the site for unlawful purposes.</li>
          <li>Post or transmit harmful, false, or inappropriate content.</li>
          <li>
            Attempt to gain unauthorized access to the site or its servers.
          </li>
          <li>
            Copy, distribute, or modify the site's content without permission.
          </li>
        </ul>

        <Title level={4}>4. Appointment Requests and Communications</Title>
        <Paragraph>
          The website may allow users to request appointments or contact the
          practice. Submitting a request does not guarantee an appointment, and
          we reserve the right to decline services at our discretion.
        </Paragraph>

        <Title level={4}>5. Payment and Fees</Title>
        <Paragraph>
          If the website enables payments for services, you agree to provide
          accurate and complete payment information. All payments are subject to
          our Cancellation and No-Show Policy, as outlined separately.
        </Paragraph>

        <Title level={4}>6. Privacy Policy</Title>
        <Paragraph>
          Your use of the website is also governed by our Privacy Policy, which
          outlines how we collect, use, and protect your information. By using
          the website, you consent to the practices described in the Privacy
          Policy.
        </Paragraph>
        <Button type="link">
          <Link to="/">View Privacy Policy</Link>
        </Button>

        <Title level={4}>7. Disclaimer of Warranties</Title>
        <Paragraph>
          The website and its content are provided “as is” and without
          warranties of any kind, express or implied. We do not guarantee that
          the site will be error-free, secure, or continuously available.
        </Paragraph>

        <Title level={4}>8. Limitation of Liability</Title>
        <Paragraph>
          To the fullest extent permitted by law, Synergy Mental Health
          Counseling, PLLC shall not be liable for any damages arising from your
          use of the website, including but not limited to direct, indirect,
          incidental, punitive, or consequential damages.
        </Paragraph>

        <Title level={4}>9. Third-Party Links</Title>
        <Paragraph>
          The website may contain links to third-party websites. We are not
          responsible for the content or practices of these external sites and
          encourage you to review their terms and policies.
        </Paragraph>

        <Title level={4}>10. Modifications to the Terms</Title>
        <Paragraph>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be effective upon posting to the website. Your continued
          use of the site constitutes acceptance of the updated Terms.
        </Paragraph>

        <Title level={4}>11. Governing Law</Title>
        <Paragraph>
          These Terms and Conditions are governed by the laws of the State of
          New York. Any disputes arising from the use of the website shall be
          resolved in the courts of New York.
        </Paragraph>

        <Title level={4}>12. Contact Us</Title>
        <Paragraph>
          If you have any questions or concerns about these Terms and
          Conditions, please contact us at:
        </Paragraph>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:admin@SynergyMHC.com">admin@SynergyMHC.com</a>
          </li>
          <li>Phone: 516.303.9925</li>
          <li>
            Address: 108 S. Franklin Avenue, Suite 4 Valley Stream, NY 11580
          </li>
        </ul>
      </Card>
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Synergy Mental Health Counseling ©2024
    </Footer>
  </Layout>
);

export default TermsAndConditions;
