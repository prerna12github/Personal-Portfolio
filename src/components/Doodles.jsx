import React from "react";

// Cute 4-point sparkle star
export const Sparkle = ({ className = "w-5 h-5 text-yellow-400", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

// Cute hand-drawn star
export const HandStar = ({ className = "w-5 h-5 text-amber-400", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0.5"
    className={`inline-block ${className}`}
    {...props}
  >
    <path d="M12 2.5l2.7 6.3 6.8.6-5.1 4.5 1.5 6.6-5.9-3.5-5.9 3.5 1.5-6.6-5.1-4.5 6.8-.6L12 2.5z" />
  </svg>
);

// Cute 5-petal flower doodle (inspired by Tanuja's cute flower accent)
export const FlowerDoodle = ({ className = "w-6 h-6 text-pink-400", ...props }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={`inline-block ${className}`}
    {...props}
  >
    <circle cx="50" cy="28" r="16" />
    <circle cx="71" cy="43" r="16" />
    <circle cx="63" cy="68" r="16" />
    <circle cx="37" cy="68" r="16" />
    <circle cx="29" cy="43" r="16" />
    <circle cx="50" cy="50" r="12" fill="#FDE047" />
  </svg>
);

// Hand-drawn sketchy underline
export const HandUnderline = ({ className = "text-rose-400 w-full h-3", ...props }) => (
  <svg
    viewBox="0 0 240 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    preserveAspectRatio="none"
    {...props}
  >
    <path
      d="M3 11C45 3.5 130 2 237 13C170 8 85 9 15 14"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Hand-drawn curved arrow with arrowhead
export const CurvedArrow = ({ className = "w-16 h-12 text-stone-500", ...props }) => (
  <svg
    viewBox="0 0 80 50"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M10 15 C 30 5, 55 10, 68 35" />
    <path d="M56 36 L 68 36 L 68 24" />
  </svg>
);

// Washi Tape strip on top of cards
export const WashiTape = ({
  color = "yellow",
  className = "w-24 h-5 -top-2.5 left-1/2 -translate-x-1/2",
  rotation = "-1deg"
}) => {
  const colorMap = {
    yellow: "bg-amber-100/90 border-amber-200/80 text-amber-700",
    pink: "bg-rose-100/90 border-rose-200/80 text-rose-700",
    green: "bg-emerald-100/90 border-emerald-200/80 text-emerald-700",
    blue: "bg-sky-100/90 border-sky-200/80 text-sky-700",
    peach: "bg-orange-100/90 border-orange-200/80 text-orange-700",
    lavender: "bg-purple-100/90 border-purple-200/80 text-purple-700"
  };

  return (
    <div
      style={{ transform: `rotate(${rotation})` }}
      className={`absolute z-10 border-t border-b border-dashed backdrop-blur-[1px] opacity-90 pointer-events-none rounded-[1px] shadow-sm ${colorMap[color] || colorMap.yellow} ${className}`}
    >
      <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.1)_4px,rgba(0,0,0,0.1)_8px)]" />
    </div>
  );
};

// Cute Pushpin for scrapbook timeline items
export const PushPin = ({ className = "w-5 h-5 text-rose-500", ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    {...props}
  >
    <circle cx="12" cy="7" r="5" />
    <path d="M10 11H14V17L12 22L10 17V11Z" />
    <ellipse cx="12" cy="7" rx="2" ry="1.2" fill="#FFFFFF" opacity="0.6" />
  </svg>
);

// Hand-drawn speech bubble or sticker badge
export const StickerBadge = ({ children, color = "yellow", className = "", rotate = "-2deg" }) => {
  const colorStyles = {
    yellow: "bg-[#FEFCE8] text-[#854D0E] border-[#FACC15]/60 hover:border-[#EAB308]",
    pink: "bg-[#FDF2F8] text-[#9D174D] border-[#F472B6]/60 hover:border-[#EC4899]",
    blue: "bg-[#F0F9FF] text-[#075985] border-[#38BDF8]/60 hover:border-[#0284C7]",
    green: "bg-[#F0FDF4] text-[#166534] border-[#4ADE80]/60 hover:border-[#22C55E]",
    peach: "bg-[#FFF7ED] text-[#9A3412] border-[#FB923C]/60 hover:border-[#F97316]",
    lavender: "bg-[#FAF5FF] text-[#6B21A8] border-[#C084FC]/60 hover:border-[#A855F7]"
  };

  return (
    <span
      style={{ transform: `rotate(${rotate})` }}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-[2px_2px_0px_rgba(40,30,20,0.06)] transition-transform duration-200 hover:scale-105 ${colorStyles[color] || colorStyles.yellow} ${className}`}
    >
      {children}
    </span>
  );
};
