import React from "react";
import { FiCpu, FiDatabase, FiServer, FiLayers, FiCode } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { Sparkle, WashiTape, HandStar, FlowerDoodle } from "./Doodles";

const highlightsList = [
  {
    title: "AI & Agentic Systems",
    icon: FiCpu,
    color: "pink",
    badgeBg: "bg-pink-100/90 text-pink-800 border-pink-200",
    desc: "Multi-agent orchestration, LangGraph state machines, tool calling & human verification workflows."
  },
  {
    title: "LLMs and RAG",
    icon: FiLayers,
    color: "yellow",
    badgeBg: "bg-amber-100/90 text-amber-800 border-amber-200",
    desc: "Retrieval-Augmented Generation, semantic embeddings, citation provenance & anti-hallucination guardrails."
  },
  {
    title: "Machine Learning",
    icon: FiCode,
    color: "green",
    badgeBg: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    desc: "Computer vision, MobileNetV2 architecture, OpenCV frame processing & post-training quantization."
  },
  {
    title: "Backend Engineering",
    icon: FiServer,
    color: "blue",
    badgeBg: "bg-sky-100/90 text-sky-800 border-sky-200",
    desc: "High-concurrency FastAPI services, PostgreSQL schema design, Redis/Valkey caching & async queues."
  },
  {
    title: "Full-Stack Development",
    icon: FiDatabase,
    color: "peach",
    badgeBg: "bg-orange-100/90 text-orange-800 border-orange-200",
    desc: "Responsive user interfaces with React, modern Tailwind styling, state management & clean RESTful integration."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE2] text-[#706456] text-xs font-mono mb-3 border border-[#E0D5C7]">
          <Sparkle className="w-3.5 h-3.5 text-amber-500" />
          <span>get to know me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          About <span className="text-[#D95338]">Me</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-lg">
          MCA student · AI Explorer · Builder at heart 🌿
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Editorial Story Card with Scrapbook Paper Look */}
        <div className="lg:col-span-7 relative">
          <WashiTape color="pink" rotation="-1.2deg" className="w-28 h-6 -top-3 left-10" />
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#E5DACD] shadow-[0_4px_24px_-4px_rgba(70,50,30,0.08)] relative">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2B2621] mb-5 flex items-center gap-2">
              <span>Curiosity-driven Engineering</span>
              <FlowerDoodle className="w-5 h-5 text-rose-400" />
            </h3>

            {/* Exact content required */}
            <div className="space-y-4 text-[#4A4238] text-sm sm:text-base leading-relaxed">
              <p>
                I'm an MCA student at <strong className="text-[#2B2621] font-semibold">Kalyani Government Engineering College</strong> with a strong interest in Artificial Intelligence, Machine Learning, and full-stack development.
              </p>
              
              <p>
                My current learning journey revolves around building intelligent AI systems, experimenting with LLMs, exploring Agentic AI and RAG architectures, and understanding how multiple AI agents can collaborate to solve complex problems.
              </p>

              <p>
                I also enjoy backend engineering, database optimization, and building scalable web applications.
              </p>

              <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] font-medium text-sm flex items-start gap-3 mt-4">
                <span className="text-xl mt-0.5">💡</span>
                <p>
                  "I believe the best way to learn technology is by building real projects."
                </p>
              </div>
            </div>

            {/* Scrapbook Campus Snapshot Card */}
            <div className="mt-6 pt-5 border-t border-[#EADBCE] flex flex-col sm:flex-row items-center gap-4 bg-[#FAF7F2] p-4 rounded-2xl">
              <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden border border-[#DED5C7] flex-shrink-0 relative">
                <img
                  src={personalInfo.collegeImage}
                  alt="Kalyani Government Engineering College"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9C8F80] font-semibold">
                  Academic Base
                </span>
                <h4 className="text-sm font-bold text-[#2B2621]">
                  Kalyani Government Engineering College
                </h4>
                <p className="text-xs text-[#6B6053]">
                  Pursuing MCA (2025 – Present) · Nadia, West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Highlights Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3.5 relative">
          <div className="mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#8A7D6F] font-semibold flex items-center gap-1.5">
              <HandStar className="w-3.5 h-3.5 text-amber-500" />
              Core Competency Highlights
            </span>
          </div>

          {highlightsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-4 border border-[#E5DACD] shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group text-left"
              >
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl border ${item.badgeBg} group-hover:scale-105 transition-transform flex-shrink-0`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#2B2621] group-hover:text-[#D95338] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B6155] mt-0.5 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
