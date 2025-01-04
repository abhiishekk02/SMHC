import React from "react";
import { Layout, Typography, Card } from "antd";
import Footer from "../Footer/Footer";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const PrivacyPolicy = () => (
  <Layout>
    <Content style={{ padding: "2em", background: "#f1f4e7" }}>
      <Card
        title="Privacy Policy"
        bordered={false}
        style={{ borderRadius: "8px" }}
      >
        <Title level={4}>Effective Date: 12/21/2024</Title>
        <Paragraph>
          Synergy Mental Health Counseling PLLC (“we”) values your privacy and
          is committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your information
          when you visit our website.
        </Paragraph>

        <Title level={4}>1. Information We Collect</Title>
        <Paragraph>
          We may collect the following types of information when you interact
          with our website:
        </Paragraph>
        <Paragraph>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and other contact details provided through forms (e.g.,
          contact forms or appointment requests).
        </Paragraph>
        <Paragraph>
          <strong>Non-Personal Information:</strong> Browser type, IP address,
          device information, and website usage data collected through cookies
          and analytics tools.
        </Paragraph>
        <Paragraph>
          <strong>Protected Health Information (PHI):</strong> If you share
          sensitive information related to your mental health or treatment, it
          is handled in compliance with HIPAA regulations.
        </Paragraph>

        <Title level={4}>2. How We Use Your Information</Title>
        <Paragraph>
          We use your information for the following purposes:
        </Paragraph>
        <ul>
          <li>
            To respond to inquiries or requests submitted through the Site.
          </li>
          <li>To provide mental health services or schedule appointments.</li>
          <li>To process payments and issue invoices.</li>
          <li>To improve our website and tailor user experiences.</li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>

        <Title level={4}>3. Sharing Your Information</Title>
        <Paragraph>
          We do not sell or rent your personal information to third parties.
          However, we may share your information in the following cases:
        </Paragraph>
        <ul>
          <li>
            <strong>With Service Providers:</strong> To assist in delivering
            services, such as payment processing or website hosting.
          </li>
          <li>
            <strong>As Required by Law:</strong> If necessary to comply with
            legal obligations, court orders, or government requests.
          </li>
          <li>
            <strong>With Your Consent:</strong> If you explicitly authorize
            sharing for specific purposes.
          </li>
        </ul>

        <Title level={4}>4. Cookies and Tracking Technologies</Title>
        <Paragraph>
          Our website may use cookies and similar tracking technologies to
          enhance your browsing experience and collect usage data. You can
          adjust your browser settings to disable cookies; however, some
          features of the Site may not function properly.
        </Paragraph>

        <Title level={4}>5. Data Security</Title>
        <Paragraph>
          We implement administrative, technical, and physical safeguards to
          protect your personal information from unauthorized access, use, or
          disclosure. While we strive to protect your data, no method of
          transmission or storage is 100% secure.
        </Paragraph>

        <Title level={4}>6. Your Rights</Title>
        <Paragraph>You have the right to:</Paragraph>
        <ul>
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections to inaccurate or incomplete information.</li>
          <li>
            Request the deletion of your data, subject to applicable laws.
          </li>
          <li>Opt out of receiving marketing communications.</li>
        </ul>
        <Paragraph>
          To exercise these rights, please contact us at{" "}
          <a href="mailto:admin@SynergyMHC.com">admin@SynergyMHC.com</a>.
        </Paragraph>

        <Title level={4}>7. Third-Party Links</Title>
        <Paragraph>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these external
          sites. We encourage you to review their privacy policies.
        </Paragraph>

        <Title level={4}>8. HIPAA Compliance</Title>
        <Paragraph>
          As a mental health counseling practice, we comply with the Health
          Insurance Portability and Accountability Act (HIPAA). Any PHI
          collected through the Site or in person is handled in accordance with
          HIPAA regulations. For more information, please refer to our Notice of
          Privacy Practices available at our office or upon request.
        </Paragraph>

        <Title level={4}>9. Updates to This Policy</Title>
        <Paragraph>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with a revised effective date. We encourage you to
          review the Policy periodically.
        </Paragraph>

        <Title level={4}>10. Contact Us</Title>
        <Paragraph>
          If you have any questions about this Privacy Policy or your personal
          information, please contact us at:
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
    <Footer />
  </Layout>
);

export default PrivacyPolicy;
