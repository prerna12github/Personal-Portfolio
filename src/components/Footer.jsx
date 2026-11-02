import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiHeart, FiMail } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { Sparkle, FlowerDoodle } from "./Doodles";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-[#EADBCE] bg-[#FAF7F2] relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Side: Brand & Identity */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <span className="font-display font-extrabold text-lg text-[#2B2621]">
              {personalInfo.name}
            </span>
            <FlowerDoodle className="w-4 h-4 text-rose-400" />
          </div>
          <p className="text-xs text-[#7A7065]">
            AI & Full-Stack Developer · MCA Student at Kalyani Government Engineering College
          </p>
          <p className="text-[11px] text-[#9C8F80] font-mono mt-0.5">
            Crafted with warmth, curiosity & modern web technology · 2026
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-white border border-[#E5DACD] flex items-center justify-center text-[#554D44] hover:text-[#2B2621] hover:border-[#2B2621] transition-all shadow-2xs"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-xl bg-white border border-[#E5DACD] flex items-center justify-center text-[#554D44] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all shadow-2xs"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="w-9 h-9 rounded-xl bg-white border border-[#E5DACD] flex items-center justify-center text-[#554D44] hover:text-[#D95338] hover:border-[#D95338] transition-all shadow-2xs"
            title="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E5DACD] text-xs font-semibold text-[#4A4238] hover:text-[#2B2621] hover:border-[#D95338] transition-all shadow-2xs cursor-pointer active:scale-95"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5 text-[#D95338]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
