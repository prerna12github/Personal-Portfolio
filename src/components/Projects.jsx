import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaPython } from "react-icons/fa";
import {
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiShield,
  FiTerminal,
  FiArrowUpRight,
  FiActivity,
  FiClock,
  FiZap,
  FiCheck,
  FiUserCheck,
  FiGitBranch
} from "react-icons/fi";
import { featuredProjects } from "../data/portfolioData";
import { Sparkle, WashiTape, HandStar, StickerBadge } from "./Doodles";

export const Projects = () => {
  const [selectedAgentStep, setSelectedAgentStep] = useState(0);

  const flagship = featuredProjects.find((p) => p.isFlagship);
  const otherProjects = featuredProjects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBEB] text-[#92400E] text-xs font-mono mb-3 border border-[#FDE68A]">
          <Sparkle className="w-3.5 h-3.5 text-amber-500" />
          <span>featured portfolio work</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          Featured <span className="text-[#D95338]">Projects</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-xl">
          Practical applications across Agentic AI, Computer Vision & Backend Systems
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PROJECT 1: FLAGSHIP - AGENTIC LITERATURE REVIEW ASSISTANT */}
      {/* ========================================================================= */}
      {flagship && (
        <div className="mb-16 relative">
          <WashiTape color="lavender" rotation="-1.5deg" className="w-36 h-6 -top-3 left-12 z-20" />

          <div className="bg-white rounded-3xl border-2 border-[#D8B4FE]/80 shadow-[0_12px_36px_-6px_rgba(147,51,234,0.08)] p-6 sm:p-8 lg:p-10 relative overflow-hidden text-left">
            
            {/* Top Bar / Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#F3E8FF]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF5FF] text-[#7E22CE] border border-[#E9D5FF]">
                  <Sparkle className="w-3.5 h-3.5 text-[#9333EA]" />
                  {flagship.tagline}
                </span>

                <span className="text-xs font-mono text-[#7E22CE]/80 bg-[#FAF5FF] px-2.5 py-1 rounded-md border border-[#F3E8FF]">
                  Stateful LangGraph Workflow
                </span>
              </div>

              <a
                href={flagship.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B2621] text-white text-xs sm:text-sm font-medium hover:bg-[#7E22CE] transition-colors shadow-sm"
              >
                <FaGithub className="w-4 h-4" />
                <span>View on GitHub</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Main Content Grid: Info on Left, Interactive LangGraph Orchestration on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 items-start">
              
              {/* Left Column: Description & Key Features */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2B2621] tracking-tight mb-3">
                    {flagship.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#524B43] leading-relaxed mb-6 font-normal">
                    {flagship.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#7E22CE] font-bold block mb-1">
                      Key Technical Features:
                    </span>
                    {flagship.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A4238]">
                        <span className="mt-0.5 p-1 rounded-full bg-[#FAF5FF] text-[#7E22CE] flex-shrink-0 border border-[#E9D5FF]">
                          <FiCheck className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-[#F3E8FF]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#7A7065] block mb-2">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {flagship.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#FAF5FF] text-[#6B21A8] border border-[#E9D5FF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual LangGraph Multi-Agent Architecture */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-[#E9D5FF] bg-[#FAF5FF]/70 p-4 sm:p-6 shadow-inner">
                  
                  {/* Visual Header */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E9D5FF]/80">
                    <div className="flex items-center gap-2">
                      <FiGitBranch className="w-4 h-4 text-[#7E22CE]" />
                      <span className="text-xs font-mono font-bold text-[#6B21A8] uppercase tracking-wider">
                        LangGraph Agentic State Graph
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#7E22CE] bg-white px-2 py-0.5 rounded-md border border-[#E9D5FF]">
                      Human-in-the-Loop Pipeline
                    </span>
                  </div>

                  {/* Pipeline Steps Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {flagship.workflowSteps?.map((item, idx) => {
                      const isSelected = selectedAgentStep === idx;
                      return (
                        <button
                          key={item.step}
                          onClick={() => setSelectedAgentStep(idx)}
                          className={`text-left p-3 rounded-xl border transition-all cursor-pointer relative ${
                            isSelected
                              ? "bg-white border-[#9333EA] shadow-sm ring-1 ring-[#9333EA]"
                              : "bg-white/80 border-[#E9D5FF] hover:bg-white"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-mono font-bold text-[#9333EA] bg-[#FAF5FF] px-1.5 py-0.5 rounded">
                              {item.step}
                            </span>
                            {item.agent === "Human-in-the-Loop" ? (
                              <FiUserCheck className="w-3.5 h-3.5 text-rose-500" />
                            ) : (
                              <FiCpu className="w-3.5 h-3.5 text-[#7E22CE]" />
                            )}
                          </div>
                          <div className="font-bold text-xs text-[#2B2621] truncate">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-[#7A7065] truncate mt-0.5">
                            {item.agent}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Step Details Card */}
                  <div className="mt-4 p-4 rounded-xl bg-white border border-[#E9D5FF] shadow-xs">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-bold text-[#7E22CE] font-mono">
                        Active Node: {flagship.workflowSteps[selectedAgentStep].agent}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Node State: verified
                      </span>
                    </div>
                    <p className="text-xs text-[#4A4238] leading-relaxed">
                      {flagship.workflowSteps[selectedAgentStep].role}
                    </p>
                    
                    {/* Architectural highlight pills */}
                    <div className="mt-3 pt-2.5 border-t border-[#F3E8FF] flex flex-wrap gap-2 text-[11px] font-mono text-[#6B21A8]">
                      <span className="bg-[#FAF5FF] px-2 py-0.5 rounded">Deterministic Chunk Metadata</span>
                      <span className="bg-[#FAF5FF] px-2 py-0.5 rounded">MiniLM Embeddings</span>
                      <span className="bg-[#FAF5FF] px-2 py-0.5 rounded">Zero-cost Clustering</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* OTHER FEATURED PROJECTS (PROJECT 2 & 3) */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* PROJECT 2: ACCIDENT DETECTION USING CNN */}
        {otherProjects[0] && (
          <div className="relative flex flex-col justify-between bg-white rounded-3xl border-2 border-[#BBF7D0] shadow-[0_4px_24px_-4px_rgba(34,197,94,0.06)] p-6 sm:p-8 text-left group">
            <WashiTape color="green" rotation="1.2deg" className="w-28 h-5 -top-2.5 left-10 z-20" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]">
                  <FiActivity className="w-3.5 h-3.5 text-[#16A34A]" />
                  {otherProjects[0].tagline}
                </span>

                <a
                  href={otherProjects[0].github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-[#554D44] hover:text-[#16A34A] hover:bg-[#F0FDF4] transition-colors border border-transparent hover:border-[#DCFCE7]"
                  title="GitHub Repository"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2621] tracking-tight mb-2">
                {otherProjects[0].title}
              </h3>

              <p className="text-sm text-[#524B43] leading-relaxed mb-6 font-normal">
                {otherProjects[0].description}
              </p>

              {/* Computer Vision Edge Pipeline Mockup */}
              <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4]/70 p-4 mb-6 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#DCFCE7] text-[11px] text-[#166534]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    CCTV STREAM · LIVE PREPROCESS
                  </span>
                  <span className="font-bold">38.4 FPS</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-[#14532D]">
                  <div className="flex justify-between py-1 border-b border-emerald-100">
                    <span className="text-[#3F6212]">Model Architecture:</span>
                    <span className="font-bold">MobileNetV2 (Quantized)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-emerald-100">
                    <span className="text-[#3F6212]">Optimization:</span>
                    <span className="font-bold">Post-Training Quantization (INT8)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#3F6212]">Preprocessing:</span>
                    <span className="font-bold">OpenCV Frame Difference Buffer</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#166534] font-bold block mb-1">
                  Key Technical Features:
                </span>
                {otherProjects[0].keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4238]">
                    <span className="mt-0.5 p-0.5 rounded-full bg-[#F0FDF4] text-[#16A34A] flex-shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Stack & Action */}
            <div className="pt-4 border-t border-[#DCFCE7] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {otherProjects[0].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#F0FDF4] text-[#166534] border border-[#DCFCE7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={otherProjects[0].github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#166534] hover:underline"
              >
                <span>Explore Code</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* PROJECT 3: U-SHORT — URL SHORTENER */}
        {otherProjects[1] && (
          <div className="relative flex flex-col justify-between bg-white rounded-3xl border-2 border-[#BAE6FD] shadow-[0_4px_24px_-4px_rgba(2,132,199,0.06)] p-6 sm:p-8 text-left group">
            <WashiTape color="blue" rotation="-1.2deg" className="w-28 h-5 -top-2.5 left-10 z-20" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F9FF] text-[#0369A1] border border-[#E0F2FE]">
                  <FiZap className="w-3.5 h-3.5 text-[#0284C7]" />
                  {otherProjects[1].tagline}
                </span>

                <a
                  href={otherProjects[1].github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl text-[#554D44] hover:text-[#0284C7] hover:bg-[#F0F9FF] transition-colors border border-transparent hover:border-[#E0F2FE]"
                  title="GitHub Repository"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2621] tracking-tight mb-2">
                {otherProjects[1].title}
              </h3>

              <p className="text-sm text-[#524B43] leading-relaxed mb-6 font-normal">
                {otherProjects[1].description}
              </p>

              {/* URL Shortener Backend Service Mockup */}
              <div className="rounded-2xl border border-[#BAE6FD] bg-[#F0F9FF]/70 p-4 mb-6 font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#E0F2FE] text-[11px] text-[#0369A1]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    FASTAPI CACHED REDIRECTION
                  </span>
                  <span className="font-bold">&lt; 3.2ms</span>
                </div>

                <div className="space-y-1.5 text-[11px] text-[#0C4A6E]">
                  <div className="flex justify-between py-1 border-b border-sky-100">
                    <span className="text-[#0284C7]">Cache Layer:</span>
                    <span className="font-bold">Valkey / Redis (O(1) lookup)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-sky-100">
                    <span className="text-[#0284C7]">Persistence:</span>
                    <span className="font-bold">PostgreSQL Database</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#0284C7]">Automated Expiry:</span>
                    <span className="font-bold">30-day purge with pg_cron</span>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#0369A1] font-bold block mb-1">
                  Key Technical Features:
                </span>
                {otherProjects[1].keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4238]">
                    <span className="mt-0.5 p-0.5 rounded-full bg-[#F0F9FF] text-[#0284C7] flex-shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Stack & Action */}
            <div className="pt-4 border-t border-[#E0F2FE] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {otherProjects[1].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-[#F0F9FF] text-[#0369A1] border border-[#E0F2FE]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={otherProjects[1].github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0369A1] hover:underline"
              >
                <span>Explore Code</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

      </div>

    </section>
  );
};

export default Projects;
