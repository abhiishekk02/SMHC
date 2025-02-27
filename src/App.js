import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/reset.css"; // Use reset.css for the latest version of Ant Design
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderSection/Header";
import Resources from "./components/ResourcesPage/Resources";
import Contact from "./components/ContactPage/Contact";
import Showcase from "./components/ShowcasePage/Showcase";
import OurServices from "./components/ServicesPage/Services";
import AboutUs from "./components/AboutPage/About";
import Home from "./components/HomePage/Home";
import ScrollToTop from "./ScrollToTop";
import PrivacyPolicy from "./components/PrivacyPolicyPage/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndCondtionsPage/TermsAndConditions";
import WelcomePopup from "./components/Popup/WelcomePopup";
// import Home from "./Components/HomePage/Home";
// import AboutUs from "./Components/AboutPage/AboutUs";
// import Resources from "./Components/ResourcesPage/Resources";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <WelcomePopup /> */}
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* <Route path="/about" element={<AboutUs />} /> */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
