import React, { useState } from "react";
import { skillsData } from "../data/portfolioData";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", ...skillsData.resumeSkills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === "all"
      ? skillsData.resumeSkills
      : skillsData.resumeSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          {/* <p className="eyebrow mb-2">TECHNICAL TOOLKIT</p>*/}
          <h2>
            Skills &amp; <em>Technologies.</em>
          </h2>
        </div>
        {/* <p className="text-xs font-mono text-[#5c5c5c] tracking-widest uppercase">
          CORE CAPABILITIES
        </p>*/}
      </div>

      {/* Tanuja's Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#dedede]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-4 py-2 rounded-[10px] border transition-all cursor-pointer font-mono ${
              activeCategory === cat
                ? "bg-[#242424] text-[#fff8f1] border-[#242424]"
                : "bg-white text-[#5c5c5c] border-[#dedede] hover:bg-[#b11f4b]/[0.08] hover:text-[#b11f4b] hover:border-[#b11f4b]/30"
            }`}
          >
            {cat === "all" ? "All Skills" : cat}
          </button>
        ))}
      </div>

      {/* Skills Table / Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
        {filteredSkills.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-[14px] bg-white border border-[#dedede] shadow-soft"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dedede]">
              <h3 className="text-base font-semibold text-[#242424]">
                {group.category}
              </h3>
              <span className="text-[10px] font-mono text-[#5c5c5c] uppercase tracking-wider">
                {group.skills.length} TECHNOLOGIES
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-md bg-[#fff8f1] border border-[#dedede] text-xs font-mono text-[#242424]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Actively Exploring Highlights Box */}
      <div className="p-6 sm:p-8 rounded-[16px] bg-[#fffdfa] border border-[#f4c244] text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#f4c244]/40">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f28b38]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#242424]">
              Technologies Under Active Exploration
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#5c5c5c]">
            DISTINCT FROM PRODUCTION STACK
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {["LangGraph Workflows", "LLMs & Prompt Systems", "RAG & Vector Retrieval", "Sentence Transformers (all-MiniLM)", "Autonomous Agentic Pipelines"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full bg-[#f4c244]/15 text-[#242424] border border-[#f4c244]/40 text-xs font-mono font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
