import React, { useState } from "react";
import AnimatedButton from "./Animatedbutton";

const About = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 p-10"
    >
      <h1 className="text-5xl font-bold text-purple-800 mb-6">About Me</h1>
<button
  onClick={() => setShowInfo(!showInfo)}
  className="relative px-8 py-3 font-semibold text-white rounded-lg
             bg-purple-600 shadow-[0_0_15px_4px_rgba(168,85,247,0.6)]
             transition-all duration-300
             hover:shadow-[0_0_30px_10px_rgba(168,85,247,0.8)]
             hover:bg-purple-700
             animate-[pulseGlow_2s_ease-in-out_infinite]"
>
  {showInfo ? "Hide Info" : "Click to Know About Me"}

  <style>{`
    @keyframes pulseGlow {
      0%, 100% {
        box-shadow: 0 0 15px 4px rgba(168,85,247,0.6);
      }
      50% {
        box-shadow: 0 0 25px 8px rgba(168,85,247,0.9);
      }
    }
  `}</style>
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
        <div className="w-56 h-56 square-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <img
            src="/prerna.jpg"
            alt="Prerna Kumari Sharma"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-gray-800 text-lg leading-relaxed">
            Hello! I’m <span className="font-semibold text-purple-800">Prerna Kumari Sharma</span>,
            a passionate developer who loves building creative and efficient web
            applications. I’m also deeply interested in{" "}
            <span className="text-blue-700 font-medium">
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
