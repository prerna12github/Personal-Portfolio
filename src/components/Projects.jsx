import React from "react";
import { featuredProjects } from "../data/portfolioData";

export const Projects = () => {
  const { flagship, secondary } = featuredProjects;

  return (
    <section id="projects" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      
      {/* Section Heading */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <p className="eyebrow mb-2">SELECTED ENGINEERING WORK</p>
          <h2>
            Featured <em>Projects.</em>
          </h2>
        </div>
        <p className="text-xs font-mono text-[#5c5c5c] tracking-widest uppercase">
          03 CASE REPOSITORIES
        </p>
      </div>

      {/* ========================================================================= */}
      {/* PRIMARY FEATURED PROJECT: AGENTIC LITERATURE REVIEW ASSISTANT */}
      {/* ========================================================================= */}
      <div className="mb-16">
        <article className="project-card group">
          <a
            href={flagship.github}
            target="_blank"
            rel="noreferrer"
            className="block no-underline text-inherit"
          >
            {/* Visual Stage (Art Canvas) */}
            <div className="project-art">
              <div className="art bg-[#fffdfa] flex-col p-6 sm:p-10 justify-between items-stretch">
                
                {/* Top toolbar of the art stage */}
                <div className="flex items-center justify-between pb-4 border-b border-[#dedede] text-[11px] font-mono text-[#5c5c5c]">
                  <span className="flex items-center gap-2">
                    <span className="status-dot" />
                    <span>LANGGRAPH STATE MACHINE · HUMAN-IN-THE-LOOP</span>
                  </span>
                  <span className="text-[#b11f4b] font-medium">GITHUB / AGENTIC-LITERATURE-REVIEW</span>
                </div>

                {/* Architecture Nodes Flow */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 my-auto py-4">
                  {flagship.architectureSteps.map((node) => (
                    <div
                      key={node.step}
                      className="p-3 rounded-lg border border-[#dedede] bg-white text-left flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-mono text-[#b11f4b] font-semibold block mb-1">
                          {node.step}
                        </span>
                        <div className="text-xs font-semibold text-[#242424] leading-tight mb-1">
                          {node.name}
                        </div>
                      </div>
                      <p className="text-[10px] text-[#5c5c5c] leading-snug">
                        {node.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom art status bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#5c5c5c] pt-3 border-t border-[#dedede]">
                  <span>ZERO-COST MiniLM CLUSTERING · GEMINI CONFLICT ENGINE</span>
                  <span>DETERMINISTIC CITATION PROVENANCE</span>
                </div>

              </div>
              <span className="project-open" aria-hidden="true">↗</span>
            </div>

            {/* Copy */}
            <div className="pt-4">
              <div className="project-meta">
                <span>PRIMARY FEATURED PROJECT</span>
                <span>01</span>
              </div>
              <h3 className="text-[#242424] font-[500] group-hover:text-[#b11f4b] transition-colors">
                {flagship.title}
              </h3>
              <p className="text-sm sm:text-base text-[#5c5c5c] mt-2 leading-[1.7] max-w-3xl">
                A human-in-the-loop multi-agent system built with LangGraph that automates end-to-end literature reviews with human review checkpoints, MiniLM claim clustering, and citation provenance verification.
              </p>
              <div className="disciplines">
                Python · LangGraph · Gemini API · Sentence-Transformers · all-MiniLM-L6-v2
              </div>
            </div>
          </a>
        </article>
      </div>

      {/* ========================================================================= */}
      {/* SECONDARY PROJECTS: 2-COLUMN GRID */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14">
        
        {/* Project 2: Accident Detection */}
        <article className="project-card group">
          <a
            href={secondary[0].github}
            target="_blank"
            rel="noreferrer"
            className="block no-underline text-inherit"
          >
            <div className="project-art">
              <div className="art bg-[#f4f7f6] p-6 flex-col justify-between items-stretch">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#5c5c5c] pb-3 border-b border-[#dedede]">
                  <span>EDGE CCTV PIPELINE</span>
                  <span className="text-emerald-700 font-bold">38+ FPS</span>
                </div>

                <div className="my-auto space-y-2 text-left font-mono text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#dedede] flex justify-between">
                    <span className="text-[#5c5c5c]">Architecture:</span>
                    <span className="font-semibold text-[#242424]">MobileNetV2</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#dedede] flex justify-between">
                    <span className="text-[#5c5c5c]">Optimization:</span>
                    <span className="font-semibold text-[#242424]">Post-Training Quantization (INT8)</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#dedede] flex justify-between">
                    <span className="text-[#5c5c5c]">Preprocessing:</span>
                    <span className="font-semibold text-[#242424]">OpenCV Frame Difference Buffer</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#5c5c5c] pt-2 border-t border-[#dedede] flex justify-between">
                  <span>REAL-TIME INFERENCE</span>
                  <span>LOW HARDWARE FOOTPRINT</span>
                </div>
              </div>
              <span className="project-open" aria-hidden="true">↗</span>
            </div>

            <div className="pt-4">
              <div className="project-meta">
                <span>PROJECT</span>
                <span>02</span>
              </div>
              <h3 className="text-[#242424] font-[500] group-hover:text-[#b11f4b] transition-colors">
                {secondary[0].title}
              </h3>
              <p className="text-sm text-[#5c5c5c] mt-2 leading-[1.65]">
                A real-time CCTV accident detection pipeline using MobileNetV2, optimized for edge hardware through quantization and OpenCV frame preprocessing.
              </p>
              <div className="disciplines">
                Python · TensorFlow · MobileNetV2 · OpenCV · Quantization
              </div>
            </div>
          </a>
        </article>

        {/* Project 3: U-Short */}
        <article className="project-card group">
          <a
            href={secondary[1].github}
            target="_blank"
            rel="noreferrer"
            className="block no-underline text-inherit"
          >
            <div className="project-art">
              <div className="art bg-[#f5f8fb] p-6 flex-col justify-between items-stretch">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#5c5c5c] pb-3 border-b border-[#dedede]">
                  <span>FASTAPI &amp; REDIS SERVICE</span>
                  <span className="text-sky-700 font-bold">&lt; 3ms LOOKUP</span>
                </div>

                <div className="my-auto space-y-2 text-left font-mono text-xs">
                  <div className="p-3 bg-white rounded-lg border border-[#dedede] flex justify-between">
                    <span className="text-[#5c5c5c]">Cache Layer:</span>
                    <span className="font-semibold text-[#242424]">Valkey / Redis O(1)</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#dedede] flex justify-between">
                    <span className="text-[#5c5c5c]">Persistence:</span>
                    <span className="font-semibold text-[#242424]">PostgreSQL</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-[#dedede] flex justify-between">
                    <span className="text-[#5c5c5c]">Automated Purge:</span>
                    <span className="font-semibold text-[#242424]">30-Day Expiry via pg_cron</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#5c5c5c] pt-2 border-t border-[#dedede] flex justify-between">
                  <span>CUSTOM ALIASES</span>
                  <span>HIGH CONCURRENCY</span>
                </div>
              </div>
              <span className="project-open" aria-hidden="true">↗</span>
            </div>

            <div className="pt-4">
              <div className="project-meta">
                <span>PROJECT</span>
                <span>03</span>
              </div>
              <h3 className="text-[#242424] font-[500] group-hover:text-[#b11f4b] transition-colors">
                {secondary[1].title}
              </h3>
              <p className="text-sm text-[#5c5c5c] mt-2 leading-[1.65]">
                A low-latency URL shortening service featuring custom aliases, automated link expiry using pg_cron, and Valkey caching for faster redirections.
              </p>
              <div className="disciplines">
                Python · FastAPI · PostgreSQL · Valkey / Redis · pg_cron
              </div>
            </div>
          </a>
        </article>

      </div>

    </section>
  );
};

export default Projects;
