import "./Footer.css";
import Logo from "../../Assets/Logo3.png";
import { Link } from "react-router-dom"; // For routing links

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };
  return (
    <footer className="footer">
      <div className="container-fluid footerContainer">
        <div className="row justify-content-center">
          {/* Logo Section */}
          <div className="col-md-4 d-flex justify-content-center align-items-center text-center">
            <img className="w-75" src={Logo} alt="Logo" />
          </div>

          {/* About Section */}
          <div className="col-md-4 footerSection">
            <h5>About Us</h5>
            <p>
              Synergy Mental Health Counseling (SMHC) provides comprehensive
              mental health services tailored to meet the unique needs of our
              clients.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 footerSection">
            <h5>Contact</h5>
            <ul className="footerList">
              <li>Phone: 516.303.9925</li>
              <li>Fax: 516.303.9920</li>
              <li>Email: admin@SynergyMHC.com</li>
              <li>
                Address: 108 S. Franklin Avenue, Suite 4, Valley Stream, NY
                11580
              </li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <ul className="footerLinks">
              <li>
                <Link
                  onClick={scrollToTop}
                  to="/privacypolicy"
                  className="footerLink"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/terms" className="footerLink">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom text-center mt-3">
          <p>&copy; {new Date().getFullYear()} SMHC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
