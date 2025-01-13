import React, { useState, useEffect } from "react";
import { Alert } from "antd";
import "./WelcomePopup.css"; // Optional for additional styling

const WelcomeAlert = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the alert automatically after 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null; // Don't render the alert if it's no longer visible

  return (
    <div className="welcome-alert-container">
      <Alert
        message="Welcome to Synergy!"
        description="Myself Sybil."
        type="success"
        showIcon
        closable
        onClose={() => setVisible(false)} // Allow manual dismissal
      />
    </div>
  );
};

export default WelcomeAlert;
