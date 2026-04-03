import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiNodedotjs,
  SiSupabase,
  SiGit,
  SiHtml5,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ];

  const skillsData = [
    {
      name: "React",
      icon: SiReact,
      category: "frontend",
      color: "from-cyan-400 to-blue-500",
      iconColor: "text-cyan-400",
      hoverColor: "hover:shadow-cyan-500/50",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "frontend",
      color: "from-white to-gray-400",
      iconColor: "text-white",
      hoverColor: "hover:shadow-white/50",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "frontend",
      color: "from-yellow-400 to-yellow-600",
      iconColor: "text-yellow-400",
      hoverColor: "hover:shadow-yellow-500/50",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      level: 82,
      category: "frontend",
      color: "from-blue-500 to-blue-700",
      iconColor: "text-blue-500",
      hoverColor: "hover:shadow-blue-500/50",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      level: 95,
      category: "frontend",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      hoverColor: "hover:shadow-orange-500/50",
    },
  
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      level: 93,
      category: "frontend",
      color: "from-cyan-400 to-teal-500",
      iconColor: "text-cyan-400",
      hoverColor: "hover:shadow-cyan-500/50",
    },
   
    {
      name: "Node.js",
      icon: SiNodedotjs,
      level: 78,
      category: "backend",
      color: "from-green-500 to-lime-600",
      iconColor: "text-green-500",
      hoverColor: "hover:shadow-green-500/50",
    },
    {
      name: "Python",
      icon: SiPython,
      level: 85,
      category: "backend",
      color: "from-blue-400 to-yellow-500",
      iconColor: "text-blue-400",
      hoverColor: "hover:shadow-blue-500/50",
    },
   
  
    {
      name: "Supabase",
      icon: SiSupabase,
      level: 80,
      category: "backend",
      color: "from-emerald-400 to-teal-500",
      iconColor: "text-emerald-400",
      hoverColor: "hover:shadow-emerald-500/50",
    },
   
    {
      name: "Git",
      icon: SiGit,
      level: 85,
      category: "tools",
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-500",
      hoverColor: "hover:shadow-orange-500/50",
    },
    {
      name: "Vite",
      icon: SiVite,
      level: 88,
      category: "tools",
      color: "from-purple-400 to-violet-600",
      iconColor: "text-purple-400",
      hoverColor: "hover:shadow-purple-500/50",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center p-10 relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-transparent to-indigo-950/30 pointer-events-none" />
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 mb-4 relative z-10"
      >
        💡 My Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 text-lg mb-10 relative z-10"
      >
        Technologies & Tools I Work With
      </motion.p>

      {/* Category Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-12 relative z-10"
      >
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/40 scale-105"
                : "bg-slate-800/60 text-gray-400 hover:bg-slate-700/80 hover:text-white border border-white/10"
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl w-full relative z-10"
      >
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={skillCardVariants}
              whileHover="hover"
              custom={index}
              className="group relative"
            >
              {/* Glowing Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative bg-slate-800/70 backdrop-blur-sm border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:border-transparent transition-all duration-300 cursor-pointer">
                {/* Icon */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <IconComponent className={`text-6xl ${skill.iconColor} filter drop-shadow-lg`} />
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-white font-semibold text-center text-sm md:text-base">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;
