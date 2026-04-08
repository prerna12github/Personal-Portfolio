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
        {[
          { top: "10%", left: "5%", color: "bg-purple-500", duration: 8 },
          { top: "60%", right: "10%", color: "bg-violet-500", duration: 10 },
          { bottom: "15%", left: "15%", color: "bg-indigo-500", duration: 12 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute w-72 h-72 ${orb.color}/10 rounded-full blur-3xl`}
            style={{ top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <FaGraduationCap className="text-6xl text-purple-400" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 mb-4 tracking-tight">
            My Qualifications
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Academic Journey & Educational Milestones
          </p>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="w-32 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full origin-center"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line with Animation */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-500/50 via-purple-500/50 to-transparent rounded-full hidden md:block origin-top"
          />

          {/* Education Cards */}
          <div className="space-y-16 md:space-y-24">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 0.4, 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 10
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full border-4 border-purple-950 z-10 hidden md:block shadow-lg shadow-purple-500/50"
                  />

                  {/* Pulse Ring Animation */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1.5, opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 0.6, 
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500/30 rounded-full hidden md:block"
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      initial={{ rotateX: -15, opacity: 0 }}
                      whileInView={{ rotateX: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.2 + 0.2, 
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                      className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                    >
                      {/* Gradient Overlay on Hover */}
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Top Border Gradient */}
                      <motion.div 
                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                      />

                      {/* Glowing Border on Hover */}
                      <motion.div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500" />

                      <div className="relative p-6 md:p-8">
                        {/* Icon and Status Badge */}
                        <motion.div 
                          className="flex justify-between items-start mb-6"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl flex items-center justify-center shadow-lg"
                          >
                            <Icon className="text-2xl text-purple-400" />
                          </motion.div>

                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                              delay: index * 0.2 + 0.6, 
                              duration: 0.4,
                              type: "spring",
                              stiffness: 200
                            }}
                            className={`px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm ${
                              edu.status === "Pursuing"
                                ? "bg-green-500/10 text-green-400 border border-green-500/30"
                                : "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                            }`}
                          >
                            {edu.status}
                          </motion.span>
                        </motion.div>

                        {/* Title */}
                        <motion.h3 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 0.6, ease: "easeOut" }}
                          className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-purple-300 mb-4 leading-tight"
                        >
                          {edu.title}
                        </motion.h3>

                        {/* School */}
                        <motion.p 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.6, duration: 0.6, ease: "easeOut" }}
                          className="text-gray-300 mb-4 flex items-start gap-3 leading-relaxed"
                        >
                          <FaArrowRight className="text-purple-400 mt-1 flex-shrink-0" />
                          <span>{edu.school}</span>
                        </motion.p>

                        {/* Duration */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.7, duration: 0.6, ease: "easeOut" }}
                          className="flex items-center gap-2 pt-4 border-t border-white/10"
                        >
                          <FaCalendarAlt className="text-purple-400" />
                          <span className="text-gray-400 font-medium">
                            {edu.duration}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex items-center gap-3 text-gray-500"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50" />
          <span className="text-sm">Building knowledge, shaping future</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Qualification;
