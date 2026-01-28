"use client"

import { useState } from "react"
import { Hero } from "@/components/portfolio/hero"
import { WorkSelector } from "@/components/portfolio/work-selector"
import { Gallery } from "@/components/portfolio/gallery"
import { VideoReel } from "@/components/portfolio/video-reel"
import { SelectedWorks } from "@/components/portfolio/selected-works"
import { About } from "@/components/portfolio/about"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { DustParticles } from "@/components/portfolio/dust-particles"
import { works, projects, skills, type Category } from "@/lib/portfolio-data"

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  return (
    <main className="relative min-h-screen">
      {/* Site-wide atmospheric dust particles with cursor interaction */}
      <DustParticles />
      <Hero />
      
      <WorkSelector 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <Gallery 
        works={works} 
        activeCategory={activeCategory} 
      />
      
      <VideoReel />
      
      <SelectedWorks projects={projects} />
      
      <About skills={skills} />
      
      <Contact />
      
      <Footer />
    </main>
  )
}
