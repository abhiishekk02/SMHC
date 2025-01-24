import { useEffect, useState } from "react";
import "./Services.css";
import ServiceImg5 from "../../Assets/ServicesImg5.png";
import Footer from "../Footer/Footer";
export default function Services() {
  const treatments = [
    "Anxiety",
    "Depression",
    "Relationship conflicts",
    "ADHD/ADD",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % treatments.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [treatments.length]);
  return (
    <>
      <div className="container service-container">
        <p className="headline h1 my-4 text-center">Our Services</p>
        <div className="services-grid">
          {/* Individual Counseling */}
          <div className="service-card">
            <img
              src="https://dy7glz37jgl0b.cloudfront.net/advice/images/4cc78ebfbd184ca74659371a1455905e-istock-1328878125_l.jpg"
              alt="Individual Counseling"
              className="service-img"
            />
            <h3 className="service-title">Individual Counseling</h3>
            <ul className="service-benefits">
              <li>
                <strong>One-on-One Support:</strong> A personalized therapeutic
                process.
              </li>
              <li>
                <strong>Tailored to Your Needs:</strong> Address unique
                challenges and goals.
              </li>
              <li>
                <strong>Confidential Space:</strong> Safe environment to explore
                thoughts.
              </li>
            </ul>
          </div>

          {/* Telehealth Counseling */}
          <div className="service-card">
            <img
              src="https://freedomwithincenter.com/wp-content/uploads/2018/09/APA-Blog-Online-Therapy-II-1-1080x675.jpg"
              alt="Telehealth Counseling"
              className="service-img"
            />
            <h3 className="service-title">Telehealth Counseling</h3>
            <ul className="service-benefits">
              <li>
                <strong>Convenience:</strong> Access therapy from home.
              </li>
              <li>
                <strong>Secure:</strong> HIPAA-compliant video platforms.
              </li>
              <li>
                <strong>Licensed Therapists:</strong> Personalized sessions
                tailored to your needs.
              </li>
            </ul>
          </div>

          {/* Couples Counseling */}
          <div className="service-card">
            <img
              src="https://wakecounseling.com/wp-content/uploads/elementor/thumbs/marriage-couples-counseling-qswccn1ysf589iafxaa4vgnungcpn50oubuwldzuqg.jpg"
              alt="Couples Counseling"
              className="service-img"
            />
            <h3 className="service-title">Couples Counseling</h3>
            <ul className="service-benefits">
              <li>
                <strong>Supportive Space:</strong> Work on your relationship.
              </li>
              <li>
                <strong>Improved Communication:</strong> Learn to express and
                listen effectively.
              </li>
              <li>
                <strong>Building Trust:</strong> Rebuild and strengthen trust.
              </li>
            </ul>
          </div>

          {/* Group Counseling */}
          <div className="service-card">
            <img
              src="https://media.istockphoto.com/id/1454585686/photo/diversity-mental-health-and-group-therapy-counseling-support-meeting-healthy-conversation-and.jpg?s=612x612&w=0&k=20&c=7-kDTlCiMLzq_MM6yhnv7mZbyB7HWxM1n_JE5EkR9ZE="
              alt="Group Counseling"
              className="service-img"
            />
            <h3 className="service-title">Group Counseling</h3>
            <ul className="service-benefits">
              <li>
                <strong>Peer Support:</strong> Share experiences with others.
              </li>
              <li>
                <strong>Diverse Perspectives:</strong> Learn from unique
                viewpoints.
              </li>
              <li>
                <strong>Skill Development:</strong> Build stress management and
                communication skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Additional Section */}
      <div className="row p-0 m-0 treatmentSectionMain d-flex align-items-center mt-5 text-center fade-in">
        <div className="col-md-6 p-0 m-0">
          <div className="treatmentSection">
            <div className="treatmentScroller">
              <p className="h2 text-secondary my-3 text-light">
                What do we treat?
              </p>
              <p className="treatmentItem ">{treatments[currentIndex]}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0 m-0">
          <img src={ServiceImg5} className="w-75 p-4 " alt="" />
        </div>
      </div>
      <div className="container">
        <div className="therapeuticApproach mt-5">
          <h2 className="headline h2">Out Therapeutic Approach</h2>
          <p className="description">
            Our practice incorporates a variety of evidence-based therapeutic
            methodologies tailored to meet each client's unique needs and goals.
            These may include:
          </p>
          <ul className="approachList">
            <li>
              <strong>Cognitive Behavioral Therapy (CBT):</strong> A structured,
              goal-oriented approach that helps you identify and change negative
              thought patterns and behaviors.
            </li>
            <li>
              <strong>Attachment-Based Therapy:</strong> Focused on
              understanding how early attachment experiences influence current
              relationships and emotional health.
            </li>
            <li>
              <strong>Trauma-Informed Care:</strong> Providing a safe and
              supportive environment to address and heal from past trauma.
            </li>
            <li>
              <strong>Emotionally Focused Therapy (EFT):</strong> A method that
              helps individuals and couples identify and process emotions to
              improve communication and connection.
            </li>
            <li>
              <strong>Christian Counseling (Optional):</strong> For clients who
              desire a faith-based approach, we integrate Christian principles
              into the therapeutic process.
            </li>
            <li>
              <strong>Mindfulness and Stress-Reduction Techniques:</strong> To
              build awareness and foster emotional regulation in daily life.
            </li>
            <li>We are a DBT-informed practice.</li>
          </ul>
        </div>

        {/* Menu of Services Section */}
        <div className="row">
          <div className="col-md-6">
            <div className="servicesFees mt-5">
              <h2 className="headline h2">Menu of Services & Fees</h2>
              <ul className="feesList">
                <li>Individual Counseling ($100 - $225)</li>
                <li>Couples Counseling ($150 - $250)</li>
                <li>Family Counseling ($175+)</li>
                <li>
                  Group Counseling* ($65 - $85)
                  <br />
                  <small>
                    *Group counseling will only be offered if the minimum number
                    of required participants is met.
                  </small>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="insurance mt-5">
              <h2 className="headline h2">Insurance</h2>
              <ul className="insuranceList">
                <li>Aetna</li>
                <li>1199</li>
                <li>Carleton Health</li>
                <ul>
                  <li>Emblem Health GHI</li>
                  <li>Emblem Health HIP</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
