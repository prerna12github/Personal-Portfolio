import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaCalendarAlt } from "react-icons/fa";

const Qualification = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Computer Honors",
      school: "Kalyani Mahavidyalaya | University of Kalyani",
      duration: "2022-2025 | Completed",
      img: "clg.jpg",
    },
    {
      title: "Higher Secondary Education in Science",
      school: "PM Shri Kendriya Vidyalaya No. 2 Kanchrapara | CBSE",
      duration: "2009-2021 | Completed",
      img: "school.png",
    },
  ];

  return (
    <section
      id="qualification"
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-purple-950/20"
    >
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400 mb-10">
        🎓 My <span className="text-white">Qualifications</span>
      </h2>

      {/* Education Cards */}
      <div className="flex flex-col items-center space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col md:flex-row bg-slate-800/50 border border-white/10 rounded-2xl shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 w-full max-w-5xl overflow-hidden backdrop-blur-sm"
          >
            {/* Left Image */}
            <div className="overflow-hidden md:w-72 w-full">
              <img
                src={edu.img}
                alt={edu.title}
                className="object-cover w-full h-56 md:h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center items-start p-6 text-left">
              <h3 className="text-2xl font-bold text-violet-300 mb-3">
                {edu.title}
              </h3>

              <p className="text-gray-300 mb-2 flex items-center gap-2">
                <FaSchool className="text-purple-400" />
                {edu.school}
              </p>

              <p className="text-green-400 font-semibold flex items-center gap-2">
                <FaCalendarAlt className="text-green-500" />
                {edu.duration}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
