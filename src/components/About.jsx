import React from "react";
import { motion } from "framer-motion";
import { User, Code2, Brain, Heart, Cpu } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-6 md:p-16 relative overflow-hidden scroll-smooth"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 mb-6"
        >
        </motion.div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
          About Me
        </h1>
        <div className="mt-4 h-1 w-32 mx-auto bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image - Left Side */}
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="relative w-72 h-96 md:w-96 md:h-[500px] mx-auto">
              {/* Animated border ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 p-1 animate-gradient-xy">
                <div className="w-full h-full rounded-3xl bg-gray-900/90 backdrop-blur-sm" />
              </div>
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-2 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/image.png"
                  alt="Prerna Kumari Sharma"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Floating decoration elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl opacity-60 blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-40 blur-sm"
              />
            </div>
          </motion.div>

          {/* About Text - Right Side */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                  Prerna Kumari Sharma
                </span>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl leading-relaxed text-gray-300"
              >
                A passionate developer who loves building creative and efficient web
                applications. I'm dedicated to crafting elegant solutions to complex
                problems and continuously expanding my skill set.
              </motion.p>
            </div>

            {/* Interest Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
            >
              {/* Web Development Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/20 backdrop-blur-sm group hover:border-violet-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-violet-500/20 group-hover:bg-violet-500/30 transition-colors">
                    <Code2 className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-1">Web Development</h3>
                    <p className="text-sm text-gray-400">Building modern web apps</p>
                  </div>
                </div>
              </motion.div>

              {/* AI/ML Interest Card */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm group hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                    <Brain className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-white mb-1">AI/ML</h3>
                    <p className="text-sm text-gray-400">Exploring artificial intelligence & machine learning</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Passion Statement */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-violet-500/5 to-indigo-500/5 border border-purple-500/20"
            >
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-base text-gray-300 leading-relaxed">
                  I enjoy learning new technologies and turning ideas into reality
                  through code. Every project is an opportunity to grow and create
                  something meaningful.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;