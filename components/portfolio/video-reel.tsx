"use client"

import { motion } from "framer-motion"

export function VideoReel() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-accent mb-8 block">
          Editing Showreel
        </span>

        <div className="relative aspect-video bg-secondary overflow-hidden">
          {/* Video element - replace src with actual video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/resources/thumbnail/kateel.jpg"
          >
            <source src="/resources/reels/kateel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </section>
  )
}
