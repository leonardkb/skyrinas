// ...existing code...
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx"; // renamed import
import AboutPage from "./Pages/AboutPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* changed from /home */}
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
