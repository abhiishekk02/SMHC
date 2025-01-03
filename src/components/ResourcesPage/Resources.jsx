import React from "react";
import { Card, Row, Col, Button } from "antd";
import FAQ from "./FAQ";
import Footer from "../Footer/Footer";

export default function Resources() {
  const ResourceCard = ({ cardImg, cardTitle, cardDesc, cardLink }) => {
    return (
      <Col xs={24} sm={12} md={8} lg={8}>
        <Card
          hoverable
          cover={
            <img
              alt={cardTitle}
              src={cardImg}
              style={{
                aspectRatio: "3/2",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
          }
          style={{
            marginBottom: "20px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "box-shadow 0.4s ease-in-out", // Smooth shadow transition
            fontFamily: "Futura, sans-serif", // Apply Futura font globally to the card
          }}
          bodyStyle={{
            fontFamily: "Futura, sans-serif", // Ensure content inside card also uses Futura
          }}
        >
          <Card.Meta
            title={
              <div
                style={{
                  whiteSpace: "normal", // Allow text to wrap
                  wordWrap: "break-word", // Break long words
                  overflow: "visible", // Ensure no clipping
                  fontSize: "16px", // Adjust font size
                  fontWeight: "bold",
                  fontFamily: "Futura, sans-serif", // Apply font to title
                }}
              >
                {cardTitle}
              </div>
            }
            description={cardDesc}
          />
          <div style={{ marginTop: "10px" }}>
            <Button
              type="primary"
              href={cardLink}
              block
              style={{
                backgroundColor: "#C0E863", // Set background color
                borderColor: "#C0E863", // Set border color to match
                color: "#000", // Optional: Change text color for contrast
              }}
            >
              Learn More
            </Button>
          </div>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h1 className="headline" style={{ marginBottom: "30px" }}>
          Resources
        </h1>

        {/* Emergency and Crisis Resources */}
        <h2 style={{ marginBottom: "20px" }}>Emergency and Crisis Resources</h2>
        <Row gutter={[16, 16]}>
          <ResourceCard
            cardImg="https://careplusnj.org/wp-content/uploads/2024/09/mobile-crisis-outreach-response-teams-mcort-988-suicide-and-crisis-lifeline-care-plus-nj-1500x1125.webp"
            cardTitle="National Suicide Prevention Lifeline (now 988 Suicide & Crisis Lifeline)"
            cardDesc={
              <>
                Phone: 988 <br />
                Available 24/7 for anyone in emotional distress or crisis.
              </>
            }
            cardLink="https://988lifeline.org"
          />
          <ResourceCard
            cardImg="https://yt3.googleusercontent.com/s2lgMTfDQy8A7vz-G67RYrNuVvE4IQttTvDnM7a6ckPCC99hxs8ko17KbalK-0sKKK3RS43X=s900-c-k-c0x00ffffff-no-rj"
            cardTitle="Crisis Text Line"
            cardDesc={
              <>
                Text HOME to 741741 <br />
                Free and confidential support via text, 24/7.
              </>
            }
            cardLink="https://www.crisistextline.org"
          />
          <ResourceCard
            cardImg="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/NYC_Health.svg/2560px-NYC_Health.svg.png"
            cardTitle="NYC Well"
            cardDesc={
              <>
                Phone: 1-888-692-9355 <br />
                Text: WELL to 65173 <br />
                Free and confidential mental health support for New York
                residents.
              </>
            }
            cardLink="https://nyc988.cityofnewyork.us/en/"
          />
        </Row>

        {/* Domestic Violence Resources */}
        <h2 style={{ margin: "40px 0 20px" }}>Domestic Violence Resources</h2>
        <Row gutter={[16, 16]}>
          <ResourceCard
            cardImg="https://www.thehotline.org/wp-content/themes/hotline-main/assets/images/logo-ndvh.svg"
            cardTitle="NYC Domestic Violence Hotline"
            cardDesc={
              <>
                Phone: 1-800-799-7233 <br />
                TTY: 1-800-787-3224 <br />
                Support and resources for individuals experiencing domestic
                violence.
              </>
            }
            cardLink="https://www.thehotline.org"
          />
          <ResourceCard
            cardImg="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/New_York_State_wordmark.svg/2560px-New_York_State_wordmark.svg.png"
            cardTitle="New York State Domestic and Sexual Violence Hotline"
            cardDesc={
              <>
                Phone: 1-800-942-6906 <br />
                Free, confidential support 24/7.
              </>
            }
            cardLink="https://opdv.ny.gov"
          />
          <ResourceCard
            cardImg="http://safehorizon.wpenginepowered.com/wp-content/uploads/2022/10/SafeHorizon_Purple.png"
            cardTitle="Safe Horizon"
            cardDesc={
              <>
                Phone: 1-800-621-4673 <br />
                Assistance for victims of domestic violence, sexual assault, and
                other crimes.
              </>
            }
            cardLink="https://www.safehorizon.org"
          />
        </Row>

        {/* Youth and Family Resources */}
        <h2 style={{ margin: "40px 0 20px" }}>Youth and Family Resources</h2>
        <Row gutter={[16, 16]}>
          <ResourceCard
            cardImg="https://www.childhelp.org/wp-content/uploads/2024/02/childhelp-logo-v5.webp"
            cardTitle="Childhelp National Child Abuse Hotline"
            cardDesc={
              <>
                Phone: 1-800-4-A-CHILD (1-800-422-4453) <br />
                Support for child abuse victims and concerned individuals.
              </>
            }
            cardLink="https://www.childhelp.org"
          />
          <ResourceCard
            cardImg="https://crm.careasy.org/sites/indition/15695/crm_documents/2zljbsf6mg.png"
            cardTitle="Covenant House New York"
            cardDesc={
              <>
                Phone: 1-800-388-3888 <br />
                Shelter and support for homeless and at-risk youth.
              </>
            }
            cardLink="https://www.covenanthouse.org"
          />
          <ResourceCard
            cardImg="https://static.wixstatic.com/media/7549cd_b0b13a0a430a419bb8d84f722f6ac7e9~mv2.jpeg/v1/crop/x_27,y_199,w_747,h_191/fill/w_812,h_200,al_c,lg_1,q_80,enc_avif,quality_auto/OCFS-post.jpeg"
            cardTitle="Parent Helpline (NYS Office of Children and Family Services)"
            cardDesc={
              <>
                Phone: 1-800-CHILDREN (1-800-244-5373) <br />
                Resources for parents and families.
              </>
            }
          />
        </Row>

        {/* Substance Use and Addiction Resources */}
        <h2 style={{ margin: "40px 0 20px" }}>
          Substance Use and Addiction Resources
        </h2>
        <Row gutter={[16, 16]}>
          <ResourceCard
            cardImg="https://www.samhsa.gov/sites/default/files/png_270_kb.png"
            cardTitle="SAMHSA’s National Helpline"
            cardDesc={
              <>
                Phone: 1-800-662-HELP (1-800-662-4357) <br />
                Free and confidential treatment referrals for substance use
                disorders.
              </>
            }
            cardLink="https://www.samhsa.gov"
          />
          <ResourceCard
            cardImg="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/NYC_Logo_Wolff_Olins.svg/2560px-NYC_Logo_Wolff_Olins.svg.png"
            cardTitle="NYC Department of Health: Alcohol and Drug Use Services"
            cardDesc={
              <>
                Phone: 1-888-NYC-WELL (1-888-692-9355) <br />
                Assistance for substance use recovery.
              </>
            }
            cardLink="https://www1.nyc.gov"
          />
        </Row>

        {/* Mental Health Advocacy and Legal Support */}
        <h2 style={{ margin: "40px 0 20px" }}>
          Mental Health Advocacy and Legal Support
        </h2>
        <Row gutter={[16, 16]}>
          <ResourceCard
            cardImg="https://my.nami.org/NAMI/media/NAMI-Media/Images/Logos/JPGLogos/nami-logo-blue.jpg"
            cardTitle="NAMI NYC (National Alliance on Mental Illness)"
            cardDesc={
              <>
                Phone: 1-212-684-3264 <br />
                Support groups, education, and advocacy for mental health.
              </>
            }
            cardLink="https://www.naminycmetro.org"
          />
          <ResourceCard
            cardImg="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/The_Legal_Aid_Society_logo.svg/1200px-The_Legal_Aid_Society_logo.svg.png"
            cardTitle="Legal Aid Society"
            cardDesc={
              <>
                Phone: 1-212-577-3300 <br />
                Legal support for low-income individuals, including those facing
                mental health issues.
              </>
            }
            cardLink="https://www.legalaidnyc.org"
          />
        </Row>

        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
