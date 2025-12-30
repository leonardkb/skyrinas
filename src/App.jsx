// ...existing code...
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx"; // renamed import
import AboutPage from "./Pages/AboutPage.jsx";
import ServicePage from "./Pages/ServicePage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* changed from /home */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} /> {/* added wildcard route */}
      </Routes>
    </Router>
  );
}
