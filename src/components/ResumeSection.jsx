import React, { useState } from "react";
import { FiDownload, FiExternalLink, FiFileText, FiCheck, FiPrinter, FiEye } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { Sparkle, WashiTape, HandStar } from "./Doodles";

export const ResumeSection = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-mono mb-3 border border-[#FDE68A]">
          <FiFileText className="w-3.5 h-3.5 text-amber-600" />
          <span>curriculum vitae</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          My <span className="text-[#D95338]">Resume</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-xl">
          Clean, verified resume overview with direct one-click PDF download 📄
        </p>
      </div>

      {/* Main Resume Card Container */}
      <div className="max-w-4xl mx-auto relative">
        <WashiTape color="yellow" rotation="-1.2deg" className="w-36 h-6 -top-3 left-1/2 -translate-x-1/2 z-20" />

        <div className="bg-white rounded-3xl border-2 border-[#E5DACD] shadow-[0_12px_40px_-6px_rgba(70,50,30,0.1)] p-6 sm:p-10 text-left relative">
          
          {/* Top Bar with Download & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#F0EBE1]">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#9C8F80] font-bold block">
                Official Document · Updated 2026
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2B2621] mt-0.5">
                Prerna Kumari Sharma · CV
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Direct Download Button */}
              <a
                href={personalInfo.resumePath}
                download="Prerna_Kumari_Sharma_Resume.pdf"
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2B2621] text-white text-xs sm:text-sm font-semibold hover:bg-[#D95338] transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <FiCheck className="w-4 h-4 text-emerald-400" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <FiDownload className="w-4 h-4" />
                    <span>Download PDF</span>
                  </>
                )}
              </a>

              {/* View in New Tab */}
              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FAF7F2] text-[#4A4238] hover:text-[#2B2621] hover:bg-white border border-[#E5DACD] text-xs sm:text-sm font-medium transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>

          {/* Styled Document Sheet Preview */}
          <div className="bg-[#FCFBF9] rounded-2xl border border-[#EADBCE] p-6 sm:p-8 font-sans shadow-inner space-y-6">
            
            {/* Header of Resume */}
            <div className="text-center pb-6 border-b border-[#EADBCE]">
              <h4 className="text-2xl font-extrabold text-[#2B2621] tracking-tight">
                {personalInfo.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#706456] mt-1 font-mono">
                {personalInfo.location} · {personalInfo.email}
              </p>
              <div className="flex justify-center items-center gap-3 text-xs text-[#8A7D6F] mt-1.5 font-mono">
                <span>github.com/prerna12github</span>
                <span>•</span>
                <span>linkedin.com/in/prerna-kumari-sharma</span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95338] border-b border-[#EADBCE] pb-1 mb-2">
                Career Objective
              </h5>
              <p className="text-xs sm:text-sm text-[#4A4238] leading-relaxed">
                Ambitious MCA student focusing on AI, Machine Learning, and modern full-stack development. Experienced in optimizing and deploying quantized deep learning models on resource-constrained devices, as well as developing robust backend services. Motivated to solve real-world engineering challenges in collaborative, high-impact environments.
              </p>
            </div>

            {/* Featured Projects Preview */}
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95338] border-b border-[#EADBCE] pb-1 mb-3">
                Key Projects
              </h5>
              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between items-baseline font-bold text-[#2B2621]">
                    <span>Agentic Literature Review Assistant</span>
                    <span className="text-[11px] font-mono text-[#8A7D6F]">LangGraph, Gemini, MiniLM</span>
                  </div>
                  <p className="text-xs text-[#524B43] mt-0.5">
                    Human-in-the-loop multi-agent system automating end-to-end literature reviews with MiniLM claim clustering, Gemini conflict analysis, and strict citation provenance.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-[#2B2621]">
                    <span>Accident Detection Using CNN</span>
                    <span className="text-[11px] font-mono text-[#8A7D6F]">TensorFlow, MobileNetV2, OpenCV</span>
                  </div>
                  <p className="text-xs text-[#524B43] mt-0.5">
                    Real-time CCTV accident detection pipeline with post-training quantization and frame preprocessing optimized for edge devices.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline font-bold text-[#2B2621]">
                    <span>U-Short — URL Shortener</span>
                    <span className="text-[11px] font-mono text-[#8A7D6F]">FastAPI, PostgreSQL, Redis, pg_cron</span>
                  </div>
                  <p className="text-xs text-[#524B43] mt-0.5">
                    Low-latency URL shortening with custom aliases, 30-day automated link expiry, and Valkey/Redis cache acceleration.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Achievement Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95338] border-b border-[#EADBCE] pb-1 mb-2">
                  Education
                </h5>
                <div className="space-y-2 text-xs">
                  <div>
                    <strong className="text-[#2B2621] block">MCA (Master of Computer Applications)</strong>
                    <span className="text-[#6B6155]">Kalyani Government Engineering College (2025–Present)</span>
                  </div>
                  <div>
                    <strong className="text-[#2B2621] block">B.Sc. (Hons) Computer Science</strong>
                    <span className="text-[#6B6155]">Kalyani Mahavidyalaya (2022–2025) · CGPA: 7.96</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[#D95338] border-b border-[#EADBCE] pb-1 mb-2">
                  Achievement & Skills
                </h5>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-[#FEF9C3] text-[#854D0E] font-medium border border-[#FDE047]">
                    🏆 WBJECA 2025: All-Bengal Rank 62
                  </div>
                  <p className="text-[#524B43]">
                    <strong>Stack:</strong> Python, JavaScript, TypeScript, React, Next.js, FastAPI, PostgreSQL, Redis, OpenCV, TensorFlow.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick note on asset location */}
          <div className="mt-6 flex items-center justify-between text-xs text-[#8A7D6F] font-mono pt-3 border-t border-[#F0EBE1]">
            <span>Asset file: /public/Prerna_Kumari_Sharma_Resume.pdf</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Verified & Direct Download Ready
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ResumeSection;
