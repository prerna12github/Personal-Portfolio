import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiRefreshCw, FiAlertCircle } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import MailboxVisual from "./contact/MailboxVisual";
import PaperPlaneVisual from "./contact/PaperPlaneVisual";
import SlingshotLauncher from "./contact/SlingshotLauncher";

export const Contact = () => {
  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Animation & submission states:
  // "idle" | "flying" | "delivering" | "delivered" | "error"
  const [status, setStatus] = useState("idle");
  const [validationError, setValidationError] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic flight path target coordinates
  const [flightTarget, setFlightTarget] = useState({ x: 420, y: 0 });

  // Refs for measuring origin & destination
  const stageRef = useRef(null);
  const launcherRef = useRef(null);
  const slotRef = useRef(null);

  // Check prefers-reduced-motion
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReducedMotion(mq.matches);
      const listener = (e) => setReducedMotion(e.matches);
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationError) setValidationError(null);
  };

  // Validate form fields
  const isFormValid = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return Boolean(
      trimmedName && trimmedEmail && emailRegex.test(trimmedEmail) && trimmedMessage
    );
  };

  // Called when user tries to pull/launch without valid form
  const handleInvalidAttempt = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setValidationError("Please fill in your name before launching.");
    } else if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setValidationError("Please enter a valid email address so I can write back.");
    } else if (!trimmedMessage) {
      setValidationError("Please write a message before sending your paper plane.");
    }
  };

  // Measure relative distance between slingshot dock and mailbox slot
  const computeFlightTarget = () => {
    if (!launcherRef.current || !slotRef.current) return { x: 420, y: 0 };
    const lRect = launcherRef.current.getBoundingClientRect();
    const sRect = slotRef.current.getBoundingClientRect();

    const targetX = sRect.left + sRect.width / 2 - (lRect.left + 50);
    const targetY = sRect.top + sRect.height / 2 - (lRect.top + 50);

    return { x: targetX, y: targetY };
  };

  // Triggered when plane is pulled and released!
  const handleLaunch = async () => {
    if (isSubmitting || status !== "idle") return;

    if (!isFormValid()) {
      handleInvalidAttempt();
      return;
    }

    setValidationError(null);
    setServerError(null);
    setIsSubmitting(true);

    const target = computeFlightTarget();
    setFlightTarget(target);

    // If reduced motion is requested, deliver smoothly without 3D flight
    if (reducedMotion) {
      await sendEmailRequest(formData.name.trim(), formData.email.trim(), formData.message.trim());
      return;
    }

    // 1. Launch plane into flight!
    setStatus("flying");

    // 2. Concurrently initiate actual email submission
    const emailPromise = sendEmailRequest(
      formData.name.trim(),
      formData.email.trim(),
      formData.message.trim()
    );

    // 3. Flight duration: ~1500ms
    setTimeout(async () => {
      setStatus("delivering");
      try {
        await emailPromise;
        setStatus("delivered");
      } catch (err) {
        setStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  // Actual email delivery network call via Formspree
  const sendEmailRequest = async (name, email, message) => {
    // Real Formspree Form ID: xzeeookr
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xzeeookr";
    const endpoint =
      import.meta.env.VITE_FORMSPREE_ENDPOINT || `https://formspree.io/f/${formspreeId}`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Paper Plane from ${name} via Portfolio`,
          _replyto: email,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        const detailedMsg =
          errorData.errors?.map((e) => e.message).join(", ") ||
          errorData.error ||
          errorData.message ||
          `Formspree responded with status ${res.status}`;
        throw new Error(detailedMsg);
      }

      const data = await res.json().catch(() => ({}));
      if (data.ok === false) {
        throw new Error(data.error || "Formspree rejected submission");
      }

      if (reducedMotion) {
        setStatus("delivered");
        setIsSubmitting(false);
      }
      return true;
    } catch (err) {
      console.warn("Delivery error:", err);
      setServerError(
        err.message || "Failed to deliver message. Check Formspree ID or internet connection."
      );
      if (reducedMotion) {
        setStatus("error");
        setIsSubmitting(false);
      }
      throw err;
    }
  };

  // Reset form to write another message
  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("idle");
    setValidationError(null);
    setServerError(null);
    setIsSubmitting(false);
  };

  // Retry sending (keeps typed message intact!)
  const handleRetry = () => {
    setStatus("idle");
    setServerError(null);
    setIsSubmitting(false);
  };

  // Mailto fallback link
  const mailtoFallback = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Paper Plane Note from ${formData.name || "Portfolio Visitor"}`
  )}&body=${encodeURIComponent(
    `Hi Prerna,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <section id="contact" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      {/* ========================================================================= */}
      {/* 1. TOP HEADER & TITLE: "SEND ME A PAPER PLANE" */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#dedede] mb-12">
        <div className="max-w-2xl space-y-4">
          <div className="eyebrow flex items-center gap-2">
            <span className="status-dot" />
            <span>LET’S CONNECT · INBOX OPEN</span>
          </div>

          <h2 className="leading-[1.08] tracking-[-2px] text-[#242424]">
            Send Me a<br /><em>Paper Plane.</em>
          </h2>

          <p className="text-sm sm:text-base text-[#5c5c5c] leading-[1.75] max-w-xl">
            I'm always open to discussing new AI architectures, research collaborations, internship opportunities, or interesting full-stack projects.
          </p>
        </div>

        {/* Action buttons & direct mail */}
        <div className="flex flex-col items-start lg:items-end gap-3.5 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="button"
            >
              <FiMail className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
            >
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="text-xs font-mono text-[#5c5c5c]">
            <span>Direct Inbox: </span>
            <a href={`mailto:${personalInfo.email}`} className="text-[#b11f4b] hover:underline font-medium">
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THE INTERACTIVE PULL-AND-RELEASE PAPER PLANE & MAILBOX STAGE */}
      {/* ========================================================================= */}
      <div
        ref={stageRef}
        className="relative bg-[#fffbf7] border border-[#dedede] rounded-[24px] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-soft"
      >
        {/* Airmail diagonal striped top border decor */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1.5 opacity-60 bg-[repeating-linear-gradient(45deg,#b11f4b_0,#b11f4b_12px,#fff_12px,#fff_18px,#70a4c2_18px,#70a4c2_30px,#fff_30px,#fff_36px)]"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT: THE PAPER LETTER & PULL-TO-SEND LAUNCHPAD (COL-SPAN-7) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-[560px] relative min-h-[500px] flex items-center justify-center">
              
              {/* --- A. INITIAL IDLE / WRITING / PULL-TO-SEND STATE --- */}
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.div
                    key="paper-sheet"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full bg-[#fffdfa] rounded-[16px] border border-[#ded8cf] p-6 sm:p-8 shadow-[0_12px_36px_-8px_rgba(150,130,115,0.18),0_0_0_1px_rgba(150,130,115,0.08)] relative"
                  >
                    {/* Airmail Vintage Postage Stamp in Top-Right */}
                    <div className="absolute top-5 right-5 sm:top-6 sm:right-6 select-none pointer-events-none">
                      <div className="w-[52px] h-[64px] bg-[#fff8f1] border-2 border-dashed border-[#b11f4b]/40 rounded-[4px] p-1 flex flex-col items-center justify-between text-center shadow-xs">
                        <span className="text-[7.5px] font-mono font-bold tracking-widest text-[#b11f4b] uppercase">
                          AIR MAIL
                        </span>
                        {/* Mini Tanuja-style flower illustration */}
                        <svg className="w-5 h-5 text-[#b11f4b]" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="7" r="3" opacity="0.85" />
                          <circle cx="17" cy="12" r="3" opacity="0.85" />
                          <circle cx="12" cy="17" r="3" opacity="0.85" />
                          <circle cx="7" cy="12" r="3" opacity="0.85" />
                          <circle cx="12" cy="12" r="2.5" fill="#f4c244" />
                        </svg>
                        <span className="text-[7px] font-mono text-[#5c5c5c]">
                          INDIA · 2026
                        </span>
                      </div>

                      {/* Ink Postmark Cancellation Wavy Lines */}
                      <svg
                        className="absolute -left-6 top-3 w-10 h-6 opacity-40 overflow-visible"
                        viewBox="0 0 40 24"
                        fill="none"
                      >
                        <path
                          d="M-5,4 Q5,-2 15,4 T35,4 M-5,10 Q5,4 15,10 T35,10 M-5,16 Q5,10 15,16 T35,16"
                          stroke="#242424"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>

                    {/* Paper Header / Letterhead */}
                    <div className="mb-6 pr-16">
                      <h3 className="font-['Caveat'] text-3xl sm:text-[34px] font-semibold text-[#242424] leading-tight mb-1">
                        Write me a little note...
                      </h3>
                      <p className="text-[11px] font-mono tracking-wider text-[#5c5c5c] uppercase">
                        TO: PRERNA KUMARI SHARMA · KALYANI, WB
                      </p>
                    </div>

                    {/* Validation Error Message */}
                    {validationError && (
                      <div className="mb-4 px-3.5 py-2.5 rounded-[8px] bg-[#fff0f3] border border-[#f7b4c6] text-[#b11f4b] text-xs flex items-center gap-2">
                        <FiAlertCircle className="w-4 h-4 shrink-0" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    {/* The HTML Form Inputs */}
                    <div className="space-y-4 mb-6">
                      {/* Left vertical notebook margin guideline */}
                      <div className="border-l-2 border-[#f7b4c6]/40 pl-3.5 sm:pl-5 space-y-4">
                        {/* Name Input */}
                        <div>
                          <label
                            htmlFor="note-name"
                            className="block text-[10px] font-mono uppercase tracking-widest text-[#5c5c5c] mb-1"
                          >
                            FROM (YOUR NAME)
                          </label>
                          <input
                            id="note-name"
                            type="text"
                            name="name"
                            required
                            disabled={isSubmitting}
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Maya Lin"
                            className="w-full py-1.5 bg-transparent border-b border-[#dedede] focus:border-[#b11f4b] text-sm sm:text-base text-[#242424] placeholder-[#919191] focus:outline-none transition-colors font-medium"
                          />
                        </div>

                        {/* Email Input */}
                        <div>
                          <label
                            htmlFor="note-email"
                            className="block text-[10px] font-mono uppercase tracking-widest text-[#5c5c5c] mb-1"
                          >
                            RETURN ADDRESS (EMAIL)
                          </label>
                          <input
                            id="note-email"
                            type="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="maya@designstudio.com"
                            className="w-full py-1.5 bg-transparent border-b border-[#dedede] focus:border-[#b11f4b] text-sm sm:text-base text-[#242424] placeholder-[#919191] focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Message Textarea with Lined Stationery Background */}
                        <div>
                          <label
                            htmlFor="note-message"
                            className="block text-[10px] font-mono uppercase tracking-widest text-[#5c5c5c] mb-1"
                          >
                            YOUR LETTER
                          </label>
                          <textarea
                            id="note-message"
                            name="message"
                            required
                            rows={3}
                            disabled={isSubmitting}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Hi Prerna, loved your literature review agent and wanted to chat about..."
                            style={{
                              backgroundImage:
                                "repeating-linear-gradient(transparent, transparent 31px, rgba(150, 130, 115, 0.16) 31px, rgba(150, 130, 115, 0.16) 32px)",
                              lineHeight: "32px",
                            }}
                            className="w-full py-1 bg-transparent border-b border-[#dedede] focus:border-[#b11f4b] text-sm sm:text-base text-[#242424] placeholder-[#919191] focus:outline-none transition-colors resize-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* THE PULL-AND-RELEASE SLINGSHOT LAUNCHER DOCK */}
                    <div ref={launcherRef}>
                      <SlingshotLauncher
                        status={status}
                        onLaunch={handleLaunch}
                        isFormValid={isFormValid}
                        onInvalidAttempt={handleInvalidAttempt}
                        flightTarget={flightTarget}
                        disabled={isSubmitting}
                      />
                    </div>
                  </motion.div>
                )}

                {/* --- B. DELIVERED STATE: NATURAL PERSONAL CONFIRMATION --- */}
                {status === "delivered" && (
                  <motion.div
                    key="delivered-note"
                    initial={{ opacity: 0, scale: 0.95, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="w-full bg-[#fffdfa] rounded-[16px] border border-[#ded8cf] p-7 sm:p-9 shadow-[0_12px_36px_-8px_rgba(150,130,115,0.18),0_0_0_1px_rgba(150,130,115,0.08)] text-center relative"
                  >
                    {/* Airmail Vintage Postage Stamp in Top-Right */}
                    <div className="absolute top-5 right-5 sm:top-6 sm:right-6 select-none pointer-events-none opacity-80">
                      <div className="w-[46px] h-[56px] bg-[#fff8f1] border-2 border-dashed border-[#b11f4b]/30 rounded-[4px] p-1 flex flex-col items-center justify-between text-center">
                        <span className="text-[7px] font-mono font-bold tracking-widest text-[#b11f4b] uppercase">
                          AIR MAIL
                        </span>
                        <svg className="w-4 h-4 text-[#b11f4b]" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="7" r="3" opacity="0.85" />
                          <circle cx="17" cy="12" r="3" opacity="0.85" />
                          <circle cx="12" cy="17" r="3" opacity="0.85" />
                          <circle cx="7" cy="12" r="3" opacity="0.85" />
                          <circle cx="12" cy="12" r="2.5" fill="#f4c244" />
                        </svg>
                        <span className="text-[6.5px] font-mono text-[#5c5c5c]">
                          ARRIVED
                        </span>
                      </div>
                    </div>

                    {/* Tiny subtle decorative flower doodle */}
                    <div className="flex justify-center mb-2">
                      <svg
                        className="w-5 h-5 text-[#b11f4b]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="7" r="3" opacity="0.85" />
                        <circle cx="17" cy="12" r="3" opacity="0.85" />
                        <circle cx="12" cy="17" r="3" opacity="0.85" />
                        <circle cx="7" cy="12" r="3" opacity="0.85" />
                        <circle cx="12" cy="12" r="2.5" fill="#f4c244" />
                      </svg>
                    </div>

                    {/* Handwritten-style delivery message */}
                    <h3 className="font-['Caveat'] text-3xl sm:text-4xl font-semibold text-[#242424] mb-3 leading-snug">
                      Your little note has landed!
                    </h3>

                    {/* Personal, warm response note */}
                    <p className="text-sm sm:text-base text-[#5c5c5c] leading-[1.7] max-w-md mx-auto mb-6">
                      Thank you for writing{formData.name ? `, ${formData.name}` : ""}! I've received your note and will get back to you soon.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="button cursor-pointer bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
                      >
                        <FiRefreshCw className="w-3.5 h-3.5" />
                        <span>Send another message</span>
                      </button>

                      <a
                        href={mailtoFallback}
                        className="text-xs font-mono text-[#5c5c5c] hover:text-[#b11f4b] hover:underline px-2 py-1"
                      >
                        Open in mail client ↗
                      </a>
                    </div>
                  </motion.div>
                )}

                {/* --- C. ERROR STATE: RETRY / FALLBACK CARD --- */}
                {status === "error" && (
                  <motion.div
                    key="error-note"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full bg-[#fffdfa] rounded-[16px] border border-[#f7b4c6] p-7 sm:p-9 shadow-soft text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#fff0f3] border border-[#f7b4c6] text-[#b11f4b] flex items-center justify-center mx-auto mb-4">
                      <FiAlertCircle className="w-6 h-6" />
                    </div>

                    <h3 className="font-['Caveat'] text-3xl font-semibold text-[#242424] mb-2">
                      The breeze blew the plane off course!
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5c5c5c] max-w-md mx-auto mb-6">
                      {serverError || "Delivery service did not confirm receipt. Don't worry, your message is safely preserved below."}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={handleRetry}
                        className="button cursor-pointer"
                      >
                        <FiRefreshCw className="w-3.5 h-3.5" />
                        <span>Retry Launch</span>
                      </button>

                      <a
                        href={mailtoFallback}
                        className="button bg-white text-[#242424] border-[#919191] hover:bg-[#b11f4b] hover:border-[#b11f4b] hover:text-white"
                      >
                        <FiMail className="w-4 h-4" />
                        <span>Open in Email App</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ========================================================================= */}
              {/* THE ANIMATED FLYING PAPER PLANE & TRAIL */}
              {/* ========================================================================= */}
              <AnimatePresence>
                {status === "flying" && (
                  <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
                    {/* SVG Flight Trail Arc */}
                    <svg
                      className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"
                      fill="none"
                    >
                      <path
                        d={`M 0 0 Q ${flightTarget.x * 0.45} ${
                          Math.min(0, flightTarget.y) - 80
                        }, ${flightTarget.x} ${flightTarget.y}`}
                        stroke="#b11f4b"
                        strokeWidth="1.8"
                        strokeDasharray="5 7"
                        strokeLinecap="round"
                        className="opacity-40"
                      />
                    </svg>

                    {/* Origami Paper Plane with velocity stretch effect */}
                    <motion.div
                      initial={{
                        x: 0,
                        y: 0,
                        scale: 0.8,
                        scaleX: 1.3,
                        scaleY: 0.85,
                        rotate: -15,
                        opacity: 1,
                      }}
                      animate={{
                        x: [0, flightTarget.x * 0.35, flightTarget.x * 0.75, flightTarget.x],
                        y: [
                          0,
                          Math.min(0, flightTarget.y) - 80,
                          flightTarget.y - 18,
                          flightTarget.y,
                        ],
                        scale: [0.8, 1.15, 0.95, 0.22],
                        scaleX: [1.3, 1.25, 1.05, 0.3], // velocity speed stretch effect!
                        scaleY: [0.85, 0.9, 0.95, 0.3],
                        rotate: [
                          -15,
                          flightTarget.x >= 0 ? 10 : -10,
                          flightTarget.x >= 0 ? 25 : -25,
                          flightTarget.x >= 0 ? 38 : -38,
                        ],
                        opacity: [1, 1, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        ease: [0.35, 0, 0.2, 1],
                      }}
                      className="origin-center"
                    >
                      <PaperPlaneVisual className="w-16 h-16 sm:w-20 sm:h-20" />
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: THE CUTE ILLUSTRATED MAILBOX DESTINATION (COL-SPAN-5) */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-[320px] flex flex-col items-center">
              {/* Mailbox Header Hint */}
              <div className="text-center mb-4">
                <p className="font-['Caveat'] text-2xl text-[#242424]">
                  Prerna’s Little Mailbox 📮
                </p>
                <p className="text-[11px] font-mono text-[#5c5c5c] uppercase tracking-wider">
                  DELIVERY DESTINATION
                </p>
              </div>

              {/* The Illustrated SVG Mailbox with Slot Ref */}
              <MailboxVisual status={status} slotRef={slotRef} />

              {/* Little interactive instruction below mailbox */}
              <p className="text-center text-xs text-[#5c5c5c] mt-4 font-mono leading-relaxed max-w-[240px]">
                {status === "idle" && "Aim for the mailbox! Pull the paper plane backwards on the launchpad and let go."}
                {status === "flying" && "Paper plane soaring through the air towards the mailbox slot! ✈️"}
                {status === "delivering" && "Entering mailbox and delivering note..."}
                {status === "delivered" && "Mailbox flag raised! Your note is safely inside."}
                {status === "error" && "Delivery interrupted. You can retry launching above."}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
