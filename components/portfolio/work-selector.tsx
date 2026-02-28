"use client"

import { motion } from "framer-motion"

type Category = "all" | "photography" | "editing" | "design"

interface WorkSelectorProps {
  activeCategory: Category
  onCategoryChange: (category: Category) => void
}

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "photography", label: "Photography" },
  { id: "editing", label: "Editing" },
  { id: "design", label: "Design" },
]

export function WorkSelector({ activeCategory, onCategoryChange }: WorkSelectorProps) {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap justify-center gap-x-6 gap-y-5 md:gap-16"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onCategoryChange(category.id)}
            className="group relative"
          >
            <span
              className={`font-sans text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight transition-colors duration-300 ${
                activeCategory === category.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.label}
            </span>
            
            {/* Underline indicator */}
            <motion.div
              className="absolute -bottom-2 left-0 h-px bg-accent"
              initial={{ width: 0 }}
              animate={{ 
                width: activeCategory === category.id ? "100%" : 0 
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Hover underline */}
            <div 
              className={`absolute -bottom-2 left-0 w-0 h-px bg-accent/50 transition-all duration-300 group-hover:w-full ${
                activeCategory === category.id ? "opacity-0" : "opacity-100"
              }`} 
            />
          </motion.button>
        ))}
      </motion.div>
    </section>
  )
}
