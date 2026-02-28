"use client"

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const roles = ["Photographer", "Editor", "Graphic Designer"]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 25 })
  
  // Type parallax on scroll - name moves slower than roles
  const { scrollY } = useScroll()
  const nameY = useTransform(scrollY, [0, 500], [0, 50])
  const rolesY = useTransform(scrollY, [0, 500], [0, 100])

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      // Subtle cursor influence on role line - 6px max shift
      const offset = ((e.clientX - centerX) / (rect.width / 2)) * 6
      mouseX.set(offset)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-background py-20 md:py-0"
    >
      {/* Pure kinetic typography - no images, no shapes, no borders */}
      <div className="relative z-10 w-full max-w-7xl text-center px-4 sm:px-6 md:px-10 select-none">
        {/* Name - very large (6rem–10rem), bold, dominant */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          style={{ y: nameY }}
          className="mx-auto max-w-[18ch] text-[clamp(2.3rem,12vw,10rem)] font-sans font-semibold tracking-[-0.02em] text-foreground leading-[0.9] mb-8 md:mb-16 text-balance"
        >
          Shamanth Krishna V R
        </motion.h1>

        {/* Roles with letter drift animation and cursor influence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
          style={{ x: smoothX, y: rolesY }}
          className="flex items-center justify-center flex-wrap gap-3 md:gap-8 px-2"
        >
          {roles.map((role, roleIndex) => (
            <div key={role} className="flex items-center gap-3 md:gap-8">
              <span className="flex">
                {role.split("").map((letter, letterIndex) => {
                  // Use a deterministic duration based on indices
                  const duration = 4 + ((roleIndex * 10 + letterIndex) % 20) / 10; // 4.0 - 5.9s
                  return (
                    <motion.span
                      key={`${role}-${letterIndex}`}
                      animate={{
                        y: [0, -1, 0, 1, 0],
                        x: [0, 0.5, 0, -0.5, 0],
                      }}
                      transition={{
                        duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (roleIndex * 3 + letterIndex) * 0.15,
                      }}
                      className="font-mono text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.2em] text-muted-foreground font-light inline-block uppercase"
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </span>
              {roleIndex < roles.length - 1 && (
                <motion.span 
                  animate={{ opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-foreground/20 text-[10px] sm:text-xs"
                >
                  ·
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - minimal, breathing opacity */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2 }}
        className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="w-px h-8 md:h-10 bg-foreground/20"
        />
      </motion.div>
    </section>
  )
}
