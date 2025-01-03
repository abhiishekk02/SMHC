import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // Ensure this file exists
import App from "./App"; // Ensure this file exports your main App component

// Create a root element
const container = document.getElementById("root");
const root = createRoot(container);

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
