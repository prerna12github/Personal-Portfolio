import { useEffect, useMemo, useState } from "react"

import { cn } from "@/lib/utils"

const DEFAULT_GRIDS = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
}

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1200,
  maxAnimationDelay = 2100,
  colorRevealDelay = 2300,
  puzzleSpread = 200,
  customGrid,
  triggerAnimation = false,
  animationType = "spiral", // "spiral", "explode", "flip", "cascade"
  glowEffect = true,
  shimmerEffect = true,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showColor, setShowColor] = useState(false)
  const [isAssembled, setIsAssembled] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)

  const MIN_GRID = 1
  const MAX_GRID = 16

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (grid) => {
      if (!grid) return false
      const { rows, cols } = grid
      return (Number.isInteger(rows) &&
      Number.isInteger(cols) &&
      rows >= MIN_GRID &&
      cols >= MIN_GRID &&
      rows <= MAX_GRID && cols <= MAX_GRID);
    }

    return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid] || DEFAULT_GRIDS["6x4"];
  }, [customGrid, grid])

  useEffect(() => {
    if (triggerAnimation) {
      setAnimationKey(prev => prev + 1)
    }
  }, [triggerAnimation])

  useEffect(() => {
    if (!triggerAnimation) {
      setIsVisible(false)
      setIsAssembled(false)
      setShowColor(false)
      return
    }

    setIsVisible(true)

    const assembleTimeout = setTimeout(() => {
      setIsAssembled(true)
    }, maxAnimationDelay)

    const colorTimeout = setTimeout(() => {
      setShowColor(true)
    }, maxAnimationDelay + pixelFadeInDuration + colorRevealDelay)

    return () => {
      clearTimeout(assembleTimeout)
      clearTimeout(colorTimeout)
    };
  }, [colorRevealDelay, maxAnimationDelay, pixelFadeInDuration, animationKey, triggerAnimation])

  const pieces = useMemo(() => {
    const total = rows * cols
    const centerX = cols / 2
    const centerY = rows / 2

    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols

      // Curved clip path using bezier curves for organic puzzle look
      const cellWidth = 100 / cols
      const cellHeight = 100 / rows
      const x1 = col * cellWidth
      const y1 = row * cellHeight
      const x2 = (col + 1) * cellWidth
      const y2 = (row + 1) * cellHeight

      const clipPath = `path('M ${x1}% ${y1 + cellHeight * 0.3}%
        Q ${x1}% ${y1}% ${x1 + cellWidth * 0.3}% ${y1}%
        L ${x2 - cellWidth * 0.3}% ${y1}%
        Q ${x2}% ${y1}% ${x2}% ${y1 + cellHeight * 0.3}%
        L ${x2}% ${y2 - cellHeight * 0.3}%
        Q ${x2}% ${y2}% ${x2 - cellWidth * 0.3}% ${y2}%
        L ${x1 + cellWidth * 0.3}% ${y2}%
        Q ${x1}% ${y2}% ${x1}% ${y2 - cellHeight * 0.3}%
        Z')`

      // Calculate distance from center for various effects
      const distanceFromCenter = Math.sqrt(Math.pow(col - centerX, 2) + Math.pow(row - centerY, 2))
      const angle = Math.atan2(row - centerY, col - centerX)

      // Different animation patterns
      let scatterX, scatterY, rotation, delay

      if (animationType === "spiral") {
        // Spiral pattern - pieces rotate around center
        const spiralAngle = angle + distanceFromCenter * 0.8
        const spread = puzzleSpread * (0.5 + distanceFromCenter * 0.15)
        scatterX = Math.cos(spiralAngle) * spread
        scatterY = Math.sin(spiralAngle) * spread
        rotation = (Math.random() - 0.5) * 180 + distanceFromCenter * 15
        delay = (row * cols + col) * (maxAnimationDelay / total) * 0.5
      } else if (animationType === "explode") {
        // Explosion pattern - pieces radiate outward
        const spread = puzzleSpread * (0.8 + distanceFromCenter * 0.2)
        scatterX = Math.cos(angle) * spread * (0.8 + Math.random() * 0.4)
        scatterY = Math.sin(angle) * spread * (0.8 + Math.random() * 0.4)
        rotation = (Math.random() - 0.5) * 360
        delay = distanceFromCenter * 80 + Math.random() * 300
      } else if (animationType === "flip") {
        // Flip pattern - pieces flip in from random positions
        const spread = puzzleSpread * 1.2
        scatterX = (Math.random() - 0.5) * spread * 2
        scatterY = (Math.random() - 0.5) * spread * 2
        rotation = Math.random() > 0.5 ? 720 : -720
        delay = (row * cols + col) * (maxAnimationDelay / total) * 0.7 + Math.random() * 200
      } else {
        // Cascade pattern - pieces fall from top
        scatterX = (Math.random() - 0.5) * puzzleSpread * 0.5
        scatterY = -Math.random() * puzzleSpread * 1.5 - 100
        rotation = (Math.random() - 0.5) * 60
        delay = row * (maxAnimationDelay / rows) * 0.6 + Math.random() * 250
      }

      // Edge pieces get more rotation
      const isEdgePiece = row === 0 || row === rows - 1 || col === 0 || col === cols - 1
      if (isEdgePiece && animationType !== "flip") {
        rotation *= 1.3
      }

      // Calculate glow intensity based on position
      const glowIntensity = 1 - (distanceFromCenter / Math.sqrt(Math.pow(centerX, 2) + Math.pow(centerY, 2)))

      return {
        clipPath,
        delay,
        scatterX,
        scatterY,
        rotation,
        glowIntensity,
        isEdgePiece,
      }
    });
  }, [rows, cols, maxAnimationDelay, puzzleSpread, animationType])

  return (
    <div 
      className="relative h-48 w-48 select-none md:h-64 md:w-64 lg:h-72 lg:w-72"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect layer */}
      {glowEffect && isAssembled && (
        <div 
          className="absolute inset-0 rounded-lg"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)",
            filter: "blur(20px)",
            opacity: showColor ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: 0,
          }}
        />
      )}
      
      {pieces.map((piece, index) => {
        const row = Math.floor(index / cols)
        const col = index % cols

        const objectPositionX = cols > 1 ? (col * 100) / (cols - 1) : 50
        const objectPositionY = rows > 1 ? (row * 100) / (rows - 1) : 50

        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all"
            )}
            style={{
              clipPath: piece.clipPath,
              transitionDelay: `${piece.delay}ms`,
              transitionDuration: `${pixelFadeInDuration}ms`,
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transform: isAssembled
                ? "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)"
                : `translate3d(${piece.scatterX}px, ${piece.scatterY}px, ${-Math.abs(piece.scatterX * 0.3)}px) rotateX(${piece.rotation * 0.3}deg) rotateY(${piece.rotation * 0.2}deg) rotateZ(${piece.rotation}deg) scale(0.7)`,
              opacity: isVisible ? 1 : 0,
              zIndex: isAssembled ? 2 : 1,
              filter: glowEffect && !isAssembled && piece.glowIntensity > 0.5
                ? `drop-shadow(0 0 ${Math.round(piece.glowIntensity * 15)}px rgba(168,85,247,${piece.glowIntensity * 0.6}))`
                : "none",
            }}>
            {/* Shimmer effect layer */}
            {shimmerEffect && (
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  opacity: isAssembled && showColor ? 0 : 0.3,
                  transition: `opacity ${pixelFadeInDuration}ms ease-out ${piece.delay + 500}ms`,
                  pointerEvents: "none",
                }}
              />
            )}
            
            <img
              src={src}
              alt={`Pixel image piece ${index + 1}`}
              className={cn(
                "absolute inset-0 object-cover",
                grayscaleAnimation && (showColor ? "grayscale-0" : "grayscale")
              )}
              style={{
                objectPosition: `${objectPositionX}% ${objectPositionY}%`,
                transition: grayscaleAnimation
                  ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1) ${piece.delay}ms`
                  : "none",
              }}
              draggable={false} />
              
            {/* Edge highlight for puzzle pieces */}
            {!isAssembled && (
              <div
                className="absolute inset-0"
                style={{
                  clipPath: piece.clipPath,
                  border: "1px solid rgba(168,85,247,0.3)",
                  opacity: isVisible ? 0.5 : 0,
                  transition: `opacity ${pixelFadeInDuration}ms ease-out`,
                }}
              />
            )}
          </div>
        )
      })}
    </div>
  );
}
