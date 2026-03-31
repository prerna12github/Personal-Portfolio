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
  customGrid
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showColor, setShowColor] = useState(false)
  const [isAssembled, setIsAssembled] = useState(false)

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
    setIsVisible(true)

    // First, pieces assemble
    const assembleTimeout = setTimeout(() => {
      setIsAssembled(true)
    }, maxAnimationDelay)

    // Then, color is revealed after assembly
    const colorTimeout = setTimeout(() => {
      setShowColor(true)
    }, maxAnimationDelay + pixelFadeInDuration + colorRevealDelay)

    return () => {
      clearTimeout(assembleTimeout)
      clearTimeout(colorTimeout)
    };
  }, [colorRevealDelay, maxAnimationDelay, pixelFadeInDuration])

  const pieces = useMemo(() => {
    const total = rows * cols
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`

      // Calculate scattered position (random offset from center)
      const angle = (index / total) * Math.PI * 2
      const spread = puzzleSpread * (0.5 + Math.random() * 0.5)
      const scatterX = Math.cos(angle) * spread
      const scatterY = Math.sin(angle) * spread
      
      // Random rotation for puzzle effect
      const rotation = (Math.random() - 0.5) * 60

      const delay = Math.random() * maxAnimationDelay
      return {
        clipPath,
        delay,
        scatterX,
        scatterY,
        rotation,
      }
    });
  }, [rows, cols, maxAnimationDelay, puzzleSpread])

  return (
    <div className="relative h-72 w-72 select-none md:h-96 md:w-96">
      {pieces.map((piece, index) => {
        const row = Math.floor(index / cols)
        const col = index % cols

        // Calculate object-position to show the correct portion of the image
        const objectPositionX = cols > 1 ? (col * 100) / (cols - 1) : 50
        const objectPositionY = rows > 1 ? (row * 100) / (rows - 1) : 50

        return (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all ease-out"
            )}
            style={{
              clipPath: piece.clipPath,
              transitionDelay: `${piece.delay}ms`,
              transitionDuration: `${pixelFadeInDuration}ms`,
              transform: isAssembled 
                ? "translate(0, 0) rotate(0deg)" 
                : `translate(${piece.scatterX}px, ${piece.scatterY}px) rotate(${piece.rotation}deg)`,
              opacity: isVisible ? 1 : 0,
              zIndex: 1,
            }}>
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
                  ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                  : "none",
              }}
              draggable={false} />
          </div>
        )
      })}
    </div>
  );
}
