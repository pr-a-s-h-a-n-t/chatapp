import React from "react";
import Navigation from "./navigation/Navigations";
import Footer from "./footer/Footer";
import Hero from "./hero";

function LandingPage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Footer />
    </div>
  );
}

export default LandingPage;
