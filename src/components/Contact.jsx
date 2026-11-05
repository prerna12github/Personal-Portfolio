import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiAlertCircle } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import AnubhutiContactScene from "./contact/AnubhutiContactScene";

export const Contact = () => {
  // Form fields for Stage 1 (Letter)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Staged interaction sequence:
  // "letter" -> STAGE ONE: Show ONLY the paper letter
  // "launch" -> STAGE TWO: Anubhuti-inspired interactive slingshot & mailbox scene
  // "flying" -> Paper plane soaring along dotted trajectory
  // "delivered" -> Landed in mailbox + handwritten confirmation
  // "error"  -> Delivery error fallback
  const [stage, setStage] = useState("letter");

  const [validationError, setValidationError] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Validate form fields in Stage 1
  const validateForm = () => {
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmedName) {
      setValidationError("Please fill in your name before folding your note.");
      return false;
    }
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setValidationError("Please enter a valid email address so I can write back.");
      return false;
    }
    if (!trimmedMessage) {
      setValidationError("Please write a message before sending your paper plane.");
      return false;
    }
    return true;
  };

  // STAGE ONE SUBMIT: Validates and smoothly folds letter away into Stage Two
  const handleLetterSubmit = (e) => {
    if (e) e.preventDefault();
    if (!validateForm()) return;

    setValidationError(null);
    setServerError(null);

    // If reduced motion is preferred, submit email directly
    if (reducedMotion) {
      setIsSubmitting(true);
      sendEmailRequest(formData.name.trim(), formData.email.trim(), formData.message.trim())
        .then(() => {
          setStage("delivered");
        })
        .catch((err) => {
          setServerError(err.message || "Failed to deliver message.");
          setStage("error");
        })
        .finally(() => setIsSubmitting(false));
      return;
    }

    // Advance to Anubhuti-inspired scene (AnimatePresence handles the 3D origami folding exit)
    setStage("launch");
  };

  // STAGE TWO LAUNCH: Visitor pulls and releases the paper plane!
  const handleLaunchPlane = async (pullData = { pullX: -55, pullY: 0 }) => {
    if (isSubmitting || stage === "flying") return;

    setIsSubmitting(true);
    setServerError(null);
    setStage("flying");

    // Initiate real Formspree email delivery concurrently
    const emailPromise = sendEmailRequest(
      formData.name.trim(),
      formData.email.trim(),
      formData.message.trim()
    );

    // After flight duration (~1.5s), confirm delivery
    setTimeout(async () => {
      try {
        await emailPromise;
        setStage("delivered");
      } catch (err) {
        console.warn("Delivery error:", err);
        setServerError(
          err.message || "Failed to deliver message. Check internet connection or retry."
        );
        setStage("error");
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  // Real Formspree submission
  const sendEmailRequest = async (name, email, message) => {
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xzeeookr";
    const endpoint =
      import.meta.env.VITE_FORMSPREE_ENDPOINT || `https://formspree.io/f/${formspreeId}`;

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
        `Delivery service responded with status ${res.status}`;
      throw new Error(detailedMsg);
    }

    const data = await res.json().catch(() => ({}));
    if (data.ok === false) {
      throw new Error(data.error || "Delivery service rejected submission");
    }

    return true;
  };

  // Reset back to initial LETTER ONLY state
  const handleResetToLetter = () => {
    setFormData({ name: "", email: "", message: "" });
    setStage("letter");
    setValidationError(null);
    setServerError(null);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="wrap py-20 sm:py-28 border-b border-[#dedede] text-left">
      {/* ========================================================================= */}
      {/* TOP HEADER: "SEND ME A PAPER PLANE" */}
      {/* ========================================================================= */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#dedede] mb-12">
        <div className="max-w-2xl space-y-4">
          <div className="eyebrow flex items-center gap-2">
            {/* <span className="status-dot" />
            <span>LET’S CONNECT · INBOX OPEN</span>*/}
          </div>

          <h2 className="leading-[1.08] tracking-[-2px] text-[#242424]">
            Send Me a<br /><em>Paper Plane.</em>
          </h2>

          {/* <p className="text-sm sm:text-base text-[#5c5c5c] leading-[1.75] max-w-xl">
            I'm always open to discussing new AI architectures, research collaborations, internship opportunities, or interesting full-stack projects.
          </p>*/}
        </div>

        {/* Action buttons & direct mail */}
        <div className="flex flex-col items-start lg:items-end gap-3.5 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${personalInfo.email}`} className="button">
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
      {/* THE MAIN INTERACTIVE STAGE CONTAINER */}
      {/* ========================================================================= */}
      <div className="relative bg-[#fffbf7] border border-[#dedede] rounded-[24px] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-soft min-h-[580px] flex items-center justify-center">
        {/* Airmail diagonal striped top border decor */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-1.5 opacity-60 bg-[repeating-linear-gradient(45deg,#b11f4b_0,#b11f4b_12px,#fff_12px,#fff_18px,#70a4c2_18px,#70a4c2_30px,#fff_30px,#fff_36px)]"
        />

        <AnimatePresence mode="wait">
          {/* ===================================================================== */}
          {/* STAGE ONE: SHOW ONLY THE LETTER */}
          {/* (No paper plane, no mailbox, no dotted trajectory!) */}
          {/* ===================================================================== */}
          {stage === "letter" && (
            <motion.div
              key="letter-card"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.15,
                rotateX: 75,
                rotateZ: -12,
                y: 50,
                transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
              }}
              className="w-full max-w-[580px] bg-[#fffdfa] rounded-[18px] border border-[#ded8cf] p-7 sm:p-10 shadow-[0_16px_40px_-10px_rgba(150,130,115,0.2),0_0_0_1px_rgba(150,130,115,0.08)] relative"
            >
              {/* Airmail Vintage Postage Stamp in Top-Right */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 select-none pointer-events-none">
                <div className="w-[52px] h-[64px] bg-[#fff8f1] border-2 border-dashed border-[#b11f4b]/40 rounded-[4px] p-1 flex flex-col items-center justify-between text-center shadow-xs">
                  <span className="text-[7.5px] font-mono font-bold tracking-widest text-[#b11f4b] uppercase">
                    AIR MAIL
                  </span>
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
                <svg className="absolute -left-6 top-3 w-10 h-6 opacity-40 overflow-visible" viewBox="0 0 40 24" fill="none">
                  <path d="M-5,4 Q5,-2 15,4 T35,4 M-5,10 Q5,4 15,10 T35,10 M-5,16 Q5,10 15,16 T35,16" stroke="#242424" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Letterhead */}
              <div className="mb-6 pr-16">
                <h3 className="font-['Caveat'] text-3xl sm:text-[34px] font-semibold text-[#242424] leading-tight mb-1">
                  Write me a little note...
                </h3>
                <p className="text-[11px] font-mono tracking-wider text-[#5c5c5c] uppercase">
                  TO: PRERNA KUMARI SHARMA 
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
              <form onSubmit={handleLetterSubmit} className="space-y-4">
                <div className="border-l-2 border-[#f7b4c6]/40 pl-3.5 sm:pl-5 space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="note-name" className="block text-[10px] font-mono uppercase tracking-widest text-[#5c5c5c] mb-1">
                      FROM (YOUR NAME)
                    </label>
                    <input
                      id="note-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Lin"
                      className="w-full py-1.5 bg-transparent border-b border-[#dedede] focus:border-[#b11f4b] text-sm sm:text-base text-[#242424] placeholder-[#919191] focus:outline-none transition-colors font-medium"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="note-email" className="block text-[10px] font-mono uppercase tracking-widest text-[#5c5c5c] mb-1">
                      RETURN ADDRESS (EMAIL)
                    </label>
                    <input
                      id="note-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="maya@designstudio.com"
                      className="w-full py-1.5 bg-transparent border-b border-[#dedede] focus:border-[#b11f4b] text-sm sm:text-base text-[#242424] placeholder-[#919191] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Textarea with Lined Stationery Background */}
                  <div>
                    <label htmlFor="note-message" className="block text-[10px] font-mono uppercase tracking-widest text-[#5c5c5c] mb-1">
                      YOUR LETTER
                    </label>
                    <textarea
                      id="note-message"
                      name="message"
                      required
                      rows={4}
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

                {/* Submit button: Folds the letter into a paper plane */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="button cursor-pointer text-sm sm:text-base py-2.5 px-6"
                  >
                    <span>Fold into Paper Plane</span>
                    {/* <span aria-hidden="true">✈️</span>*/}
                  </button>

                  {/* <span className="text-[11px] font-mono text-[#5c5c5c]">
                    Fold your note to send it
                  </span>*/}
                </div>
              </form>
            </motion.div>
          )}

          {/* ===================================================================== */}
          {/* STAGE TWO: ANUBHUTI-INSPIRED ANIMATED CONTACT SCENE */}
          {/* (Only revealed after the letter has completely folded and disappeared!) */}
          {/* ===================================================================== */}
          {stage !== "letter" && (
            <motion.div
              key="anubhuti-scene"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full max-w-[940px] relative"
            >
              <AnubhutiContactScene
                formData={formData}
                onLaunchPlane={handleLaunchPlane}
                onResetToLetter={handleResetToLetter}
                deliveryStatus={stage}
                serverError={serverError}
                isSubmitting={isSubmitting}
                reducedMotion={reducedMotion}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
