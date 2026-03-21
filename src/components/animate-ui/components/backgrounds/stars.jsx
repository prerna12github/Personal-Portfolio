import * as React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

import { cn } from '@/lib/utils';

function generateStarPositions(count) {
  const positions = [];
  for (let i = 0; i < count; i++) {
    positions.push({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
    });
  }
  return positions;
}

function StarLayer({
  count = 200,
  speed = 50,
  starColor = '#fff',
  className,
}) {
  const [stars, setStars] = React.useState([]);

  React.useEffect(() => {
    setStars(generateStarPositions(count));
  }, [count]);

  return (
    <motion.div
      data-slot="star-layer"
      animate={{ y: [0, -1000] }}
      transition={{ repeat: Infinity, duration: speed, ease: 'linear' }}
      className={cn('absolute top-0 left-0 w-full h-[1000px]', className)}>
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: starColor,
            opacity: star.opacity,
          }}
        />
      ))}
      {/* Duplicate for seamless loop */}
      {stars.map((star, i) => (
        <div
          key={`dup-${i}`}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: `${parseFloat(star.top) + 1000}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: starColor,
            opacity: star.opacity,
          }}
        />
      ))}
    </motion.div>
  );
}

function StarsBackground({
  children,
  className,
  factor = 0.05,
  speed = 50,
  starColor = '#fff',
  ...props
}) {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const springX = useSpring(offsetX, { stiffness: 50, damping: 20 });
  const springY = useSpring(offsetY, { stiffness: 50, damping: 20 });

  const handleMouseMove = React.useCallback((e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    offsetX.set(-(e.clientX - centerX) * factor);
    offsetY.set(-(e.clientY - centerY) * factor);
  }, [factor, offsetX, offsetY]);

  return (
    <div
      data-slot="stars-background"
      className={cn('relative w-full bg-slate-950', className)} // ✅ removed overflow-hidden & min-h-screen
      onMouseMove={handleMouseMove}   // ✅ moved here so it covers full page
      {...props}
    >
      {/* Stars layer - fixed so it covers viewport while scrolling */}
      <div className="fixed inset-0 z-0 pointer-events-none"> {/* ✅ fixed instead of absolute, z-0 not -z-10 */}
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute inset-0"
        >
          <StarLayer count={300} speed={speed} starColor={starColor} />
          <StarLayer count={150} speed={speed * 1.5} starColor={starColor} />
          <StarLayer count={100} speed={speed * 2} starColor={starColor} />
        </motion.div>
      </div>

      {/* Content sits above stars */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export { StarLayer, StarsBackground };
