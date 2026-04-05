import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

const Qualification = () => {
  const educationData = [
    {
      title: "Masters in Computer Application",
      school: "Kalyani Government Engineering College | KGEC",
      duration: "2025-2027",
      status: "Pursuing",
      img: "kgec.jpg",
      icon: FaGraduationCap,
    },
    {
      title: "Bachelor of Science in Computer Honors",
      school: "Kalyani Mahavidyalaya | University of Kalyani",
      duration: "2022-2025",
      status: "Completed",
      img: "clg.jpg",
      icon: FaGraduationCap,
    },
    {
      title: "Higher Secondary Education in Science",
      school: "PM Shri Kendriya Vidyalaya No. 2 Kanchrapara | CBSE",
      duration: "2009-2021",
      status: "Completed",
      img: "school.png",
      icon: SiCoursera,
    },
  ];

  return (
    <section
      id="qualification"
      className="relative min-h-screen py-20 px-6 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-3">
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 mb-4">
            My Qualifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-transparent rounded-full hidden md:block"></div>

          {/* Education Cards */}
          <div className="space-y-12 md:space-y-0">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full border-4 border-purple-950 z-10 hidden md:block"
                  ></motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden">
                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Top Border Gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                      <div className="relative p-6 md:p-8">
                        {/* Icon and Status Badge */}
                        <div className="flex justify-between items-start mb-6">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center"
                          >
                            <Icon className="text-2xl text-purple-400" />
                          </motion.div>
                          
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                              edu.status === "Pursuing"
                                ? "bg-green-500/10 text-green-400 border border-green-500/30 animate-pulse"
                                : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {edu.status}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300 mb-4 leading-tight">
                          {edu.title}
                        </h3>

                        {/* School */}
                        <p className="text-gray-300 mb-4 flex items-start gap-3 leading-relaxed">
                          <FaArrowRight className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>{edu.school}</span>
                        </p>

                        {/* Duration */}
                        <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                          <FaCalendarAlt className="text-purple-400" />
                          <span className="text-gray-400 font-medium">
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
