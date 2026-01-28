"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Category, WorkItem } from "@/lib/portfolio-data"

interface GalleryProps {
  works: WorkItem[]
  activeCategory: Category
}

export function Gallery({ works, activeCategory }: GalleryProps) {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredWorks = activeCategory === "all"
    ? works
    : works.filter(work => work.category === activeCategory)

  const openModal = (work: WorkItem) => {
    setSelectedWork(work)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedWork(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) =>
        prev === selectedWork.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedWork) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedWork.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <>
      <section className="px-6 md:px-12 lg:px-24 pb-24 md:pb-32">
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredWorks.map((work, index) => (
              <motion.article
                key={work.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="mb-6 break-inside-avoid group cursor-pointer"
                onClick={() => openModal(work)}
              >
                <div className="relative overflow-hidden">
                  {/* 9:16 aspect ratio for thumbnails */}
                  <div className="aspect-[9/16] bg-secondary relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${work.thumbnail})` }}
                    />
                    {/* Fallback gradient for missing images */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="font-sans text-xl md:text-2xl font-medium text-foreground mb-2">
                      {work.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-accent">
                      {work.year}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl mx-6 flex items-center justify-center min-h-[60vh]"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="fixed md:absolute top-6 right-6 z-50 p-3 bg-background/80 rounded-full shadow-lg text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Fixed-size media container - dimensions based on category type */}
                <div className="relative flex items-center justify-center">
                  <div className={`${selectedWork.category === 'design' || selectedWork.category === 'photography' ? 'w-[400px] h-[400px]' : 'w-[360px] h-[540px]'} bg-black overflow-hidden rounded-lg flex items-center justify-center`}>
                    {selectedWork.images[currentImageIndex].endsWith('.mp4') ? (
                      <video
                        src={selectedWork.images[currentImageIndex]}
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="max-w-full max-h-full object-contain"
                        onClick={e => e.stopPropagation()}
                      />
                    ) : (
                      <img
                        src={selectedWork.images[currentImageIndex]}
                        alt={selectedWork.title}
                        className="max-w-full max-h-full object-contain"
                        onClick={e => e.stopPropagation()}
                      />
                    )}
                  </div>
                  {selectedWork.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 bg-background/50 hover:bg-background/80 transition-colors rounded-full"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 p-2 bg-background/50 hover:bg-background/80 transition-colors rounded-full"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      {/* Image indicators */}
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedWork.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? "bg-accent" : "bg-muted-foreground/50"
                              }`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Work details */}
                <div className="flex flex-col justify-center py-4 lg:py-12">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent mb-4">
                    {selectedWork.year} · {selectedWork.category}
                  </span>
                  <h2 className="font-sans text-3xl md:text-4xl font-medium text-foreground mb-6">
                    {selectedWork.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {selectedWork.description}
                  </p>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3 block">
                      Tools Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedWork.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-xs px-3 py-1 bg-secondary text-secondary-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
