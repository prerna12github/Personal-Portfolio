import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only run on desktop devices with fine pointer and hover support
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: no-preference)");

    if (!pointerQuery.matches || !motionQuery.matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let frame = 0;
    let previousX;
    let ready = false;
    let dotsReady = false;
    const bursts = new Set();

    const img = cursor.querySelector("img");
    if (img) {
      if (img.complete) {
        ready = true;
      } else {
        img.addEventListener("load", () => { ready = true; });
      }
    }

    // Preload burst dots
    const dotsImg = new Image();
    dotsImg.src = "/assets/home/flower-cursor-dots.png";
    dotsImg.addEventListener("load", () => {
      dotsReady = true;
    });

    const removeBurst = (b) => {
      if (b && b.parentNode) {
        b.parentNode.removeChild(b);
      }
      bursts.delete(b);
    };

    const isInteractive = (target) => {
      if (!target || !(target instanceof Element)) return false;
      return Boolean(
        target.closest("a[href], button, select, summary, label[for], input, .project-card, .text-link")
      );
    };

    const handlePointerMove = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;

      const turn = previousX === undefined ? 0 : Math.max(-14, Math.min(14, (e.clientX - previousX) * 0.8));
      previousX = e.clientX;

      const hovering = isInteractive(e.target);

      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (!cursor) return;
        cursor.style.transform = `translate3d(${e.clientX - 34}px, ${e.clientY - 2}px, 0)`;
        cursor.style.setProperty("--doodle-turn", `${turn}deg`);
        cursor.classList.toggle("is-hovering", hovering);
        cursor.removeAttribute("hidden");
        document.body.classList.add("doodle-cursor-active");
      });
    };

    const handlePointerDown = () => {
      if (cursor) cursor.classList.add("is-pressed");
    };

    const handlePointerUp = () => {
      if (cursor) cursor.classList.remove("is-pressed");
    };

    const handleClick = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      if (!dotsReady) return;

      if (bursts.size >= 12) {
        const first = bursts.values().next().value;
        removeBurst(first);
      }

      const burst = dotsImg.cloneNode();
      burst.className = "cursor-burst";
      burst.style.left = `${e.clientX - 48}px`;
      burst.style.top = `${e.clientY - 30}px`;

      burst.addEventListener("animationend", () => removeBurst(burst), { once: true });
      burst.addEventListener("animationcancel", () => removeBurst(burst), { once: true });

      document.body.appendChild(burst);
      bursts.add(burst);
    };

    const handleMouseLeave = () => {
      if (!cursor) return;
      cursor.setAttribute("hidden", "true");
      document.body.classList.remove("doodle-cursor-active");
      previousX = undefined;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.classList.remove("doodle-cursor-active");
      bursts.forEach(removeBurst);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="doodle-cursor"
      hidden
      aria-hidden="true"
    >
      <img
        src="/assets/home/flower-hand-cursor.png"
        alt=""
        width={64}
        height={64}
        decoding="async"
      />
    </div>
  );
};

export default CustomCursor;
