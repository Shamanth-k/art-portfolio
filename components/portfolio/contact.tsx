"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Copy, Check } from "lucide-react"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "shamanthk2004@gmail.com"

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-accent mb-8 block">
          Get in Touch
        </span>

        <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 text-balance">
          {"Let's work together"}
        </h2>

        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          Available for select projects, collaborations, and commissions. Based in Manglore, working globally.
        </p>

        {/* Email with copy */}
        <div className="mb-16">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 font-mono text-lg md:text-xl text-foreground hover:text-accent transition-colors"
          >
            <span>{email}</span>
            {copied ? (
              <Check className="w-5 h-5 text-accent" />
            ) : (
              <Copy className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-xs text-accent mt-2"
            >
              Copied to clipboard
            </motion.p>
          )}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com/local._visuals?igsh=aGJxNjR1Zm95a296"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Instagram
            </span>
          </a>
          
          {/* <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
            aria-label="Behance"
          >
            <svg 
              className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
            </svg>
            <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              Behance
            </span>
          </a>
          
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              YouTube
            </span>
          </a> */}
        </div>
      </motion.div>
    </section>
  )
}
