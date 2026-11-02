import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import {
  Sparkle,
  HandStar,
  FlowerDoodle,
  HandUnderline,
  CurvedArrow,
  WashiTape,
  StickerBadge
} from "./Doodles";

export const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Decorative background stickers/doodles floating */}
      <div className="absolute top-16 left-6 pointer-events-none opacity-60 hidden sm:block animate-cute-float-slow">
        <Sparkle className="w-8 h-8 text-amber-300" />
      </div>
      <div className="absolute top-24 right-10 pointer-events-none opacity-50 hidden sm:block animate-cute-float">
        <FlowerDoodle className="w-10 h-10 text-rose-300" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Greeting, Title, Short Bio, CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Cute Eyebrow Badge */}
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFBEB] text-[#92400E] border border-[#FDE68A] text-xs font-medium shadow-[2px_2px_0px_rgba(40,30,20,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>{personalInfo.badge}</span>
            </div>

            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-[#7A7065] font-mono">
              <FiMapPin className="w-3.5 h-3.5 text-[#D95338]" />
              {personalInfo.location}
            </span>
          </div>

          {/* Main Greeting */}
          <div className="relative mb-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2B2621] leading-[1.1]">
              Hey, I'm{" "}
              <span className="relative inline-block text-[#D95338]">
                {personalInfo.preferredName}!
                <span className="inline-block animate-wiggle ml-1">👋</span>
                <span className="absolute -bottom-1 left-0 w-full text-[#F43F5E]/60">
                  <HandUnderline className="w-full h-3 text-[#F43F5E]/60" />
                </span>
              </span>
            </h1>
          </div>

          {/* Subheading / Professional Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-[#443C35] mt-3 mb-2 flex items-center gap-2">
            <span>{personalInfo.title}</span>
          </h2>

          <p className="text-sm sm:text-base font-medium text-[#7C2D12] bg-[#FFF7ED] px-3 py-1 rounded-md border border-[#FED7AA] mb-6 inline-block">
            Exploring Agentic AI, LLMs, RAG & Machine Learning
          </p>

          {/* Short Introduction Paragraphs */}
          <div className="space-y-3 text-[#5A5147] text-sm sm:text-base leading-relaxed max-w-xl font-normal bg-white/60 p-4 sm:p-5 rounded-2xl border border-[#EADBCE]/80 shadow-[0_2px_12px_rgba(70,50,30,0.04)] backdrop-blur-[2px]">
            <p>
              Hey, I'm Prerna! A developer curious about how intelligent systems work and how technology can solve real-world problems.
            </p>
            <p>
              Currently pursuing my <strong className="text-[#2B2621] font-semibold">MCA at Kalyani Government Engineering College</strong>, I'm exploring the world of AI Agents, Agentic Workflows, RAG, Large Language Models (LLMs), Machine Learning, and full-stack development.
            </p>
            <p className="text-xs sm:text-sm text-[#70665A] italic border-l-2 border-[#D95338] pl-3 py-0.5">
              "I enjoy building practical projects, experimenting with AI technologies, optimizing deep learning models, and turning interesting ideas into working applications. I'm always learning, experimenting, and building something new."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8 w-full sm:w-auto">
            {/* Explore Projects Button */}
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2B2621] text-white text-sm font-semibold hover:bg-[#D95338] transition-all duration-200 shadow-[0_4px_14px_rgba(43,38,33,0.15)] hover:shadow-[0_6px_20px_rgba(217,83,56,0.25)] active:scale-95"
            >
              <span>Explore My Projects</span>
              <FiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>

            {/* Download Resume Button */}
            <a
              href={personalInfo.resumePath}
              download="Prerna_Kumari_Sharma_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-[#2B2621] text-sm font-semibold border-2 border-[#E5DACD] hover:border-[#D95338] hover:bg-[#FFFBF7] transition-all duration-200 shadow-sm active:scale-95"
            >
              <FiDownload className="w-4 h-4 text-[#D95338]" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons & Email */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#E5DACD] text-[#554D44] hover:text-[#2B2621] hover:border-[#2B2621] transition-all shadow-xs"
                title="GitHub @prerna12github"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white border border-[#E5DACD] text-[#554D44] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-xs"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-white border border-[#E5DACD] text-[#554D44] hover:text-[#D95338] hover:border-[#D95338] transition-all shadow-xs"
                title="Send Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Creative Scrapbook Composition with Photo & Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
          
          {/* Decorative hand-written note pointing to photo */}
          <div className="hidden sm:block absolute -top-8 -right-2 text-stone-500 font-hand text-xl rotate-6 z-20">
            <span>that's me! ✨</span>
            <CurvedArrow className="w-10 h-8 -scale-x-100 text-stone-400 ml-4 -mt-1" />
          </div>

          <div className="relative">
            {/* Washi Tape on top */}
            <WashiTape color="yellow" rotation="-2deg" className="w-32 h-6 -top-3.5 left-1/2 -translate-x-1/2 z-30" />

            {/* Photo Card Container */}
            <div className="relative p-3.5 bg-white rounded-3xl border-2 border-[#E5DACD] shadow-[0_12px_36px_-6px_rgba(70,50,30,0.12)] rotate-[-1.5deg] hover:rotate-0 transition-transform duration-500 group">
              
              {/* Photo Frame */}
              <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EADBCE] relative">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = personalInfo.avatarImage;
                  }}
                />
                
                {/* Subtle photo frame overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono tracking-wider bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md inline-block">
                    Prerna K. Sharma
                  </span>
                </div>
              </div>

              {/* Scrapbook Caption underneath photo */}
              <div className="mt-2.5 text-center">
                <p className="font-hand text-lg text-[#7C6E60] font-semibold">
                  MCA @ KGEC · AI Explorer
                </p>
              </div>
            </div>

            {/* Floating Sticker 1: Agentic AI & RAG */}
            <div className="absolute -top-4 -left-6 z-30 animate-cute-float">
              <StickerBadge color="pink" rotate="-6deg">
                <Sparkle className="w-3 h-3 text-pink-500" />
                <span>Agentic AI & RAG</span>
              </StickerBadge>
            </div>

            {/* Floating Sticker 2: WBJECA Rank 62 */}
            <div className="absolute -bottom-4 -left-4 z-30 animate-cute-float-reverse">
              <StickerBadge color="yellow" rotate="4deg">
                <span>🏆 WBJECA Rank 62</span>
              </StickerBadge>
            </div>

            {/* Floating Sticker 3: LangGraph & PyTorch */}
            <div className="absolute -bottom-5 -right-4 z-30 animate-cute-float">
              <StickerBadge color="green" rotate="-3deg">
                <span>⚡ LangGraph & PyTorch</span>
              </StickerBadge>
            </div>

            {/* Small hand-drawn star decoration */}
            <div className="absolute top-1/2 -right-6 pointer-events-none text-amber-400 z-10">
              <HandStar className="w-6 h-6 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
