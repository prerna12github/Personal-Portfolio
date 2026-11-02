import React from "react";
import { personalInfo } from "../data/portfolioData";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="wrap py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#5c5c5c]">
      <div>
        <span>Vibe coded. Developer approved. Made with &lt;3 · {personalInfo.name} · 2026</span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#242424] transition-colors"
        >
          GitHub ↗
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-[#0A66C2] transition-colors"
        >
          LinkedIn ↗
        </a>
        <button
          onClick={scrollToTop}
          className="hover:text-[#b11f4b] transition-colors cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
