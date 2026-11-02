import React from "react";
import { FiBookOpen, FiAward, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { educationTimeline, achievements } from "../data/portfolioData";
import { Sparkle, WashiTape, HandStar, PushPin, StickerBadge } from "./Doodles";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E40AF] text-xs font-mono mb-3 border border-[#BFDBFE]">
          <FiBookOpen className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>academic milestones</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B2621] tracking-tight">
          Education & <span className="text-[#D95338]">Achievements</span>
        </h2>
        
        <p className="mt-2 text-stone-600 font-hand text-xl max-w-xl">
          Academic foundation in Computer Science & competitive honors 🎓
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Timeline of Education */}
        <div className="lg:col-span-8 relative">
          
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-5 sm:left-7 w-0.5 bg-[#EADBCE] border-r border-dashed border-[#D6C7B2] z-0" />

          <div className="space-y-8">
            {educationTimeline.map((item, idx) => (
              <div key={item.degree} className="relative flex items-start gap-5 sm:gap-7 z-10 text-left">
                
                {/* Timeline Pin Indicator */}
                <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-2xl bg-white border-2 border-[#E5DACD] flex items-center justify-center flex-shrink-0 shadow-xs mt-1">
                  <PushPin className="w-5 h-5 text-[#D95338]" />
                </div>

                {/* Timeline Content Card */}
                <div className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#E5DACD] shadow-xs hover:shadow-md transition-shadow relative">
                  
                  {/* Washi Tape */}
                  <WashiTape
                    color={idx === 0 ? "pink" : "blue"}
                    rotation={idx === 0 ? "-1.5deg" : "1.2deg"}
                    className="w-24 h-5 -top-2.5 right-8"
                  />

                  {/* Header info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#706456] border border-[#EADBCE]">
                      <FiCalendar className="w-3.5 h-3.5 text-[#D95338]" />
                      {item.period}
                    </span>

                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-[#2B2621] tracking-tight">
                    {item.degree}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#6E6358] mb-1">
                    {item.institution} <span className="text-[#A89F91]">({item.affiliation})</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-[#8A7E72] mb-4 font-mono">
                    <FiMapPin className="w-3.5 h-3.5 text-[#D95338]" />
                    <span>{item.location}</span>
                  </div>

                  {/* Image & Description */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#FAF7F2] p-3.5 rounded-2xl border border-[#EADBCE]">
                    <div className="w-full sm:w-28 h-20 rounded-xl overflow-hidden border border-[#E5DACD] flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.institution}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-[#524B43] leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Key Achievements Card */}
        <div className="lg:col-span-4 relative text-left">
          <WashiTape color="yellow" rotation="2deg" className="w-32 h-6 -top-3 left-8 z-20" />

          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#FDE68A] shadow-[0_8px_30px_-6px_rgba(234,179,8,0.1)] relative">
            
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2.5 rounded-xl bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047]">
                <FiAward className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#92400E] font-bold block">
                  Recognition
                </span>
                <h3 className="text-base font-bold text-[#2B2621]">
                  State Rank Honor
                </h3>
              </div>
            </div>

            {achievements.map((ach) => (
              <div key={ach.title} className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#FEF08A]">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FEF9C3] text-[#854D0E] border border-[#FDE047] mb-2 font-mono">
                    {ach.highlightBadge}
                  </span>
                  
                  <h4 className="text-sm font-bold text-[#2B2621] leading-snug">
                    {ach.title}
                  </h4>
                  
                  <p className="text-xs text-[#7A7065] mt-1 font-mono">
                    {ach.organization} · {ach.year}
                  </p>

                  <p className="text-xs text-[#4A4238] mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold mb-1">
                    <FiCheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                    <span>Competitive Merit</span>
                  </div>
                  Secured admission into West Bengal's premier engineering institute, Kalyani Government Engineering College, through statewide excellence.
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
