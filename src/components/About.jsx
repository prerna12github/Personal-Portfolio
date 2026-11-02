import React from "react";
import { personalInfo } from "../data/portfolioData";

export const About = () => {
  return (
    <section id="about" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and Context */}
        <div className="lg:col-span-5">
          <p className="eyebrow mb-2">ABOUT PRERNA</p>
          <h2 className="mb-6 leading-[1.12]">
            Curiosity is<br />a useful <em>habit.</em>
          </h2>

          <div className="space-y-4 text-sm font-mono text-[#5c5c5c] border-l-2 border-[#b11f4b] pl-4 py-1">
            <div>
              <span className="text-[#242424] font-bold block">Current Degree:</span>
              <span>MCA · Kalyani Government Engineering College</span>
              <span className="block text-xs text-[#78716C]">2025 – Present · Kalyani, WB</span>
            </div>

            <div>
              <span className="text-[#242424] font-bold block">Previous Education:</span>
              <span>B.Sc. (Honours) Computer Science · Kalyani Mahavidyalaya</span>
              <span className="block text-xs text-[#78716C]">2022 – 2025 · CGPA: 7.96</span>
            </div>

            <div>
              <span className="text-[#242424] font-bold block">Competitive Honor:</span>
              <span>WBJECA 2025 All-Bengal General Merit Rank 62</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative paragraphs & Philosophy */}
        <div className="lg:col-span-7 space-y-6 text-base text-[#5c5c5c] leading-[1.8]">
          <p>
            I'm an MCA student at <strong className="text-[#242424] font-medium">Kalyani Government Engineering College</strong> with a strong interest in Artificial Intelligence, Machine Learning, and full-stack development.
          </p>

          <p>
            My current learning journey revolves around building intelligent AI systems, experimenting with LLMs, exploring Agentic AI and RAG architectures, and understanding how multiple AI agents can collaborate to solve complex problems.
          </p>

          <p>
            I also enjoy backend engineering, database optimization, and building scalable web applications. I believe the best way to learn technology is by building real projects.
          </p>

          <div className="pt-4 flex items-center gap-6 text-xs font-mono text-[#242424]">
            <a href="#projects" className="text-link">
              <span>View my work</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="text-link">
              <span>Get in touch</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
