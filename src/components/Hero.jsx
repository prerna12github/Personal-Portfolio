import React from "react";
import { personalInfo } from "../data/portfolioData";
import AnimatedDoodle from "./AnimatedDoodle";

export const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="home" className="hero wrap pt-10 sm:pt-14 pb-14 sm:pb-20 text-left">
        {/* Top Eyebrow row */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#dedede]">
          <div className="eyebrow flex items-center gap-2">
            <span className="status-dot" />
            <span>AI &amp; FULL-STACK DEVELOPER · CURRENTLY EXPLORING AGENTIC AI</span>
          </div>
          <span className="edition hidden sm:inline-block text-[11px] font-mono text-[#5c5c5c] tracking-widest uppercase">
            EDITION 2026
          </span>
        </div>

        {/* Hero Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Subheading, Summary, Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-[#242424] tracking-[-3px] font-[450] leading-[1.08] mb-4">
              Hey, I'm <em>Prerna!</em>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-[#242424] mb-3 leading-snug">
              AI &amp; Full-Stack Developer
            </p>

            {/* <p className="eyebrow text-[#b11f4b] font-medium tracking-wider mb-6">
              Exploring Agentic AI, LLMs, RAG &amp; Machine Learning.
            </p>*/}

            <p className="text-base sm:text-[17px] text-[#5c5c5c] leading-[1.75] mb-8 max-w-xl">
              "I'm an MCA student passionate about building practical software and exploring intelligent systems. Currently, I'm learning and experimenting with AI Agents, Agentic Workflows, RAG, Large Language Models, Machine Learning, and full-stack development."
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 mb-6">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="button"
              >
                <span>Explore My Projects</span>
                <span aria-hidden="true">↓</span>
              </a>

              <a
                href={personalInfo.resumePath}
                download="Prerna_Kumari_Sharma_Resume.pdf"
                className="text-link"
              >
                <span>Download Resume</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Direct Links */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#dedede] w-full text-xs font-mono text-[#5c5c5c]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="text-link"
              >
                <span>Email</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>

          </div>

          {/* Right Column: Tanuja Animated Doodle (Thought Cloud / Code Flower) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <AnimatedDoodle />
          </div>

        </div>
      </section>

      {/* Tanuja's Discipline Strip */}
      <div className="discipline-strip" aria-hidden="true">
        <div className="wrap">
          <span>AGENTIC WORKFLOWS</span><b>·</b>
          <span>LANGGRAPH ORCHESTRATION</span><b>·</b>
          <span>RAG &amp; VECTOR SEARCH</span><b>·</b>
          <span>MACHINE LEARNING</span><b>·</b>
          <span>FASTAPI &amp; BACKEND</span><b>·</b>
          <span>FULL-STACK WEB</span>
        </div>
      </div>
    </>
  );
};

export default Hero;
