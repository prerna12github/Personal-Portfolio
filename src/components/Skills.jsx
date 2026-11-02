import React, { useState } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiOpencv,
  SiPostman
} from "react-icons/si";
import { FaJava, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FiGlobe, FiStar } from "react-icons/fi";
import { skillsData } from "../data/portfolioData";
import { Sparkle, WashiTape, HandStar } from "./Doodles";

const iconComponentMap = {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiOpenjdk: FaJava,
  FaJava,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5: FaHtml5,
  FaHtml5,
  SiCss3: FaCss3Alt,
  FaCss3Alt,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiOpencv,
  SiPostman,
  Globe: FiGlobe
};

const categoryBadgeStyles = {
  yellow: "bg-[#FEFCE8] text-[#854D0E] border-[#FEF08A]",
  pink: "bg-[#FDF2F8] text-[#9D174D] border-[#FBCFE8]",
  blue: "bg-[#F0F9FF] text-[#0369A1] border-[#BAE6FD]",
  peach: "bg-[#FFF7ED] text-[#9A3412] border-[#FED7AA]",
  green: "bg-[#F0FDF4] text-[#166534] border-[#BBF7D0]"
};

export const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const categories = ["all", ...skillsData.resumeSkills.map((c) => c.category)];

  const filteredCategories =
    selectedFilter === "all"
      ? skillsData.resumeSkills
      : skillsData.resumeSkills.filter((c) => c.category === selectedFilter);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECFDF5] text-[#065F46] text-xs font-mono mb-3 border border-[#A7F3D0]">
          <Sparkle className="w-3.5 h-3.5 text-emerald-500" />
          <span>toolkit & competencies</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          Skills & <span className="text-[#D95338]">Technologies</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-xl">
          Core proficiencies verified across coursework, code repositories & active exploration
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === cat
                  ? "bg-[#2B2621] text-white shadow-sm font-semibold"
                  : "bg-white text-[#6E6358] border border-[#E5DACD] hover:bg-[#F7F2E9] hover:text-[#2B2621]"
              }`}
            >
              {cat === "all" ? "All Skills" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Resume Skills Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredCategories.map((group) => {
          const badgeStyle = categoryBadgeStyles[group.color] || categoryBadgeStyles.yellow;

          return (
            <div
              key={group.category}
              className="bg-white rounded-3xl p-6 border-2 border-[#E5DACD] shadow-xs hover:shadow-md transition-shadow relative text-left"
            >
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F0EBE1]">
                <h3 className="font-extrabold text-sm sm:text-base text-[#2B2621]">
                  {group.category}
                </h3>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${badgeStyle}`}>
                  {group.items.length} items
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {group.items.map((skill) => {
                  const Icon = iconComponentMap[skill.icon] || FiStar;
                  return (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] hover:border-[#D95338]/50 hover:bg-white transition-all group flex items-center gap-2.5"
                    >
                      <div className="p-1.5 rounded-lg bg-white border border-[#E0D5C7] text-[#4A4238] group-hover:text-[#D95338] transition-colors flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-[#2B2621] truncate">
                          {skill.name}
                        </span>
                        <span className="block text-[10px] text-[#7A7065] truncate font-mono">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* SEPARATE SECTION: TECHNOLOGIES I'M CURRENTLY EXPLORING */}
      {/* ========================================================================= */}
      <div className="mt-14 relative text-left">
        <WashiTape color="yellow" rotation="-1deg" className="w-36 h-6 -top-3 left-12 z-20" />

        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 border-[#FDE68A] shadow-[0_8px_30px_-6px_rgba(234,179,8,0.08)] relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#FEF08A]">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#92400E]">
                  Active Research & Experimentation
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2621] tracking-tight mt-1">
                Technologies Currently Exploring
              </h3>
            </div>

            <span className="text-xs font-mono text-[#854D0E] bg-[#FEF9C3] px-3 py-1 rounded-full border border-[#FDE047] self-start sm:self-auto">
              Distinct from Core Resume Skills ✨
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#6B6155] mt-3 mb-6 max-w-2xl leading-relaxed">
            I actively read current AI literature, explore agentic orchestration libraries, and build prototypes around semantic retrieval, citation provenance, and autonomous workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {skillsData.activelyExploring.map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-2xl p-4 border border-[#FDE68A] shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FEF9C3] text-[#854D0E] mb-2 border border-[#FDE047]">
                    {tech.badge}
                  </span>
                  <h4 className="font-extrabold text-sm text-[#2B2621]">
                    {tech.name}
                  </h4>
                </div>
                <p className="text-[11px] text-[#7A7065] mt-2 leading-snug">
                  {tech.focus}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Skills;
