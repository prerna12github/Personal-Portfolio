import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MailboxVisual = ({ status, slotRef }) => {
  const isDelivered = status === "delivered";
  const isIncoming = status === "flying" || status === "delivering";

  return (
    <div className="relative flex flex-col items-center justify-end select-none">
      {/* Floating hearts / sparkles on successful delivery */}
      <AnimatePresence>
        {isDelivered && (
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none z-30">
            {/* Heart 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: -10, scale: 0.3, rotate: -15 }}
              animate={{ opacity: [0, 1, 1, 0], y: -50, x: -28, scale: 1.2, rotate: -25 }}
              transition={{ duration: 2.2, ease: "easeOut", times: [0, 0.2, 0.8, 1] }}
              className="absolute text-[#e5487d] text-xl"
            >
              ♥
            </motion.div>

            {/* Heart 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: 0, scale: 0.3, rotate: 0 }}
              animate={{ opacity: [0, 1, 1, 0], y: -65, x: 6, scale: 1.4, rotate: 12 }}
              transition={{ duration: 2.5, ease: "easeOut", delay: 0.15, times: [0, 0.2, 0.8, 1] }}
              className="absolute text-[#b11f4b] text-2xl"
            >
              ♥
            </motion.div>

            {/* Heart 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10, x: 12, scale: 0.3, rotate: 15 }}
              animate={{ opacity: [0, 1, 1, 0], y: -45, x: 26, scale: 1.1, rotate: 28 }}
              transition={{ duration: 2.0, ease: "easeOut", delay: 0.3, times: [0, 0.2, 0.8, 1] }}
              className="absolute text-[#f7b4c6] text-lg"
            >
              ♥
            </motion.div>

            {/* Sparkle star */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0, 1.3, 0], y: -35, x: -4 }}
              transition={{ duration: 1.8, delay: 0.25 }}
              className="absolute text-[#f4c244] text-xs font-serif"
            >
              ✦
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SVG Mailbox Illustration */}
      <svg
        viewBox="0 0 240 280"
        className="w-[200px] sm:w-[230px] md:w-[240px] h-auto drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="mb-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffbf7" />
            <stop offset="100%" stopColor="#f2eae1" />
          </linearGradient>

          <linearGradient id="mb-roof-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b11f4b" />
            <stop offset="100%" stopColor="#871336" />
          </linearGradient>

          <linearGradient id="mb-post-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8d6b4f" />
            <stop offset="50%" stopColor="#a37e5e" />
            <stop offset="100%" stopColor="#78593e" />
          </linearGradient>

          <linearGradient id="mb-flag-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea6045" />
            <stop offset="100%" stopColor="#b11f4b" />
          </linearGradient>

          <filter id="mb-soft-shadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#968273" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* --- WOODEN POST --- */}
        <rect x="108" y="145" width="24" height="110" rx="3" fill="url(#mb-post-grad)" stroke="#5e4530" strokeWidth="1.5" />
        {/* Wood grain lines */}
        <path d="M115,160 Q117,190 115,225" stroke="#75543a" strokeWidth="1" strokeLinecap="round" />
        <path d="M123,150 Q121,185 124,240" stroke="#5e4530" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        {/* Support bracket */}
        <path d="M96,155 L108,175 L108,155 Z" fill="#78593e" stroke="#5e4530" strokeWidth="1.2" />
        <path d="M144,155 L132,175 L132,155 Z" fill="#78593e" stroke="#5e4530" strokeWidth="1.2" />

        {/* --- GRASS MOUND AT BASE --- */}
        <ellipse cx="120" cy="256" rx="65" ry="14" fill="#a4be9b" stroke="#79986e" strokeWidth="1.5" />
        <ellipse cx="120" cy="254" rx="55" ry="10" fill="#b9d3b0" opacity="0.7" />
        {/* Grass tufts */}
        <path d="M78,252 Q82,242 85,248 Q88,238 92,250" stroke="#5c7a52" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M148,252 Q152,240 156,248 Q160,242 163,252" stroke="#5c7a52" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Tiny daisies blooming at the base (Tanuja doodle style) */}
        <g transform="translate(68, 240)">
          {/* Stem */}
          <path d="M8,14 Q9,6 8,0" stroke="#5c7a52" strokeWidth="1.2" fill="none" />
          {/* Petals */}
          <circle cx="4" cy="-2" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="12" cy="-2" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="8" cy="-6" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="8" cy="2" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          {/* Center */}
          <circle cx="8" cy="-2" r="2.5" fill="#f4c244" />
        </g>
        <g transform="translate(162, 242) scale(0.85)">
          <path d="M8,14 Q7,7 8,0" stroke="#5c7a52" strokeWidth="1.2" fill="none" />
          <circle cx="4" cy="-2" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="12" cy="-2" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="8" cy="-6" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="8" cy="2" r="3" fill="#ffffff" stroke="#dedede" strokeWidth="0.6" />
          <circle cx="8" cy="-2" r="2.5" fill="#ea6045" />
        </g>

        {/* --- MAILBOX TUNNEL & BODY --- */}
        {/* Mailbox base plate */}
        <rect x="52" y="140" width="136" height="10" rx="3" fill="#4a4a4a" stroke="#242424" strokeWidth="1.5" />

        {/* Main box tunnel body */}
        <path
          d="M60,140 L60,82 C60,48 76,32 120,32 C164,32 180,48 180,82 L180,140 Z"
          fill="url(#mb-body-grad)"
          stroke="#242424"
          strokeWidth="2"
          filter="url(#mb-soft-shadow)"
        />

        {/* Roof Accent Band (Tanuja burgundy) */}
        <path
          d="M58,80 C58,45 75,28 120,28 C165,28 182,45 182,80 L182,88 C182,53 165,36 120,36 C75,36 58,53 58,88 Z"
          fill="url(#mb-roof-grad)"
          stroke="#730e2c"
          strokeWidth="0.8"
        />

        {/* Front Arched Door Rim */}
        <path
          d="M68,138 L68,84 C68,54 82,42 120,42 C158,42 172,54 172,84 L172,138 Z"
          fill="#fbf7f2"
          stroke="#d4c9be"
          strokeWidth="1.2"
        />

        {/* Door Latch Knob */}
        <circle cx="76" cy="112" r="3.5" fill="#f4c244" stroke="#8d6b4f" strokeWidth="1" />

        {/* PRERNA Nameplate */}
        <g transform="translate(120, 68)">
          <rect x="-36" y="-9" width="72" height="18" rx="4" fill="#fffdfa" stroke="#dedede" strokeWidth="1" />
          <rect x="-34" y="-7" width="68" height="14" rx="2" fill="#fff8f1" />
          <text
            x="0"
            y="3.5"
            textAnchor="middle"
            fill="#242424"
            fontSize="8.5"
            fontWeight="700"
            fontFamily="Consolas, 'Courier New', Courier, monospace"
            letterSpacing="1.5"
          >
            PRERNA
          </text>
        </g>

        {/* --- LETTER SLOT (THE TARGET FOR THE PLANE) --- */}
        <g transform="translate(120, 105)">
          {/* Invisible ref anchor box for exact coordinates */}
          <rect
            ref={slotRef}
            x="-44"
            y="-14"
            width="88"
            height="28"
            fill="transparent"
            stroke="none"
            pointerEvents="none"
          />

          {/* Slot bezel border */}
          <rect
            x="-44"
            y="-12"
            width="88"
            height="24"
            rx="4"
            fill="#e8ded4"
            stroke="#242424"
            strokeWidth="1.5"
          />

          {/* Inner dark opening slot where plane disappears */}
          <rect
            x="-38"
            y="-6"
            width="76"
            height="12"
            rx="2"
            fill="#1c1917"
          />

          {/* Hinged Metallic Slot Flap */}
          <motion.g
            animate={
              isIncoming
                ? { rotateX: -45, y: -2 }
                : isDelivered
                ? { rotateX: 0, y: 0 }
                : { rotateX: 0, y: 0 }
            }
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformOrigin: "0px -7px" }}
          >
            <rect
              x="-40"
              y="-7"
              width="80"
              height="14"
              rx="3"
              fill={isIncoming ? "#fcedda" : "#ffffff"}
              stroke="#b11f4b"
              strokeWidth="1.2"
            />
            {/* Slot text */}
            <text
              x="0"
              y="2.5"
              textAnchor="middle"
              fill="#b11f4b"
              fontSize="7"
              fontWeight="600"
              fontFamily="Consolas, 'Courier New', Courier, monospace"
              letterSpacing="1"
            >
              {isIncoming ? "OPEN · INCOMING" : "MAIL"}
            </text>
          </motion.g>
        </g>

        {/* --- POSTAL FLAG ON THE RIGHT SIDE --- */}
        {/* Pivot screw */}
        <circle cx="180" cy="115" r="4.5" fill="#5c5c5c" stroke="#242424" strokeWidth="1" />
        <circle cx="180" cy="115" r="1.5" fill="#dedede" />

        {/* The Animated Flag Arm & Paddle */}
        <motion.g
          animate={isDelivered ? { rotate: -90 } : { rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 14,
            mass: 0.8,
          }}
          style={{ transformOrigin: "180px 115px" }}
        >
          {/* Flag stick arm */}
          <rect x="178" y="112" width="46" height="5.5" rx="2" fill="#242424" />
          {/* Red Flag Paddle */}
          <path
            d="M214,94 L236,94 Q240,94 240,98 L240,118 L214,118 Z"
            fill="url(#mb-flag-grad)"
            stroke="#871336"
            strokeWidth="1.2"
          />
          {/* Little flag embossed crease */}
          <path d="M220,99 L220,113" stroke="#f7b4c6" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        </motion.g>
      </svg>
    </div>
  );
};

export default MailboxVisual;
