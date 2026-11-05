import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import PaperPlaneVisual from "./PaperPlaneVisual";

export const SlingshotLauncher = ({
  stage,
  onLaunch,
  dockRef,
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [pull, setPull] = useState({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Maximum pull distances (px)
  const MAX_PULL_X = -120; // pull backwards (left)
  const MAX_PULL_Y = 40;   // vertical wiggle

  // Calculate pull tension (0 to 1)
  const tension = Math.min(1, Math.abs(pull.x) / Math.abs(MAX_PULL_X));
  const isReadyToLaunch = Math.abs(pull.x) >= 35;

  // Slingshot anchor pegs coordinates (relative to dock)
  const PEG_LEFT = { x: 38, y: 32 };
  const PEG_RIGHT = { x: 38, y: 96 };

  // Current plane attach point (rests at x: 42, y: 64 when idle)
  const planeRest = { x: 42, y: 64 };
  const planePos = {
    x: planeRest.x + pull.x,
    y: planeRest.y + pull.y,
  };

  // Pointer down (mouse or touch)
  const handlePointerDown = (e) => {
    if (disabled || stage !== "launch") return;

    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  // Pointer move
  const handlePointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;

    // Pull backwards (only allow dx <= 5, clamp to MAX_PULL_X)
    const clampedX = Math.max(MAX_PULL_X, Math.min(5, dx));
    // Clamp vertical aiming
    const clampedY = Math.max(-MAX_PULL_Y, Math.min(MAX_PULL_Y, dy));

    setPull({ x: clampedX, y: clampedY });
  };

  // Pointer up / release
  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    // Check if pulled past launch threshold
    if (Math.abs(pull.x) >= 35) {
      const releasePull = { pullX: pull.x, pullY: pull.y };
      setPull({ x: 0, y: 0 });
      onLaunch(releasePull);
    } else {
      // Snap back to resting position
      setPull({ x: 0, y: 0 });
    }
  };

  // Pointer cancel
  const handlePointerCancel = () => {
    setIsDragging(false);
    setPull({ x: 0, y: 0 });
  };

  // Elastic band color based on tension
  const cordColor = isReadyToLaunch
    ? "#b11f4b"
    : tension > 0.1
    ? "#ea6045"
    : "#c4b5a5";

  const cordWidth = isReadyToLaunch ? 2.2 : tension > 0.1 ? 2.6 : 3.0;

  return (
    <div className="w-full select-none" ref={containerRef}>
      {/* Visual Slingshot Launch Runway */}
      <div className="relative bg-[#fff8f1] rounded-[16px] border border-[#dedede] p-4 sm:p-5 overflow-visible shadow-xs">
        
        {/* Top dock header & hints */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b11f4b]" />
            <span className="text-[11px] font-mono font-semibold tracking-wider text-[#242424] uppercase">
              PULL-TO-SEND LAUNCHPAD
            </span>
          </div>

          <span className="text-[10px] font-mono text-[#5c5c5c]">
            {isDragging
              ? isReadyToLaunch
                ? "RELEASE TO LAUNCH!"
                : "PULL FARTHER BACK..."
              : "MOUSE OR TOUCH"}
          </span>
        </div>

        {/* Slingshot Arena */}
        <div className="relative h-[128px] w-full flex items-center justify-start overflow-visible">
          
          {/* SVG Elastic Cord & Pegs */}
          <svg
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
            viewBox="0 0 300 128"
            fill="none"
          >
            {/* Launch Runway Guidance Line */}
            <line
              x1="38"
              y1="64"
              x2="280"
              y2="64"
              stroke="#e5ded4"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            {/* Small directional arrows on runway */}
            <path
              d="M120,60 L126,64 L120,68 M170,60 L176,64 L170,68 M220,60 L226,64 L220,68"
              stroke="#dedede"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Elastic Cord 1: Top Peg -> Plane Tail */}
            {stage === "launch" && (
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

            {/* Elastic Cord 2: Bottom Peg -> Plane Tail */}
            {stage === "launch" && (
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

            {/* Top Wooden / Brass Peg */}
            <g transform={`translate(${PEG_LEFT.x}, ${PEG_LEFT.y})`}>
              <circle cx="0" cy="0" r="5" fill="#8d6b4f" stroke="#5e4530" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="2.2" fill="#f4c244" />
            </g>

            {/* Bottom Wooden / Brass Peg */}
            <g transform={`translate(${PEG_RIGHT.x}, ${PEG_RIGHT.y})`}>
              <circle cx="0" cy="0" r="5" fill="#8d6b4f" stroke="#5e4530" strokeWidth="1.2" />
              <circle cx="0" cy="0" r="2.2" fill="#f4c244" />
            </g>
          </svg>

          {/* THE DOCK ANCHOR REF (Center of Plane Resting Spot) */}
          <div
            ref={dockRef}
            className="absolute left-[42px] top-[32px] w-16 h-16 sm:w-20 sm:h-20 pointer-events-none"
          />

          {/* THE DRAGGABLE PAPER PLANE (Visible when in launch stage) */}
          {stage === "launch" && (
            <motion.div
              style={{
                x: pull.x,
                y: pull.y,
                rotate: pull.x < 0 ? (pull.y / MAX_PULL_Y) * 15 : 0,
                scale: isDragging ? 1.05 : 1,
                touchAction: "none",
              }}
              animate={
                !isDragging
                  ? {
                      x: 0,
                      y: 0,
                      rotate: 0,
                      transition: { type: "spring", stiffness: 450, damping: 18 },
                    }
                  : {}
              }
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              className={`absolute left-[42px] top-[32px] cursor-grab active:cursor-grabbing z-20 ${
                isDragging ? "cursor-grabbing" : ""
              }`}
            >
              <div className="relative">
                <PaperPlaneVisual className="w-16 h-16 sm:w-20 sm:h-20" />

                {/* Hand-drawn Pull Badge */}
                {!isDragging && (
                  <div className="absolute -top-6 -left-3 pointer-events-none whitespace-nowrap bg-white/95 border border-[#dedede] px-2 py-0.5 rounded-full text-[10px] font-['Caveat'] text-[#b11f4b] shadow-xs flex items-center gap-1">
                    <span>← Pull back to launch</span>
                  </div>
                )}

                {/* Tension percentage badge when dragging */}
                {isDragging && (
                  <div
                    className={`absolute -top-7 left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap px-2 py-0.5 rounded-full text-[10px] font-mono font-bold shadow-xs transition-colors ${
                      isReadyToLaunch
                        ? "bg-[#b11f4b] text-white"
                        : "bg-[#fff8f1] text-[#b11f4b] border border-[#f7b4c6]"
                    }`}
                  >
                    {isReadyToLaunch ? "READY! RELEASE" : `${Math.round(tension * 100)}% TENSION`}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* Alternative Tap/Click Launch Button for Accessibility */}
          {stage === "launch" && (
            <div className="ml-auto pl-4 z-10 flex flex-col items-end">
              <button
                type="button"
                disabled={disabled}
                onClick={() => onLaunch({ pullX: -60, pullY: 0 })}
                className="button cursor-pointer text-xs sm:text-sm py-2 sm:py-2.5 px-4 sm:px-5 disabled:opacity-60"
              >
                <span>Release &amp; Send Plane</span>
                <span aria-hidden="true">✈️</span>
              </button>
              <span className="text-[10px] font-mono text-[#5c5c5c] mt-1">
                or pull the plane backwards
              </span>
            </div>
          )}

        </div>

        {/* Helpful interaction guidance */}
        <div className="mt-2 pt-2 border-t border-[#dedede]/60 flex items-center justify-between text-[11px] font-mono text-[#5c5c5c]">
          <span>1. Pull plane backwards</span>
          <span>→</span>
          <span>2. Release</span>
          <span>→</span>
          <span>3. Flies into mailbox!</span>
        </div>

      </div>
    </div>
  );
};

export default SlingshotLauncher;
