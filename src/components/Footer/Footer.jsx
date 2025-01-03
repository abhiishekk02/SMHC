import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid footerContainer">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 footerSection">
            <h5>About Us</h5>
            <p>
              Synergy Mental Health Center (SMHC) provides comprehensive mental
              health services tailored to meet the unique needs of our clients.
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

          {/* Social Media Section */}
        </div>

        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} SMHC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
