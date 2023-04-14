import {
  Navbar,
  HeroSection,
  AboutSection,
  ArticlesSection,
  FooterSection,
} from "../components";
import React from "react";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Food Truck</title>
      </Head>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <AboutSection />
        <ArticlesSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default HomePage;
