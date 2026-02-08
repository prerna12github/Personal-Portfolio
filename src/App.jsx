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
    <div className="scroll-smooth">
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
        <Navbar />

        {/* 🏠 Home Section */}
        <section id="home" className="flex items-center h-screen px-40 gap-x-50">
          {/* Left Side */}
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-3">Hi There, 👋</h1>
            <h2 className="text-5xl font-semibold text-blue-800">
              I'm <span className="text-blue-800">Prerna Kumari Sharma</span>
            </h2>

            {/* Typewriter Effect */}
            <div className="text-3xl text-gray-800 font-medium flex items-center h-12">
              <span className="mr-2">I am Into</span>
              <span className="text-purple-700 ml-2">
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
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="text-3xl text-blue-400 hover:scale-110 transition-transform" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="text-3xl text-pink-500 hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-3xl text-blue-700 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-1/3 flex justify-center">
            <div className="w-95 h-95 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
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
