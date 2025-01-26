"use client"

import { useEffect, useRef } from "react"

const HorrorParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
    }[] = []

    const colors = ["#ff0000", "#8b0000", "#800000", "#8b0000"]

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.radius)
        gradient.addColorStop(0, particle.color)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2)
        ctx.fill()

        particle.x += particle.vx
        particle.y += particle.vy

        // Create a swirling effect
        particle.vx += Math.sin(particle.y * 0.02) * 0.02
        particle.vy -= Math.sin(particle.x * 0.02) * 0.02

        // Contain particles within the canvas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx
        if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-10" />
}

export default HorrorParticles

