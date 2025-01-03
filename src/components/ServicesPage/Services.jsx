import { useEffect, useState } from "react";
import "./Services.css";
import ServiceImg5 from "../../Assets/ServicesImg5.png";
import Footer from "../Footer/Footer";
export default function Services() {
  const treatments = [
    "Anxiety",
    "Depression",
    "Relationship conflict",
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
      <div className="container">
        <p className="headline h1 my-4">Services</p>
        <div className="row serviceRow">
          {/* Individual Counseling */}
          <div className="col-md-3 serviceCard">
            <p className="serviceTitle h3 my-2">Individual Counseling</p>
            <img
              src="https://img.freepik.com/free-vector/man-talking-therapist-her-office-patient-sitting-armchair-speaking-while-positive-doctor-taking-notes-vector-illustration-psychological-counseling-psychotherapy-concept_74855-13153.jpg?semt=ais_hybrid"
              alt="Individual Counseling"
              className="serviceImg"
            />
            <h4>Benefits of Individual Counseling</h4>
            <ul>
              <li>
                <strong>One-on-One Support:</strong> Individual counseling is a
                personalized therapeutic process between you and a licensed
                therapist.
              </li>
              <li>
                <strong>Tailored to Your Needs:</strong> The sessions are
                customized to address your unique challenges, goals, and
                circumstances.
              </li>
              <li>
                <strong>Confidential Space:</strong> Provides a safe and private
                environment to openly explore your thoughts, emotions, and
                behaviors.
              </li>
            </ul>
          </div>

          {/* Telehealth Counseling */}
          <div className="col-md-3 serviceCard">
            <p className="serviceTitle h3 my-2">Telehealth Counseling</p>
            <img
              className="serviceImg"
              alt="Telehealth Counseling"
              src="https://static.vecteezy.com/system/resources/previews/002/779/420/non_2x/online-therapy-and-counselling-under-stress-and-depression-young-woman-psychotherapist-supports-female-with-psychological-problems-illustration-vector.jpg"
            />
            <h4>Benefits of Telehealth Counseling</h4>
            <ul>
              <li>
                <strong>Convenience and Flexibility:</strong> Telehealth
                counseling allows you to access therapy from the comfort of your
                home.
              </li>
              <li>
                <strong>Secure and Private:</strong> Uses secure,
                HIPAA-compliant video platforms to protect your privacy.
              </li>
              <li>
                <strong>Access to Licensed Therapists:</strong> Connect with a
                qualified therapist for personalized sessions tailored to your
                needs.
              </li>
            </ul>
          </div>

          {/* Couples Counseling */}
          <div className="col-md-3 serviceCard">
            <p className="serviceTitle h3 my-2">Couples Counseling</p>
            <img
              className="serviceImg"
              alt="Couples Counseling"
              src="https://media.istockphoto.com/id/1414940766/vector/pregnant-woman-and-her-husband-visit-gynecologist-in-the-medical-office-female-doctor-talks.jpg?s=612x612&w=0&k=20&c=nSlCyaPN5vJ_k2s-OV1o5-2YQzgH9gnghU0577mx1NY="
            />
            <h4>Benefits of Couples Counseling</h4>
            <ul>
              <li>
                <strong>Supportive and Neutral Space:</strong> Offers a safe
                environment for partners to work on their relationship.
              </li>
              <li>
                <strong>Improved Communication:</strong> Focuses on enhancing
                how partners express themselves and listen to each other.
              </li>
              <li>
                <strong>Building Trust:</strong> Aims to rebuild and strengthen
                trust within the relationship.
              </li>
            </ul>
          </div>

          {/* Group Counseling */}
          <div className="col-md-3 serviceCard">
            <p className="serviceTitle h3 my-2">Group Counseling</p>
            <img
              className="serviceImg"
              alt="Group Counseling"
              src="https://media.istockphoto.com/id/1435832032/vector/group-psychotherapy-persons-sitting-in-circle-and-talking-people-meeting-psychotherapy.jpg?s=612x612&w=0&k=20&c=OQibuYZLqcYVYDsa3e63isb4RNX9Mtsw40MZRP6eJD8="
            />
            <h4>Benefits of Group Counseling</h4>
            <ul>
              <li>
                <strong>Peer Support:</strong> Share experiences and receive
                feedback from others who understand your journey.
              </li>
              <li>
                <strong>Diverse Perspectives:</strong> Learn from the unique
                backgrounds and viewpoints of fellow group members.
              </li>
              <li>
                <strong>Skill Development:</strong> Build practical skills for
                managing stress, improving communication, and enhancing
                relationships.
              </li>
              <br />
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
