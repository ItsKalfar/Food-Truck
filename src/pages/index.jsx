import {
  Navbar,
  HeroSection,
  AboutSection,
  ArticlesSection,
  FooterSection,
} from "../components";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <AboutSection />
        <ArticlesSection />
      </main>
      <FooterSection />
    </>
  );
};

export default HomePage;
