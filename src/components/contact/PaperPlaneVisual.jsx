import React from "react";

export const PaperPlaneVisual = ({ className = "w-14 h-14" }) => {
  return (
    <div className={`relative ${className} select-none pointer-events-none drop-shadow-md`}>
      <svg
        viewBox="0 0 100 80"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="plane-drop" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="5" stdDeviation="3" floodColor="#8c7866" floodOpacity="0.25" />
          </filter>
        </defs>

        <g filter="url(#plane-drop)">
          {/* Underside / Keel (Shadow) */}
          <polygon points="50,42 12,68 88,14" fill="#d8cec1" stroke="#b0a495" strokeWidth="0.8" />

          {/* Left Wing (Soft tone) */}
          <polygon points="88,14 12,68 45,40" fill="#f0e9df" stroke="#b0a495" strokeWidth="0.8" />

          {/* Right Main Wing (Highlight / Bright top face) */}
          <polygon points="88,14 45,40 24,18" fill="#ffffff" stroke="#b0a495" strokeWidth="0.8" />

          {/* Folded Center Spine Crease */}
          <polygon points="88,14 45,40 50,42" fill="#e5ddd2" stroke="#9e9182" strokeWidth="0.6" />

          {/* Tiny Pink Tip Accent (Prerna's Brand Touch) */}
          <polygon points="88,14 80,19 82,23" fill="#f7b4c6" stroke="#b11f4b" strokeWidth="0.5" />

          {/* Sharp Nose Point Highlight */}
          <circle cx="88" cy="14" r="1.2" fill="#b11f4b" />
        </g>
      </svg>
    </div>
  );
};

export default PaperPlaneVisual;
