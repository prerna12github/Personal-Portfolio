import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-10"
    >
       <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-6">About Me</h1>
      {/* Info section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image - Left Side */}
        <div className="w-70 h-full overflow-hidden shadow-2xl border-2  border-gray-700">
          <img
            src="/image.png"
            alt="Prerna Kumari Sharma"
            className="w-70 h-70 object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* About Text - Right Side */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I'm{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Prerna Kumari Sharma
            </span>
            , a passionate developer who loves building creative and efficient web
            applications. I'm also deeply interested in{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              Machine Learning and Deep Learning.
            </span>
            {" "}I enjoy learning new technologies and turning ideas into reality
            through code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

