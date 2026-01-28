"use client"

import { motion } from "framer-motion"
import { Camera, Film, Palette, PenTool, Play, Layers } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  camera: Camera,
  film: Film,
  palette: Palette,
  "pen-tool": PenTool,
  play: Play,
  layers: Layers,
}

interface Skill {
  name: string
  icon: string
}

interface AboutProps {
  skills: Skill[]
}

export function About({ skills }: AboutProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-accent mb-16 block">
          About
        </span>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Portrait */}
          <div className="relative">
            <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/portrait.jpg')` }}
              />
              {/* Fallback */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                  <span className="font-sans text-3xl text-muted-foreground">AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:pt-8">
            <h2 className="font-sans text-3xl md:text-4xl font-medium text-foreground mb-8">
              Shamanth Krishna V R
            </h2>
            
            <div className="space-y-4 mb-12">
              <p className="text-muted-foreground leading-relaxed">
                Visual storyteller based in Manglore, working at the intersection of photography, film, and design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over 3 years of experience crafting visual narratives for brands, artists, and publications worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently available for select projects and collaborations.
              </p>
            </div>

            {/* Skills */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-6 block">
                Expertise
              </span>
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Camera
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex flex-col items-center text-center gap-3"
                    >
                      <Icon className="w-5 h-5 text-accent" />
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
