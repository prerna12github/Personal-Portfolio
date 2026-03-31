import React, { useState } from "react";
import AnimatedButton from "./Animatedbutton";
import { PixelImage } from "@/components/ui/pixel-image"

const About = () => {

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-purple-950/20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-6">About Me</h1>

      {/* Info section with animation */}
      <div
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-700 ease-in-out opacity-100 translate-y-0 opacity-0 translate-y-10 pointer-events-none"
      >
        {/* Profile Image - Left Side */}
        {/* <div className="w-56 h-56 square-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-purple-500/30"> */}
        <div className="flex-shrink-2">
          <PixelImage src="/image.png" grid="6x4" />
        </div>

        {/* About Text - Right Side */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold text-purple-300">Prerna Kumari Sharma</span>,
            a passionate developer who loves building creative and efficient web
            applications. I'm also deeply interested in{" "}
            <span className="text-violet-300 font-medium">
              Machine Learning and Deep learning.
            </span>
             I enjoy learning new technologies and turning ideas into reality
            through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
