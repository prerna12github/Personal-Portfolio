import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiRefreshCw, FiMail, FiAlertCircle } from "react-icons/fi";
import PaperPlaneVisual from "./PaperPlaneVisual";
import MailboxVisual from "./MailboxVisual";

export const AnubhutiContactScene = ({
  formData,
  onLaunchPlane,
  onResetToLetter,
  deliveryStatus, // "launch" | "flying" | "delivered" | "error"
  serverError,
  isSubmitting,
  reducedMotion,
}) => {
  // Dragging & aim state
  const [isDragging, setIsDragging] = useState(false);
  const [pull, setPull] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const startPos = useRef({ x: 0, y: 0 });

  // Refs for responsive coordinate calculation
  const stageBoxRef = useRef(null);
  const slingshotRef = useRef(null);
  const mailboxRef = useRef(null);
  const slotRef = useRef(null);

  // Trajectory coordinates
  const [trajectory, setTrajectory] = useState({
    startX: 140,
    startY: 280,
    midX: 380,
    midY: 90,
    endX: 620,
    endY: 230,
  });

  // Pull limits
  const MAX_PULL_X = -120;
  const MAX_PULL_Y = 45;
  const pullDistance = Math.hypot(pull.x, pull.y);
  const tension = Math.min(1, Math.abs(pull.x) / Math.abs(MAX_PULL_X));
  const isReadyToLaunch = Math.abs(pull.x) >= 35;

  // Active step in Anubhuti-inspired step indicator:
  // 0: Pull back | 1: Aim at mailbox | 2: Let go / Flying / Delivered
  const activeStep =
    deliveryStatus === "flying" || deliveryStatus === "delivered"
      ? 2
      : isDragging && isReadyToLaunch
      ? 1
      : isDragging
      ? 0
      : 0;

  // Slingshot anchor pegs relative to the dock container (220x160)
  const PEG_LEFT = { x: 50, y: 45 };
  const PEG_RIGHT = { x: 50, y: 115 };
  const planeRest = { x: 54, y: 80 };
  const planePos = {
    x: planeRest.x + pull.x,
    y: planeRest.y + pull.y,
  };

  // Measure exact pixel coordinates between slingshot and mailbox
  const updateTrajectory = () => {
    if (!stageBoxRef.current || !slingshotRef.current || !slotRef.current) return;
    const stageRect = stageBoxRef.current.getBoundingClientRect();
    const slingRect = slingshotRef.current.getBoundingClientRect();
    const slotRect = slotRef.current.getBoundingClientRect();

    const startX = slingRect.left + 54 - stageRect.left;
    const startY = slingRect.top + 80 - stageRect.top;
    const endX = slotRect.left + slotRect.width / 2 - stageRect.left;
    const endY = slotRect.top + slotRect.height / 2 - stageRect.top;

    const midX = (startX + endX) / 2;
    const dist = Math.abs(endX - startX);
    const midY = Math.min(startY, endY) - Math.max(70, dist * 0.32);

    setTrajectory({ startX, startY, midX, midY, endX, endY });
  };

  useEffect(() => {
    updateTrajectory();
    const t1 = setTimeout(updateTrajectory, 60);
    const t2 = setTimeout(updateTrajectory, 220);
    window.addEventListener("resize", updateTrajectory);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", updateTrajectory);
    };
  }, []);

  // Compute 12 points along quadratic bezier curve
  const sampleCurve = (p0, p1, p2, count = 12) => {
    const points = [];
    for (let i = 0; i <= count; i++) {
      const t = i / count;
      const x = (1 - t) * (1 - t) * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x;
      const y = (1 - t) * (1 - t) * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y;

      const dx = 2 * (1 - t) * (p1.x - p0.x) + 2 * t * (p2.x - p1.x);
      const dy = 2 * (1 - t) * (p1.y - p0.y) + 2 * t * (p2.y - p1.y);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      points.push({ x, y, angle });
    }
    return points;
  };

  const flightPoints = sampleCurve(
    { x: trajectory.startX + pull.x, y: trajectory.startY + pull.y },
    { x: trajectory.midX, y: trajectory.midY },
    { x: trajectory.endX, y: trajectory.endY },
    12
  );

  // Pointer dragging handlers with pointer capture
  const handlePointerDown = (e) => {
    if (deliveryStatus !== "launch" || isSubmitting) return;
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;

    const clampedX = Math.max(MAX_PULL_X, Math.min(5, dx));
    const clampedY = Math.max(-MAX_PULL_Y, Math.min(MAX_PULL_Y, dy));
    setPull({ x: clampedX, y: clampedY });
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    if (Math.abs(pull.x) >= 35) {
      triggerLaunch({ pullX: pull.x, pullY: pull.y });
    } else {
      setPull({ x: 0, y: 0 });
    }
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setPull({ x: 0, y: 0 });
  };

  // Launch trigger
  const triggerLaunch = (pullData = { pullX: -55, pullY: 0 }) => {
    onLaunchPlane(pullData);

    // Spawn flight air stream puffs
    const newParts = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      delay: i * 0.16,
      scale: 0.6 + Math.random() * 0.5,
    }));
    setParticles(newParts);

    // Burst celebration particles around mailbox upon arrival (at ~1.5s)
    setTimeout(() => {
      const bursts = Array.from({ length: 18 }).map((_, i) => {
        const angle = (i / 18) * Math.PI * 2;
        const dist = 35 + Math.random() * 45;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 15,
          color: ["#b11f4b", "#ea6045", "#f4c244", "#f7b4c6", "#8d6b4f"][i % 5],
          size: 4 + Math.random() * 3,
        };
      });
      setConfetti(bursts);
    }, 1450);
  };

  // Rubber band color shift
  const cordColor = isReadyToLaunch ? "#b11f4b" : tension > 0.1 ? "#ea6045" : "#c4b5a5";
  const cordWidth = isReadyToLaunch ? 2.2 : tension > 0.1 ? 2.6 : 3.0;

  return (
    <div className="w-full relative select-none">
      {/* ========================================================================= */}
      {/* 1. ANUBHUTI-INSPIRED STEPS INDICATOR (TOP BAR) */}
      {/* ========================================================================= */}
      <div className="flex items-center justify-center sm:justify-start gap-3 mb-6 px-1">
        <ol className="flex items-center gap-1.5 sm:gap-2 text-[11px] font-mono tracking-wider">
          {/* Step 1: Pull back */}
          <li
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-300 ${
              activeStep === 0
                ? "bg-[#b11f4b] text-white shadow-xs font-semibold"
                : "bg-white/80 text-[#5c5c5c] border border-[#dedede]"
            }`}
          >
            <span
              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                activeStep === 0 ? "bg-white text-[#b11f4b] font-bold" : "bg-[#dedede] text-[#242424]"
              }`}
            >
              1
            </span>
            <span>PULL BACK</span>
          </li>

          <span className="text-[#dedede] text-xs">→</span>

          {/* Step 2: Aim at mailbox */}
          <li
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-300 ${
              activeStep === 1
                ? "bg-[#b11f4b] text-white shadow-xs font-semibold"
                : "bg-white/80 text-[#5c5c5c] border border-[#dedede]"
            }`}
          >
            <span
              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                activeStep === 1 ? "bg-white text-[#b11f4b] font-bold" : "bg-[#dedede] text-[#242424]"
              }`}
            >
              2
            </span>
            <span>AIM AT MAILBOX</span>
          </li>

          <span className="text-[#dedede] text-xs">→</span>

          {/* Step 3: Let go */}
          <li
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-300 ${
              activeStep === 2
                ? "bg-[#b11f4b] text-white shadow-xs font-semibold"
                : "bg-white/80 text-[#5c5c5c] border border-[#dedede]"
            }`}
          >
            <span
              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] ${
                activeStep === 2 ? "bg-white text-[#b11f4b] font-bold" : "bg-[#dedede] text-[#242424]"
              }`}
            >
              3
            </span>
            <span>LET GO</span>
          </li>
        </ol>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE ANUBHUTI-INSPIRED OPEN INTERACTIVE ARENA */}
      {/* ========================================================================= */}
      <div
        ref={stageBoxRef}
        className="relative bg-gradient-to-b from-[#fffbf7] via-[#fffdfa] to-[#fff8f1] rounded-[22px] border border-[#ded8cf] p-6 sm:p-10 shadow-soft overflow-visible min-h-[460px] sm:min-h-[480px] flex flex-col justify-between"
      >
        {/* Soft background landscape horizon line */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none border-b border-[#dedede]/50 bg-gradient-to-t from-[#f5eee6]/40 to-transparent rounded-b-[22px]"
        />

        {/* SVG Canvas for Dotted Trajectory Line, Slingshot & Particles */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
          fill="none"
        >
          <defs>
            {/* Soft shadow for flying plane */}
            <filter id="arena-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#968273" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* ONLY ONE SINGLE DOTTED TRAJECTORY LINE: Plane -> Mailbox Slot */}
          {/* Dynamically anchors to the plane whether resting or pulled back to aim */}
          {/* Disappears completely after the paper plane enters the mailbox */}
          <AnimatePresence>
            {deliveryStatus !== "delivered" && (
              <motion.path
                key="single-dotted-trajectory"
                initial={{ opacity: 0.35 }}
                animate={{
                  opacity: isDragging ? 0.75 : 0.35,
                  stroke: isDragging ? "#ea6045" : "#b11f4b",
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                }}
                d={`M ${isDragging ? trajectory.startX + pull.x : trajectory.startX} ${
                  isDragging ? trajectory.startY + pull.y : trajectory.startY
                } Q ${trajectory.midX} ${trajectory.midY} ${trajectory.endX} ${trajectory.endY}`}
                strokeWidth="2.2"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            )}
          </AnimatePresence>
        </svg>

        {/* ======================================================================= */}
        {/* FLYING PAPER PLANE (ACTIVE DURING "FLYING" STAGE) */}
        {/* ======================================================================= */}
        <AnimatePresence>
          {deliveryStatus === "flying" && (
            <motion.div
              initial={{
                x: flightPoints[0].x,
                y: flightPoints[0].y,
                rotate: flightPoints[0].angle,
                scale: 0.85,
                opacity: 1,
              }}
              animate={{
                x: flightPoints.map((p) => p.x),
                y: flightPoints.map((p) => p.y),
                rotate: flightPoints.map((p) => p.angle),
                scale: [0.85, 1.15, 1.05, 0.9, 0.65, 0.22],
                scaleX: [1.28, 1.25, 1.15, 1.05, 0.75, 0.25], // Velocity stretch
                scaleY: [0.85, 0.88, 0.95, 1.0, 0.75, 0.25],
                opacity: [1, 1, 1, 1, 0.85, 0], // Enters slot cleanly
              }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1.0],
              }}
              className="absolute origin-center pointer-events-none z-40 -translate-x-1/2 -translate-y-1/2"
            >
              <PaperPlaneVisual className="w-16 h-16 sm:w-20 sm:h-20" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ======================================================================= */}
        {/* MAIN ARENA SCENE: SLINGSHOT (LEFT) + MAILBOX (RIGHT) */}
        {/* ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end relative z-10 w-full min-h-[380px]">
          
          {/* --- LEFT: SLINGSHOT FORK & PLANE (OR CONFIRMATION WHEN DELIVERED) --- */}
          <div className="lg:col-span-7 flex flex-col justify-end w-full">
            
            {/* A. SLINGSHOT LAUNCHER (Visible when ready or flying) */}
            {(deliveryStatus === "launch" || deliveryStatus === "flying") && (
              <div
                ref={slingshotRef}
                className="relative w-full max-w-[420px] h-[220px] flex items-end justify-start select-none"
              >
                {/* SVG Slingshot Wooden Fork & Elastic Rubber Bands */}
                <svg
                  className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                  viewBox="0 0 240 220"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="anubhuti-wood" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8d6b4f" />
                      <stop offset="50%" stopColor="#a37e5e" />
                      <stop offset="100%" stopColor="#6e4d34" />
                    </linearGradient>
                  </defs>

                  {/* Ground base plate */}
                  <ellipse cx="50" cy="205" rx="35" ry="7" fill="#ded8cf" opacity="0.6" />

                  {/* Wooden Slingshot Y-Fork Stem */}
                  <path
                    d="M 44 205 L 44 140 Q 44 110 32 80 L 32 45 M 56 205 L 56 140 Q 56 110 68 80 L 68 45"
                    stroke="#5e4530"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M 44 205 L 44 135 Q 44 115 32 85 L 32 45 L 38 45 L 48 85 Q 50 110 52 85 L 62 45 L 68 45 L 68 85 Q 56 115 56 135 L 56 205 Z"
                    fill="url(#anubhuti-wood)"
                  />
                  {/* Wood grain markings */}
                  <path d="M48,155 Q49,175 48,195" stroke="#75543a" strokeWidth="1" strokeLinecap="round" />
                  <path d="M52,145 Q51,165 53,185" stroke="#5e4530" strokeWidth="0.8" opacity="0.7" />

                  {/* Brass Rings at Fork Tips */}
                  <circle cx={PEG_LEFT.x} cy={PEG_LEFT.y} r="5" fill="#f4c244" stroke="#8d6b4f" strokeWidth="1.2" />
                  <circle cx={PEG_LEFT.x} cy={PEG_LEFT.y} r="2.2" fill="#8d6b4f" />

                  <circle cx={PEG_RIGHT.x} cy={PEG_RIGHT.y} r="5" fill="#f4c244" stroke="#8d6b4f" strokeWidth="1.2" />
                  <circle cx={PEG_RIGHT.x} cy={PEG_RIGHT.y} r="2.2" fill="#8d6b4f" />

                  {/* Top Elastic Rubber Band (Top Peg -> Plane Tail) */}
                  {deliveryStatus === "launch" && (
                    <path
                      d={`M ${PEG_LEFT.x} ${PEG_LEFT.y} Q ${(PEG_LEFT.x + planePos.x) / 2} ${
                        (PEG_LEFT.y + planePos.y - 4) / 2
                      } ${planePos.x + 8} ${planePos.y - 4}`}
                      stroke={cordColor}
                      strokeWidth={cordWidth}
                      strokeLinecap="round"
                      className="transition-colors duration-150"
                    />
                  )}

                  {/* Bottom Elastic Rubber Band (Bottom Peg -> Plane Tail) */}
                  {deliveryStatus === "launch" && (
                    <path
                      d={`M ${PEG_RIGHT.x} ${PEG_RIGHT.y} Q ${(PEG_RIGHT.x + planePos.x) / 2} ${
                        (PEG_RIGHT.y + planePos.y + 4) / 2
                      } ${planePos.x + 8} ${planePos.y + 4}`}
                      stroke={cordColor}
                      strokeWidth={cordWidth}
                      strokeLinecap="round"
                      className="transition-colors duration-150"
                    />
                  )}
                </svg>

                {/* THE DRAGGABLE PAPER PLANE (RESTING IN SLINGSHOT POUCH) */}
                {deliveryStatus === "launch" && (
                  <motion.div
                    style={{
                      x: pull.x,
                      y: pull.y,
                      rotate: pull.x < 0 ? (pull.y / MAX_PULL_Y) * 18 - 18 : -18,
                      scale: isDragging ? 1.08 : 1,
                      touchAction: "none",
                    }}
                    animate={
                      !isDragging
                        ? {
                            x: 0,
                            y: 0,
                            rotate: -18,
                            transition: { type: "spring", stiffness: 450, damping: 18 },
                          }
                        : {}
                    }
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerCancel}
                    className={`absolute left-[54px] top-[48px] cursor-grab active:cursor-grabbing z-30 ${
                      isDragging ? "cursor-grabbing" : ""
                    }`}
                  >
                    <div className="relative">
                      <PaperPlaneVisual className="w-16 h-16 sm:w-20 sm:h-20" />

                      {/* Anubhuti-inspired Hint Badge above plane */}
                      {!isDragging && (
                        <div className="absolute -top-7 -left-4 pointer-events-none whitespace-nowrap bg-white/95 border border-[#ded8cf] px-2.5 py-0.5 rounded-full text-[11px] font-['Caveat'] text-[#b11f4b] shadow-xs flex items-center gap-1">
                          <span>← Drag me back</span>
                        </div>
                      )}

                      {/* Tension / Ready pill badge during dragging */}
                      {isDragging && (
                        <div
                          className={`absolute -top-7 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-xs transition-colors ${
                            isReadyToLaunch
                              ? "bg-[#b11f4b] text-white"
                              : "bg-[#fff8f1] text-[#b11f4b] border border-[#f7b4c6]"
                          }`}
                        >
                          {isReadyToLaunch ? "READY! RELEASE" : "AIM AT MAILBOX"}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* B. STAGE FIVE: DELIVERED CONFIRMATION NOTE (Warm, handmade, no green ticks) */}
            {deliveryStatus === "delivered" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="w-full max-w-[460px] bg-[#fff8f1] rounded-[18px] border border-[#ded8cf] p-7 sm:p-8 shadow-xs text-center relative"
              >
                {/* Tiny Tanuja flower doodle detail */}
                <div className="flex justify-center mb-2">
                  <svg className="w-5 h-5 text-[#b11f4b]" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="7" r="3" opacity="0.85" />
                    <circle cx="17" cy="12" r="3" opacity="0.85" />
                    <circle cx="12" cy="17" r="3" opacity="0.85" />
                    <circle cx="7" cy="12" r="3" opacity="0.85" />
                    <circle cx="12" cy="12" r="2.5" fill="#f4c244" />
                  </svg>
                </div>

                {/* Handwritten-style message */}
                <h3 className="font-['Caveat'] text-3xl sm:text-4xl font-semibold text-[#242424] mb-3 leading-snug">
                  Your little note has landed!
                </h3>

                <p className="text-sm sm:text-base text-[#5c5c5c] leading-[1.7] max-w-md mx-auto mb-6">
                  Thank you for writing{formData.name ? `, ${formData.name}` : ""}! Your paper plane has arrived safely in my inbox, and I'll get back to you soon.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={onResetToLetter}
                    className="button cursor-pointer bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
                  >
                    <FiRefreshCw className="w-3.5 h-3.5" />
                    <span>Send another note</span>
                  </button>

                  <a
                    href={`mailto:prernakumarisharma2003@gmail.com`}
                    className="text-xs font-mono text-[#5c5c5c] hover:text-[#b11f4b] hover:underline px-2 py-1"
                  >
                    Open in mail client ↗
                  </a>
                </div>
              </motion.div>
            )}

            {/* C. ERROR STATE NOTE */}
            {deliveryStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-[460px] bg-[#fff8f1] rounded-[18px] border border-[#f7b4c6] p-7 sm:p-8 shadow-xs text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#fff0f3] border border-[#f7b4c6] text-[#b11f4b] flex items-center justify-center mx-auto mb-3">
                  <FiAlertCircle className="w-5 h-5" />
                </div>

                <h3 className="font-['Caveat'] text-3xl font-semibold text-[#242424] mb-2">
                  The breeze blew the plane off course!
                </h3>

                <p className="text-xs sm:text-sm text-[#5c5c5c] max-w-md mx-auto mb-6">
                  {serverError || "Delivery service did not confirm receipt. Don't worry, your message is preserved."}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => triggerLaunch({ pullX: -55, pullY: 0 })}
                    className="button cursor-pointer"
                  >
                    <FiRefreshCw className="w-3.5 h-3.5" />
                    <span>Retry Throw</span>
                  </button>

                  <a
                    href={`mailto:prernakumarisharma2003@gmail.com`}
                    className="button bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
                  >
                    <FiMail className="w-4 h-4" />
                    <span>Email App</span>
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* --- RIGHT: ANUBHUTI-INSPIRED MAILBOX WITH DREAMY CLOUD & TARGET RING --- */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end w-full">
            <div ref={mailboxRef} className="relative flex flex-col items-center w-full max-w-[280px]">
              
              {/* Dreamy Cloud Shape Boundary pointing toward the mailbox */}
              <motion.div
                animate={{ y: [0, -3.5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative mb-1 flex items-center justify-center select-none"
              >
                <svg
                  viewBox="0 0 196 78"
                  className="w-[170px] sm:w-[185px] h-auto overflow-visible filter drop-shadow-[0_3px_7px_rgba(150,130,115,0.18)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="dreamy-cloud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="60%" stopColor="#fffdfa" />
                      <stop offset="100%" stopColor="#fff6ee" />
                    </linearGradient>
                  </defs>

                  {/* Tiny dreamy sparkle on top-right */}
                  <path
                    d="M174,10 Q174,14 178,14 Q174,14 174,18 Q174,14 170,14 Q174,14 174,10 Z"
                    fill="#f4c244"
                  />
                  {/* Tiny dreamy sparkle on top-left */}
                  <path
                    d="M18,16 Q18,19 21,19 Q18,19 18,22 Q18,19 15,19 Q18,19 18,16 Z"
                    fill="#f7b4c6"
                    opacity="0.8"
                  />

                  {/* Dreamy Fluffy Cloud Body with downward pointer tail */}
                  <path
                    d="M 45,56 C 32,56 16,50 14,38 C 12,28 22,20 32,20 C 34,12 45,6 58,8 C 66,2 80,1 96,1 C 112,1 126,3 134,9 C 146,5 160,12 161,22 C 172,25 180,33 178,43 C 176,52 162,56 148,56 C 136,56 122,55 114,56 C 108,61 102,69 98,73 C 95,68 91,60 84,56 C 70,56 56,56 45,56 Z"
                    fill="url(#dreamy-cloud-grad)"
                    stroke="#ded8cf"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />

                  {/* Dreamy Little Trailing Puff below pointer towards mailbox */}
                  <circle
                    cx="98"
                    cy="76"
                    r="2"
                    fill="#ffffff"
                    stroke="#ded8cf"
                    strokeWidth="1"
                  />

                  {/* Soft Rosy Cheek Doodles on Cloud */}
                  <ellipse cx="48" cy="38" rx="4.5" ry="2.2" fill="#f7b4c6" opacity="0.45" />
                  <ellipse cx="148" cy="38" rx="4.5" ry="2.2" fill="#f7b4c6" opacity="0.45" />
                </svg>

                {/* Cute Handwritten "Prerna's Mailbox" inside Cloud */}
                <div className="absolute inset-0 flex items-center justify-center pb-3">
                  <span className="font-['Caveat'] text-base sm:text-[17px] font-bold tracking-wide text-[#242424] drop-shadow-xs">
                    Prerna's Mailbox
                  </span>
                </div>
              </motion.div>

              {/* Anubhuti-inspired Target Ring (`gring`) over Mailbox Slot (Only when aiming/launching) */}
              {deliveryStatus !== "delivered" && (
                <div
                  className={`absolute top-[160px] sm:top-[165px] w-20 h-20 rounded-full border-2 border-dashed pointer-events-none transition-all duration-300 z-30 ${
                    isDragging
                      ? "border-[#b11f4b] scale-110 opacity-80"
                      : "border-[#b11f4b]/25 opacity-40 scale-100"
                  }`}
                />
              )}

              {/* Mailbox Visual Component */}
              <MailboxVisual status={deliveryStatus} slotRef={slotRef} />

              {/* Mailbox caption instruction */}
              <p className="text-center text-xs text-[#5c5c5c] mt-3 font-mono leading-relaxed max-w-[220px]">
                {deliveryStatus === "flying" && "Soaring along the dotted path..."}
                {deliveryStatus === "error" && "Delivery interrupted. Retry throwing above."}
              </p>

              {/* Burst Confetti Particles on Arrival */}
              {confetti.length > 0 && deliveryStatus === "delivered" && (
                <div className="absolute top-[165px] left-1/2 -translate-x-1/2 pointer-events-none z-30">
                  {confetti.map((c) => (
                    <motion.div
                      key={c.id}
                      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                      animate={{ x: c.x, y: c.y, opacity: 0, scale: 0.2 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      style={{
                        position: "absolute",
                        width: c.size,
                        height: c.size,
                        backgroundColor: c.color,
                        borderRadius: "50%",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AnubhutiContactScene;
