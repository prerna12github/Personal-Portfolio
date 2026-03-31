import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { StarsBackground } from './animate-ui/components/backgrounds/stars';
import { PixelImage } from './ui/pixel-image';

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
        {/* Left image with pixel animation */}
        <div className="relative z-10 animate-fadeInUp">
          <PixelImage 
            src="/prernapic.png" 
            grid="6x4"
            grayscaleAnimation={true}
            pixelFadeInDuration={1000}
            maxAnimationDelay={1200}
            colorRevealDelay={1300}
          />
        </div>

        {/* Right text */}
        <div className="text-left relative z-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
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
      </div>
      </StarsBackground>
    </section>
  );
};

export default Home;
