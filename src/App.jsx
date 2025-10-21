import React from "react";
import NavbarPortfolio from "./Components/Navbar/NavbarPortfolio";
import HeroPortfolio from "./components/Hero/HeroPortfolio";
import AboutMe from "./components/About/AboutMe";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavbarPortfolio />
      <HeroPortfolio/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
