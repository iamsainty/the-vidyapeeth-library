import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Testonomials from "./Testonomials";
import Faq from "./Faq";
import Timing from "./Timing";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Features />
      <Timing />
      <Pricing />
      <Testonomials />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
