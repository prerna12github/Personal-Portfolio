import React from "react";
import { FiCompass, FiCpu, FiDatabase, FiTool, FiZap, FiArrowRight } from "react-icons/fi";
import { exploringAreas } from "../data/portfolioData";
import { Sparkle, HandStar, WashiTape, CurvedArrow } from "./Doodles";

const iconMap = {
  Bot: FiCpu,
  Database: FiDatabase,
  Sparkles: Sparkle,
  Wrench: FiTool,
  Cpu: FiZap
};

const cardColorStyles = {
  pink: {
    bg: "bg-[#FFF0F5]/80",
    border: "border-[#FBCFE8]",
    tagBg: "bg-white text-[#BE185D] border-[#F472B6]/40",
    number: "text-[#DB2777]",
    tape: "pink"
  },
  blue: {
    bg: "bg-[#F0F9FF]/80",
    border: "border-[#BAE6FD]",
    tagBg: "bg-white text-[#0369A1] border-[#38BDF8]/40",
    number: "text-[#0284C7]",
    tape: "blue"
  },
  yellow: {
    bg: "bg-[#FEFCE8]/80",
    border: "border-[#FEF08A]",
    tagBg: "bg-white text-[#A16207] border-[#FACC15]/40",
    number: "text-[#D97706]",
    tape: "yellow"
  },
  peach: {
    bg: "bg-[#FFF7ED]/80",
    border: "border-[#FED7AA]",
    tagBg: "bg-white text-[#C2410C] border-[#FB923C]/40",
    number: "text-[#EA580C]",
    tape: "peach"
  },
  green: {
    bg: "bg-[#F0FDF4]/80",
    border: "border-[#BBF7D0]",
    tagBg: "bg-white text-[#15803D] border-[#4ADE80]/40",
    number: "text-[#16A34A]",
    tape: "green"
  }
};

export const Exploring = () => {
  return (
    <section id="exploring" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5FF] text-[#7E22CE] text-xs font-mono mb-3 border border-[#E9D5FF]">
          <FiCompass className="w-3.5 h-3.5 text-[#9333EA]" />
          <span>active learning playground</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          What I'm Exploring <span className="text-[#D95338]">Right Now</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-2xl">
          Deep dives, experiments & reading notes — actively learning every single day 🌱
        </p>

        {/* Humble learning disclaimer */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#EADBCE] text-xs text-[#706456]">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>These represent active study areas & experimental prototypes, not claims of finished expertise.</span>
        </div>
      </div>

      {/* Grid of Exploring Cards with Scrapbook Doodles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {exploringAreas.map((area, idx) => {
          const colors = cardColorStyles[area.color] || cardColorStyles.yellow;
          const Icon = iconMap[area.icon] || Sparkle;

          return (
            <div
              key={area.title}
              className={`relative rounded-3xl p-6 sm:p-7 border-2 ${colors.border} ${colors.bg} shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group`}
            >
              {/* Little washi tape on cards */}
              <WashiTape
                color={colors.tape}
                rotation={idx % 2 === 0 ? "-1.5deg" : "1.5deg"}
                className="w-20 h-4 -top-2 left-6"
              />

              <div>
                {/* Card Top: Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-2xl font-black ${colors.number}`}>
                    {area.number}
                  </span>
                  
                  <div className="p-2.5 rounded-2xl bg-white shadow-xs border border-stone-200/60 text-[#2B2621] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-[#D95338]" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#2B2621] mb-1 group-hover:text-[#D95338] transition-colors">
                  {area.title}
                </h3>

                <p className="text-xs font-semibold text-[#6E6358] mb-3 leading-snug">
                  {area.subtitle}
                </p>

                {/* Detail Description */}
                <p className="text-xs text-[#524B43] leading-relaxed mb-5 font-normal">
                  {area.detail}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-black/5 flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-medium border shadow-2xs ${colors.tagBg}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* Summary / Mindset Card */}
        <div className="relative rounded-3xl p-6 sm:p-7 border-2 border-dashed border-[#D6C7B2] bg-white/70 shadow-xs flex flex-col justify-center items-center text-center">
          <Sparkle className="w-8 h-8 text-amber-400 mb-3 animate-pulse" />
          <h4 className="text-base font-bold text-[#2B2621] mb-2 font-display">
            Continuous Synthesis
          </h4>
          <p className="text-xs text-[#6B6155] leading-relaxed max-w-xs mb-3">
            "Bridging theory from research papers with hands-on code experiments — learning through iteration and reflection."
          </p>
          <span className="font-hand text-lg text-[#D95338] font-semibold">
            ~ Prerna's Learning Log
          </span>
        </div>
      </div>

    </section>
  );
};

export default Exploring;
