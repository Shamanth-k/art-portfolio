"use client"

import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p className="font-mono text-xs text-muted-foreground">
          © {currentYear} local visuals
        </p>
        
        <p className="font-mono text-xs text-muted-foreground">
          Manglore, IN
        </p>
      </motion.div>
    </footer>
  )
}
