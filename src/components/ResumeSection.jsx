import React from "react";
import { personalInfo } from "../data/portfolioData";

export const ResumeSection = () => {
  return (
    <section id="resume" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 sm:p-10 rounded-[20px] bg-white border border-[#dedede] shadow-soft">
        
        <div>
          <p className="eyebrow mb-2">OFFICIAL DOCUMENT</p>
          <h2 className="text-2xl sm:text-3xl font-[450] tracking-tight text-[#242424] mb-2">
            Curriculum <em>Vitae.</em>
          </h2>
          <p className="text-sm text-[#5c5c5c] leading-[1.7] max-w-lg">
            Download my verified resume containing full academic history, projects in Agentic AI &amp; deep learning, technical toolkit, and competitive merit rankings.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={personalInfo.resumePath}
            download="Prerna_Kumari_Sharma_Resume.pdf"
            className="button"
          >
            <span>Download Resume PDF</span>
            <span aria-hidden="true">↓</span>
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <span>Open in Tab</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
