import React, { useEffect, useRef } from "react";
import { personalInfo } from "../data/portfolioData";

export const About = () => {
  const portraitRef = useRef(null);

  // Tanuja's exact spring-wobble scroll physics for the portrait
  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait) return;

    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    let inView = !("IntersectionObserver" in window);
    let lastScroll = window.scrollY;
    let frame = 0, lastTime = 0, angle = 0, velocity = 0;

    const clamp = (value, limit) => Math.max(-limit, Math.min(limit, value));

    const reset = () => {
      window.cancelAnimationFrame(frame);
      frame = lastTime = angle = velocity = 0;
      lastScroll = window.scrollY;
      portrait.classList.remove("is-shaking");
      portrait.style.removeProperty("--portrait-tilt");
      portrait.style.removeProperty("--portrait-lift");
    };

    const tick = (time) => {
      const step = lastTime ? Math.min((time - lastTime) / (1000 / 60), 3) : 1;
      lastTime = time;
      velocity = (velocity - angle * 0.12 * step) * Math.pow(0.82, step);
      angle = clamp(angle + velocity * step, 10);
      if (Math.abs(angle) < 0.03 && Math.abs(velocity) < 0.03) {
        reset();
        return;
      }
      portrait.style.setProperty("--portrait-tilt", `${angle}deg`);
      portrait.style.setProperty("--portrait-lift", `${-Math.abs(angle) * 0.7}px`);
      frame = window.requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      const delta = window.scrollY - lastScroll;
      lastScroll = window.scrollY;
      if (!motion.matches || !inView || delta === 0) return;
      velocity = clamp(velocity + clamp(delta * 0.12, 4), 6);
      if (!frame) {
        portrait.classList.add("is-shaking");
        frame = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    motion.addEventListener("change", reset);
    window.addEventListener("pagehide", reset);

    let observer;
    if ("IntersectionObserver" in window && portrait.parentElement) {
      observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        if (!inView) reset();
      });
      observer.observe(portrait.parentElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      motion.removeEventListener("change", reset);
      window.removeEventListener("pagehide", reset);
      if (observer) observer.disconnect();
      reset();
    };
  }, []);

  return (
    <section id="about" className="wrap py-16 sm:py-24 border-b border-[#dedede] text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Tanuja Profile & Framed Portrait with Wobble */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* <p className="eyebrow self-start mb-4">ABOUT PRERNA</p>*/}

          {/* Framed Portrait with Spring Wobble */}
          <div className="w-full flex justify-center lg:justify-start mb-6">
            <div
              ref={portraitRef}
              className="studio-about-portrait w-full max-w-[320px] rounded-[22px] overflow-hidden border border-[#dedede] bg-white shadow-soft p-3 transition-transform duration-200 hover:shadow-md"
            >
              <div className="w-full aspect-[3/4] rounded-[15px] overflow-hidden bg-[#f5f2ed] relative">
                <img
                  src="/prerna_new_pic.jpeg"
                  alt="Prerna Kumari Sharma - Portrait"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#78716C]">
                <span>Prerna Kumari Sharma</span>
                <span className="text-[#b11f4b] font-semibold">MCA @ KGEC</span>
              </div>
            </div>
          </div>

          <h2 className="mb-4 leading-[1.15] text-[#242424]">
            Curiosity is<br />a useful <em>habit.</em>
          </h2>

          <div className="flex items-center gap-6 text-xs font-mono text-[#242424] pt-2">
            <a href="#projects" className="text-link">
              <span>View my work</span>
              <span aria-hidden="true">→</span>
            </a>
            <a href="#contact" className="text-link">
              <span>Get in touch</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Heading "A Little About me" & narrative bio paragraphs */}
        <div className="lg:col-span-7 space-y-6 text-[#5c5c5c] leading-[1.8] text-base pt-2">
          <div>
            <p className="eyebrow mb-2">ABOUT</p>
            <h2 className="mb-6 leading-[1.15] text-[#242424]">
              A Little <em>About Me.</em>
            </h2>
          </div>

          <p>
            I'm an MCA student at <strong className="text-[#242424] font-medium">Kalyani Government Engineering College</strong> with a deep passion for Artificial Intelligence, Agentic Workflows, Machine Learning, and modern full-stack development.
          </p>

          <p>
            My current exploration focuses on building intelligent multi-agent systems, experimenting with Large Language Models (LLMs), architecting Retrieval-Augmented Generation (RAG) pipelines, and understanding how autonomous AI agents collaborate with human supervision to solve high-stakes challenges.
          </p>

          <p>
            Beyond AI models, I enjoy low-latency backend engineering, database optimization with PostgreSQL and Redis, and building responsive, reliable web applications. I believe the most durable way to master technology is through thoughtful iteration and building real projects.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
