import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StarsBackground } from './animate-ui/components/backgrounds/stars';

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const Home = () => {
  return (
    <section id="home" className="relative flex items-center justify-between min-h-screen px-40">
      <StarsBackground className="absolute inset-0" starColor="#370c3fff" speed={50}>
        {/* Left text */}
        <div className="text-left relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-2">Hi There, 👋</h1>
          <h2 className="text-5xl font-semibold text-white">
            I'm <span className="text-purple-300">Prerna Kumari Sharma</span>
          </h2>

          {/* Social icons */}
           <div className="flex space-x-6 mt-8">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition-transform"/></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="text-3xl text-blue-400 hover:scale-110 transition-transform"/></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="text-3xl text-pink-500 hover:scale-110 transition-transform"/></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin className="text-3xl text-blue-700 hover:scale-110 transition-transform"/></a>
        </div>
          {/* Explore My Projects Button */}
          <div className="mt-12">
          <a href="#projects">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:shadow-purple-500/50 hover:-translate-y-1">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <span className="relative">Explore My Projects</span>
            </button>
          </a>
        </div>
      </div>

        {/* Right image */}
        <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 relative z-10">
          <img src="/prernapic.png" alt="Prerna" className="w-full h-full object-cover" />
        </div>
      </StarsBackground>
    </section>
  );
};

export default Home;
