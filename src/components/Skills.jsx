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
  SiFastapi
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    { id: "all", label: "All Skills"},
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools"},
  ];

  const skillsData = [
    {
      name: "React",
      icon: SiReact,
      category: "frontend",
      color: "from-cyan-400 to-blue-500",
      iconColor: "text-cyan-400",
      hoverColor: "hover:shadow-cyan-500/50",
      level: 90,
      description: "Component architecture & state management",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "frontend",
      color: "from-white to-gray-400",
      iconColor: "text-white",
      hoverColor: "hover:shadow-white/50",
      level: 85,
      description: "SSR, SSG & API routes",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "frontend",
      color: "from-yellow-400 to-yellow-600",
      iconColor: "text-yellow-400",
      hoverColor: "hover:shadow-yellow-500/50",
      level: 92,
      description: "ES6+ & asynchronous programming",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "frontend",
      color: "from-blue-500 to-blue-700",
      iconColor: "text-blue-500",
      hoverColor: "hover:shadow-blue-500/50",
      level: 82,
      description: "Type-safe development & interfaces",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      category: "frontend",
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
      hoverColor: "hover:shadow-orange-500/50",
      level: 95,
      description: "Semantic markup & accessibility",
    },
    {
      name: "Tailwind",
      icon: SiTailwindcss,
      category: "frontend",
      color: "from-cyan-400 to-teal-500",
      iconColor: "text-cyan-400",
      hoverColor: "hover:shadow-cyan-500/50",
      level: 93,
      description: "Utility-first responsive design",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      category: "backend",
      color: "from-green-500 to-lime-600",
      iconColor: "text-green-500",
      hoverColor: "hover:shadow-green-500/50",
      level: 78,
      description: "RESTful APIs & server architecture",
    },
    {
      name: "Python",
      icon: SiPython,
      category: "backend",
      color: "from-blue-400 to-yellow-500",
      iconColor: "text-blue-400",
      hoverColor: "hover:shadow-blue-500/50",
      level: 85,
      description: "Scripting & data processing",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      category: "backend",
      color: "from-emerald-400 to-teal-500",
      iconColor: "text-emerald-400",
      hoverColor: "hover:shadow-emerald-500/50",
      level: 80,
      description: "Database & authentication",
    },
    {
      name: "Git",
      icon: SiGit,
      category: "tools",
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-500",
      hoverColor: "hover:shadow-orange-500/50",
      level: 85,
      description: "Version control & collaboration",
    },
    {
      name: "FastAPI",
      icon: SiFastapi,
      category: "backend",
      color: "from-green-400 to-emerald-600",
      iconColor: "text-green-400",
      hoverColor: "hover:shadow-green-500/50",
      level: 82,
      description: "High-performance API development",
    },
    {
      name: "Vite",
      icon: SiVite,
      category: "tools",
      color: "from-purple-400 to-violet-600",
      iconColor: "text-purple-400",
      hoverColor: "hover:shadow-purple-500/50",
      level: 88,
      description: "Fast build tooling & optimization",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center p-6 md:p-10 lg:p-20 relative overflow-hidden"
    >
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-500/20 pointer-events-none" />
      
      {/* Floating Orbs */}
      {[
        { top: "10%", left: "5%", color: "bg-purple-500/20", size: "w-96 h-96", duration: 12 },
        { top: "60%", right: "10%", color: "bg-blue-500/20", size: "w-80 h-80", duration: 15 },
        { bottom: "15%", left: "15%", color: "bg-cyan-500/20", size: "w-72 h-72", duration: 10 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.size} ${orb.color}/10 rounded-full blur-3xl pointer-events-none`}
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

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-12 relative z-10"
      >
       
        <h2 className="text-5xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 mb-4 tracking-tight">
          My Skills
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Technologies & Tools I Work With
        </p>
      </motion.div>

      {/* Category Filter Tabs - Modern Glass Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-3 mb-14 relative z-10"
      >
        <div className="bg-slate-900/50 backdrop-blur-xl p-2 rounded-2xl border border-white/10 inline-flex gap-2">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/40"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>


      {/* Skills Grid - Modern Card Design */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-7xl w-full relative z-10"
      >
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.06,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group relative"
            >
                {/* Outer Glow Effect */}
                <motion.div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-70 blur transition-opacity duration-500`}
                />

                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 group-hover:border-transparent transition-all duration-500 overflow-hidden flex flex-col items-center justify-center">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="relative w-20 h-20 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-xl`}
                    />
                    <IconComponent 
                      className={`text-6xl ${skill.iconColor} relative z-10 filter drop-shadow-lg`} 
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <h3 className="text-white font-semibold text-center text-sm mt-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
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