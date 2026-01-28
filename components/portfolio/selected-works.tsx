"use client"

import { motion } from "framer-motion"
import type { Project } from "@/lib/portfolio-data"

interface SelectedWorksProps {
  projects: Project[]
}

export function SelectedWorks({ projects }: SelectedWorksProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-accent mb-16 block">
          Selected Works
        </span>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Full width media - video or image */}
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-secondary overflow-hidden mb-8">
                {project.image.endsWith('.mp4') ? (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <video
                      src={project.image}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                )}
              </div>

              {/* Project details */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="font-sans text-2xl md:text-3xl font-medium text-foreground">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wider text-accent px-2 py-1 border border-accent/30">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tools */}
                <div className="md:text-right">
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Tools
                  </span>
                  <div className="flex flex-wrap md:justify-end gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-xs text-foreground/70"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
