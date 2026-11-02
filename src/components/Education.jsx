import React from "react";
import { educationData, achievementData } from "../data/portfolioData";

export const Education = () => {
  return (
    <section id="education" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <p className="eyebrow mb-2">ACADEMIC BACKGROUND</p>
          <h2>
            Education &amp; <em>Honors.</em>
          </h2>
        </div>
        <p className="text-xs font-mono text-[#5c5c5c] tracking-widest uppercase">
          CREDENTIALS
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Education Timeline */}
        <div className="lg:col-span-8 space-y-8">
          {educationData.map((item, idx) => (
            <div
              key={item.degree}
              className="p-6 sm:p-7 rounded-[16px] bg-white border border-[#dedede] shadow-soft relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#dedede]">
                <span className="text-xs font-mono text-[#b11f4b] font-medium">
                  {item.period}
                </span>
                <span className="text-[11px] font-mono text-[#5c5c5c] uppercase tracking-wider">
                  {item.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#242424] mb-1">
                {item.degree}
              </h3>

              <div className="text-sm font-medium text-[#5c5c5c] mb-3">
                {item.institution}
              </div>

              <p className="text-xs sm:text-sm text-[#5c5c5c] leading-[1.65]">
                {item.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Competitive Achievement Card */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-[16px] bg-[#fffdfa] border border-[#f4c244] shadow-soft text-left">
          <p className="eyebrow text-[#b11f4b] mb-2">COMPETITIVE EXAMINATION</p>
          <h3 className="text-lg font-semibold text-[#242424] mb-1">
            {achievementData.title}
          </h3>
          <p className="text-xs font-mono text-[#5c5c5c] mb-4">
            {achievementData.organization}
          </p>
          <p className="text-xs sm:text-sm text-[#5c5c5c] leading-[1.7]">
            {achievementData.description}
          </p>
          <div className="mt-5 pt-4 border-t border-[#dedede] text-[11px] font-mono text-[#242424]">
            STATEWIDE MERIT RANK 62
          </div>
        </div>

      </div>

    </section>
  );
};

export default Education;
