import React, { useState } from "react";
import AnimatedButton from "./Animatedbutton";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-10"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-6">About Me</h1>
<button
  onClick={() => setShowInfo(!showInfo)}
  className="relative px-8 py-3 font-semibold text-white rounded-lg
             bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_20px_4px_rgba(139,92,246,0.5)]
             transition-all duration-300
             hover:shadow-[0_0_40px_10px_rgba(139,92,246,0.8)]
             hover:scale-105
             animate-pulse-slow"
>
  {showInfo ? "Hide Info" : "Click to Know About Me"}
</button>

      {/* Info section with animation */}
      <div
        className={`mt-10 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-700 ease-in-out ${
          showInfo
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Profile Image */}
        <div className="w-56 h-56 square-full overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 border-4 border-purple-500/30">
          <img
            src="/prerna.jpg"
            alt="Prerna Kumari Sharma"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold text-purple-300">Prerna Kumari Sharma</span>,
            a passionate developer who loves building creative and efficient web
            applications. I'm also deeply interested in{" "}
            <span className="text-violet-300 font-medium">
              Machine Learning and Computer Vision
            </span>
            . I enjoy learning new technologies and turning ideas into reality
            through code 🚀.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
