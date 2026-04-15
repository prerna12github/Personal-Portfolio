import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Typewriter from "typewriter-effect";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { StarsBackground } from "./components/animate-ui/components/backgrounds/stars";
import { SmoothCursor } from "@/components/ui/smooth-cursor"

const App = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-smooth bg-slate-950">
      <StarsBackground className="min-h-screen" speed={50} starColor="#a78bfa">
        <SmoothCursor />
        <Navbar />

        {/* 🏠 Home Section */}
        <section id="home" className="flex items-center h-screen px-4 md:px-20 lg:px-40 gap-x-10 lg:gap-x-20">
          {/* Left Side */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 mb-3 animate-fadeInUp">Hi There, 👋</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Prerna Kumari Sharma</span>
            </h2>

            {/* Typewriter Effect */}
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium flex items-center h-12 mt-4">
              <span className="mr-2">I am Into</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 ml-2">
                <Typewriter
                  options={{
                    strings: [
                      "Fronted Development",
                      "Backend Development",
                      "Machine Learning",
                      "Deep Learning",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 justify-start mt-8">
              <a href="https://www.facebook.com/prernakumari.sharma.1/" target="_blank" rel="noreferrer" className="group">
                <FaFacebook className="text-3xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://github.com/prerna12github" target="_blank" rel="noreferrer" className="group">
                <FaGithub className="text-3xl text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/___prernaaaa__/?hl=en" target="_blank" rel="noreferrer" className="group">
                <FaInstagram className="text-3xl text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/prerna-kumari-sharma-4304b8253/" target="_blank" rel="noreferrer" className="group">
                <FaLinkedin className="text-3xl text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>

            <br>
            </br>
            <br>
            </br>
 <button
  onClick={scrollToProjects}
  className="group relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-full p-[1px] focus:outline-none hover:shadow-xl hover:shadow-purple-500/50"
>
  {/* Spinning gradient border — now glowy */}
  <span
    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#7c3aed_0%,#a78bfa_50%,#4f46e5_100%)] blur-[1px]"
  />

  {/* Inner button content */}
  <span
    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-3"
  >
    Explore My Projects
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  </span>
</button>

          </div>

          {/* Right Side Image */}
          <div className="hidden md:flex w-1/3 justify-center">
            <div className="w-95 h-95 lg:w-95 lg:h-95 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-purple-500/30 animate-float">
              <img
                src="/prernapic.png"
                alt="Prerna Kumari Sharma"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 📘 About Section */}
        <About />

        {/* 🎓 Qualification Section */}
        <Qualification />

        {/* 💡 Skills Section */}
        <Skills />

        {/* 📚 Projects Section */}
        <Projects />

        {/* ✉️ Contact Section */}
        <Contact />

        {/* 🔻 Footer — at the bottom of everything */}
        <Footer />
      </StarsBackground>
    </div>
  );
};

export default App;