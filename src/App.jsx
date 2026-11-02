import React from "react";
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
    <div className="min-h-screen text-[#2B2621] relative selection:bg-[#FDE047]/50 selection:text-[#1F2937]">
      {/* Sticky / Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Featured Projects Section */}
        <Projects />

        {/* 4. What I'm Exploring Right Now Section */}
        <Exploring />

        {/* 5. Skills & Technologies Section */}
        <Skills />

        {/* 6. Education & Achievements Section */}
        <Education />

        {/* 7. Dedicated Resume Section */}
        <ResumeSection />

        {/* 8. Contact & Social Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
