"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  baseSpeedX: number
  baseSpeedY: number
  opacity: number
}

export function DustParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      initParticles()
    }

    const initParticles = () => {
      const particles: Particle[] = []
      // Sparse density - about 1 particle per 25000px²
      const particleCount = Math.floor((canvas.width * canvas.height) / 25000)

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          // Tiny random sizes
          size: Math.random() * 1.2 + 0.3,
          // Extremely slow base movement
          baseSpeedX: (Math.random() - 0.5) * 0.08,
          baseSpeedY: (Math.random() - 0.5) * 0.06,
          // 3-8% opacity as specified
          opacity: Math.random() * 0.05 + 0.03,
        })
      }
      particlesRef.current = particles
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track mouse position relative to document
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const scrollY = window.scrollY
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      for (const p of particlesRef.current) {
        // Apply extremely slow base drift
        p.x += p.baseSpeedX
        p.y += p.baseSpeedY

        // Cursor interaction - gentle displacement like disturbing dust in air
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const interactionRadius = 120

        if (distance < interactionRadius && distance > 0) {
          // Subtle push away from cursor
          const force = (1 - distance / interactionRadius) * 0.8
          const pushX = (dx / distance) * force
          const pushY = (dy / distance) * force
          p.x += pushX
          p.y += pushY
        }

        // Ease back toward origin position over time
        const returnSpeed = 0.002
        p.x += (p.originX - p.x) * returnSpeed
        p.y += (p.originY - p.y) * returnSpeed

        // Wrap around edges
        if (p.x < -10) {
          p.x = canvas.width + 10
          p.originX = p.x
        }
        if (p.x > canvas.width + 10) {
          p.x = -10
          p.originX = p.x
        }
        if (p.y < -10) {
          p.y = canvas.height + 10
          p.originY = p.y
        }
        if (p.y > canvas.height + 10) {
          p.y = -10
          p.originY = p.y
        }

        // Only draw particles in viewport for performance
        const viewportTop = scrollY
        const viewportBottom = scrollY + window.innerHeight
        if (p.y >= viewportTop - 50 && p.y <= viewportBottom + 50) {
          ctx.beginPath()
          ctx.arc(p.x, p.y - scrollY, p.size, 0, Math.PI * 2)
          // Neutral monochrome color
          ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`
          ctx.fill()
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Re-init on scroll to update canvas height if needed
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const newHeight = document.documentElement.scrollHeight
        if (canvas.height !== newHeight) {
          canvas.height = newHeight
        }
      }, 100)
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  )
}
