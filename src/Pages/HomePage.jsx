import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import { GlobalPresence } from "../Components/GlobalPresence";
import { Technology } from "../Components/Technology";
import { DesignPrototyping } from "../Components/DesigningPrototyping";
import { OurClients } from "../Components/OurClients";
import { Footer } from "../Components/Footer";
import SplashScreen from "../Components/SplashScreen";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {!showSplash && (
        <div className="scroll-smooth">
          <Navbar />
          <Hero />
          <About />
          <GlobalPresence />
          <Technology />
          <DesignPrototyping />
          <OurClients />
          <Footer />
        </div>
      )}
    </>
  );
}
