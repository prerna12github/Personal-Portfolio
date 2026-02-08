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
      className="bg-gradient-to-br from-blue-50 to-purple-100 py-20 px-8 text-center scroll-smooth mt-20"
    >
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-purple-700 mb-10">
        🎓 My <span className="text-black">Qualifications</span>
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
            className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-5xl overflow-hidden"
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
              <h3 className="text-2xl font-bold text-[#002b7f] mb-3">
                {edu.title}
              </h3>

              <p className="text-gray-700 mb-2 flex items-center gap-2">
                <FaSchool className="text-purple-600" />
                {edu.school}
              </p>

              <p className="text-green-700 font-semibold flex items-center gap-2">
                <FaCalendarAlt className="text-green-600" />
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
