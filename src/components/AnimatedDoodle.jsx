import React, { useState, useEffect, useRef } from "react";

const OBJECTS = [
  { slug: "blue-flower", label: "a blue flower with a pink heart" },
  { slug: "pink-flowers", label: "two pink flowers with a yellow star" },
  { slug: "fish-bowl", label: "a fish bowl with two yellow fish" },
  { slug: "party-worm", label: "a pink worm wearing a party hat" },
];

const CODE_TOKENS = [
  "{ }", "</>", "( )", "if", "=>", "[ ]", "+", "let",
  "{ }", "01", "</>", "++", "( )", "if", "[ ]", "=>", "{ }", "01"
];

export const AnimatedDoodle = () => {
  const [state, setState] = useState("idle"); // 'idle' | 'feeding' | 'bloomed' | 'error'
  const [objectIndex, setObjectIndex] = useState(0);
  const [statusText, setStatusText] = useState("Turning thoughts into something new with code.");
  const [buttonLabel, setButtonLabel] = useState("Feed me code");
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const rootRef = useRef(null);
  const growthRef = useRef(null);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
  };

  // Preload images and check readiness
  useEffect(() => {
    const imagesToLoad = [
      "/assets/home/thought-cloud-1.png",
      "/assets/home/thought-cloud-2.png",
      ...OBJECTS.flatMap((obj) => [
        `/assets/home/thought-${obj.slug}-1.png`,
        `/assets/home/thought-${obj.slug}-2.png`,
      ]),
    ];

    let loadedCount = 0;
    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount >= 2) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        // Even if some secondary asset fails, allow initial display
        setIsLoaded(true);
      };
    });
  }, []);

  // IntersectionObserver & Visibility handling
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const checkPaused = (inView = true) => {
      setIsPaused(motion.matches || document.hidden || !inView);
    };

    let inView = true;
    let observer;
    if ("IntersectionObserver" in window && rootRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        inView = entry.isIntersecting;
        checkPaused(inView);
      });
      observer.observe(rootRef.current);
    }

    const handleVisibility = () => checkPaused(inView);
    const handleMotionChange = () => {
      checkPaused(inView);
      if (motion.matches && state === "feeding") {
        finishBloom(objectIndex);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    motion.addEventListener("change", handleMotionChange);

    return () => {
      clearTimers();
      if (observer) observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
      motion.removeEventListener("change", handleMotionChange);
    };
  }, [state, objectIndex]);

  const finishBloom = (idx) => {
    clearTimers();
    setState("bloomed");
    setButtonLabel("Feed me more code");
    setStatusText(`Your thought became ${OBJECTS[idx].label}.`);
  };

  const handleFeed = () => {
    if (state === "feeding") return;

    clearTimers();
    const nextIndex = state === "idle" ? 0 : (objectIndex + 1) % OBJECTS.length;
    setObjectIndex(nextIndex);
    setState("feeding");
    setButtonLabel("Creating...");
    setStatusText("Feeding a little code...");

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      finishBloom(nextIndex);
      return;
    }

    timersRef.current = [
      window.setTimeout(() => {
        setStatusText("Thinking it through...");
      }, 850),
      window.setTimeout(() => {
        setStatusText("Making something new...");
      }, 2600),
      window.setTimeout(() => {
        finishBloom(nextIndex);
      }, 4200),
    ];
  };

  // Handle animationend on growth element as fallback / primary trigger
  const handleAnimationEnd = (e) => {
    if (e.target === growthRef.current && e.animationName === "code-flower-grow") {
      finishBloom(objectIndex);
    }
  };

  const currentObj = OBJECTS[objectIndex];

  return (
    <div
      ref={rootRef}
      className="code-flower"
      role="region"
      aria-label="Feed a thought code"
      data-state={state}
      data-paused={isPaused ? "true" : "false"}
      data-object={currentObj?.slug}
    >
      {/* Hand-drawn Flower Stage */}
      <div
        className="flower-stage"
        role="img"
        aria-label={
          state === "bloomed"
            ? `A hand-drawn illustration of ${currentObj.label}`
            : state === "feeding"
            ? `Code is turning the thought cloud into ${currentObj.label}`
            : "A pink hand-drawn thought cloud waiting for code"
        }
      >
        <div
          ref={growthRef}
          className="flower-growth"
          aria-hidden="true"
          onAnimationEnd={handleAnimationEnd}
        >
          {/* Wobbling Thought Cloud (Seed) */}
          <div className="flower-seed thought-cloud">
            <img
              src="/assets/home/thought-cloud-1.png"
              width="512"
              height="408"
              alt=""
              decoding="async"
            />
            <img
              src="/assets/home/thought-cloud-2.png"
              width="512"
              height="408"
              alt=""
              decoding="async"
            />
          </div>

          {/* Bloomed Objects */}
          <div className="flower-bloom">
            {OBJECTS.map((obj, idx) => (
              <div
                key={obj.slug}
                className="thought-object"
                data-object={obj.slug}
                data-label={obj.label}
                hidden={idx !== objectIndex}
              >
                <img
                  src={`/assets/home/thought-${obj.slug}-1.png`}
                  width="512"
                  height="512"
                  alt=""
                  decoding="async"
                />
                <img
                  src={`/assets/home/thought-${obj.slug}-2.png`}
                  width="512"
                  height="512"
                  alt=""
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Flying Code Tokens during feeding */}
        <div className="flower-food" aria-hidden="true">
          {CODE_TOKENS.map((token, index) => {
            const xOffset = (index % 2 ? 1 : -1) * (55 + (index % 3) * 20);
            const delay = index * 100;
            return (
              <span
                key={index}
                style={{
                  "--food-x": `${xOffset}px`,
                  "--food-delay": `${delay}ms`,
                }}
              >
                {token}
              </span>
            );
          })}
        </div>
      </div>

      {/* Interactive Trigger Button */}
      <div className="mt-4 flex justify-center">
        <button
          type="button"
          onClick={handleFeed}
          disabled={state === "feeding" || !isLoaded}
          className="flower-feed group"
          aria-live="polite"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-[#b11f4b] group-hover:scale-125 transition-transform" />
          <span>{buttonLabel}</span>
          <span className="text-xs font-mono opacity-60">✨</span>
        </button>
      </div>

      {/* Status Caption */}
      <p className="flower-status" role="status">
        {statusText}
      </p>
    </div>
  );
};

export default AnimatedDoodle;
