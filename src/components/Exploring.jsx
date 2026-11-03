import React from "react";
import { skillsData } from "../data/portfolioData";

const explorationCards = [
  {
    number: "01",
    title: "Agentic AI & Workflows",
    detail: "Multi-agent systems, state graphs, tool invocation, and human-in-the-loop review loops using LangGraph.",
    tags: "LangGraph · Agent Orchestration · State Machines",
    bgClass: "bg-[#ea6045]/[0.08] border-[#ea6045]/30 hover:border-[#ea6045]"
  },
  {
    number: "02",
    title: "RAG & Semantic Retrieval",
    detail: "Intelligent chunking strategies, local sentence embeddings, vector search, and citation provenance verification.",
    tags: "Sentence-Transformers · Vector Indexing · Provenance",
    bgClass: "bg-[#70a4c2]/[0.09] border-[#70a4c2]/30 hover:border-[#70a4c2]"
  },
  {
    number: "03",
    title: "Large Language Models (LLMs)",
    detail: "Prompt optimization, structured JSON outputs, context window management, and foundation model APIs.",
    tags: "Gemini API · Structured Outputs · Prompting",
    bgClass: "bg-[#f4c244]/[0.1] border-[#f4c244]/30 hover:border-[#f4c244]"
  },
  {
    number: "04",
    title: "Machine Learning & Edge CV",
    detail: "Convolutional neural networks, MobileNetV2 architecture, OpenCV preprocessing, and post-training quantization.",
    tags: "TensorFlow · MobileNetV2 · OpenCV · Quantization",
    bgClass: "bg-[#f7b4c6]/[0.1] border-[#f7b4c6]/30 hover:border-[#f7b4c6]"
  }
];

export const Exploring = () => {
  return (
    <section id="exploring" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          {/* <p className="eyebrow mb-2">CURRENT LEARNING PLAYGROUND</p>*/}
          <h2>
            Active <em>Exploration.</em>
          </h2>
        </div>
        <p className="text-xs font-mono text-[#5c5c5c] tracking-widest uppercase">
          READING · EXPERIMENTING · BUILDING
        </p>
      </div>

      {/* Tanuja's Studio Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {explorationCards.map((item) => (
          <div
            key={item.number}
            className={`p-6 rounded-[16px] border transition-all flex flex-col justify-between ${item.bgClass}`}
          >
            <div>
              <span className="font-mono text-sm text-[#b11f4b] font-bold block mb-3">
                {item.number}
              </span>
              <h3 className="text-lg font-semibold text-[#242424] mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#5c5c5c] leading-[1.65] mb-6">
                {item.detail}
              </p>
            </div>

            <div className="pt-3 border-t border-black/5 text-[10px] font-mono text-[#78716C] tracking-wide">
              {item.tags}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Exploring;
