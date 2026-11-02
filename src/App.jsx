import React from "react";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Exploring from "./components/Exploring";
import Skills from "./components/Skills";
import Education from "./components/Education";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen text-[#242424] relative selection:bg-[#b11f4b]/12 selection:text-[#242424]">
      {/* Tanuja's Custom Flower Cursor (Desktop only, physics tilt, scale on hover, click burst) */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Flow */}
      <main id="main">
        {/* 1. Hero & Discipline Strip */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Featured Projects */}
        <Projects />

        {/* 4. What I'm Exploring Right Now */}
        <Exploring />

        {/* 5. Skills & Technologies */}
        <Skills />

        {/* 6. Education & Honors */}
        <Education />

        {/* 7. Official Resume */}
        <ResumeSection />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
