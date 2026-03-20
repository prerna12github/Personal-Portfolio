import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Typewriter from "typewriter-effect";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="scroll-smooth bg-slate-950">
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
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
                      "Web Development",
                      "Machine Learning",
                      "Computer Vision",
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
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="group">
                <FaFacebook className="text-3xl text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="group">
                <FaTwitter className="text-3xl text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group">
                <FaInstagram className="text-3xl text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group">
                <FaLinkedin className="text-3xl text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="hidden md:flex w-1/3 justify-center">
            <div className="w-80 h-80 lg:w-95 lg:h-95 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 border-4 border-purple-500/30 animate-float">
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

        {/* 📚 Projects Section */}
        <Projects />

        {/* ✉️ Contact Section */}
        <Contact />

        {/* 🔻 Footer — at the bottom of everything */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
