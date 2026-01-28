export type Category = "all" | "photography" | "editing" | "design"

export interface WorkItem {
  id: string
  title: string
  year: string
  category: Exclude<Category, "all">
  thumbnail: string
  images: string[]
  description: string
  tools: string[]
}

export interface Project {
  id: string
  title: string
  type: "Personal" | "Concept" | "Study"
  image: string
  description: string
  tools: string[]
}

export const works: WorkItem[] = [
  {

    id: "liquid-poster",
    title: "Reality Is Liquid",
    year: "2025",
    category: "design",
    thumbnail: "/resources/graphic-design/P-1.jpg",
    images: ["/resources/graphic-design/P-1.jpg"],
    description: "Abstract typographic poster exploring perceptual illusion through fluid light forms, neon gradients, and distorted motion aesthetics. Focused on the concept of reality as a shifting, unstable experience.",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
  },
{
id: "see-the-good",
title: "See The Good",
year: "2025",
category: "design",
thumbnail: "/resources/graphic-design/P-2.jpg",
images: ["/resources/graphic-design/P-2.jpg"],
description: "Minimalist typographic poster using bold 3D extrusion and warm gradient lighting to convey optimism and depth. Focused on perspective, visual hierarchy, and cinematic typography.",
tools: ["Adobe Photoshop", "Adobe Illustrator"],
},

{
id: "waiting-poster",
title: "I Will Keep Waiting",
year: "2025",
category: "design",
thumbnail: "/resources/graphic-design/P-3.jpg",
images: ["/resources/graphic-design/P-3.jpg"],
description: "Editorial-style poster blending classical sculpture with gothic typography and halftone textures. Explores themes of patience, faith, and emotional permanence through contrast between ancient form and modern print aesthetics.",
tools: ["Adobe Photoshop", "Adobe Illustrator"],
},
{
id: "restricted-future",
title: "Restricted Future",
year: "2025",
category: "design",
thumbnail: "/resources/graphic-design/P-4.jpg",
images: ["/resources/graphic-design/P-4.jpg"],
description: "Experimental typographic poster using optical line patterns and glitch overlays to simulate data restriction and digital distortion. Explores surveillance, control systems, and machine-era identity.",
tools: ["Adobe Photoshop", "Adobe Illustrator"],
},
{
id: "lovers-poster",
title: "Lovers",
year: "2025",
category: "design",
thumbnail: "/resources/graphic-design/P-5.jpg",
images: ["/resources/graphic-design/P-5.jpg"],
description: "Romantic editorial poster merging classical sculpture with gothic typography and halftone print textures. Explores intimacy, vulnerability, and timeless human connection through vintage cinematic aesthetics.",
tools: ["Adobe Photoshop", "Adobe Illustrator"],
},
  {
    id: "recap",
    title: "2025 recap",
    year: "2025",
    category: "editing",
    thumbnail: "/resources/thumbnail/recapthumbnail.png",
    images: ["/resources/reels/2025-recape.mp4"],
   description:"A fast-cut visual recap capturing the defining moments, creative output, and visual experiments of 2025. The video documents growth, iterations, and evolving design language through posters, motion studies, and conceptual work. Focused on progression over perfection, process over noise, and the consolidation of a distinct visual identity built across the year.",
    tools: ["Premiere Pro"],
  },
  {
    id: "rainyday",
    title: "Rainy Day",
    year: "2024",
    category: "editing",
    thumbnail: "/resources/thumbnail/rain-thumbnail.png",
    images: ["/resources/reels/rainy.mp4"],
    description: "A minimal daytime reel capturing the quiet rhythm of a rainy city. Soft light, muted colors, and slow movement focus on atmosphere rather than action, highlighting reflections, falling rain, and everyday motion. The reel emphasizes calm, simplicity, and the subtle mood of a rainy day without visual noise.",
    tools: ["Premiere Pro"],
  },
  {
    id: "audio-design",
    title: "audio design",
    year: "2023",
    category: "editing",
    thumbnail: "/resources/thumbnail/audio-design.png",
    images: ["/resources/reels/Sequence 01.mp4"],
    description: "An experimental audio design piece focused on transforming standard video sound into an immersive 8D experience. The edit explores spatial movement, depth, and direction by rotating audio across channels, enhancing presence and emotional impact. Built through layering, panning automation, and frequency balance to create a sense of motion beyond the screen.",
    tools: ["Premiere Pro"],
  },
  {
    id: "temple-visit",
    title: "Temple visit",
    year: "2024",
    category: "editing",
    thumbnail: "/resources/thumbnail/temple-visit.png",
    images: ["/resources/reels/temple-editte.mp4"],
    description: "Editorial design for quarterly print magazine. Focus on typography and white space.",
    tools: ["InDesign", "Photoshop"], 
  },
  {
  id: "mantap-visit",
  title: "Mantap",
  year: "2024",
  category: "photography",
  thumbnail: "/resources/photography/mantap.jpg",
  images: ["/resources/photography/mantap.jpg"],
  description: "Traditional mantap structure during monsoon, surrounded by dense greenery. Focus on roof geometry, natural textures, and rain-driven atmosphere. Shot on Samsung Galaxy S24 Ultra and color-graded in Adobe Lightroom.",
  tools: ["Samsung Galaxy S24 Ultra", "Adobe Lightroom"]
},
{
  id: "live-concert",
  title: "Concert",
  year: "2025",
  category: "photography",
  thumbnail: "/resources/photography/concert.jpg",
  images: ["/resources/photography/concert.jpg"],
  description: "Live stage performance captured mid-act with dynamic lighting and confetti motion. Emphasis on crowd energy, performer expression, and concert atmosphere.",
  tools: ["Samsung Galaxy S24 Ultra", "Adobe Lightroom"]
}

]

export const projects: Project[] = [
{
  id: "mangalore-dasara",
  title: "Mangalore Dasara Reel",
  type: "Personal",
  image: "/resources/reels/Sequence 02_2.mp4",
  description: "High-energy street reel capturing the vibrant atmosphere of Mangalore Dasara. Shot amidst crowds, lights, and movement, focusing on festive colors, cultural elements, and dynamic moments using only a smartphone.",
  tools: ["Google Pixel 8a,", "Adobe Premiere Pro "],
},
  {
    id: "rhythm-cut",
    title: "Rhythm Cut Experiment",
    type: "Concept",
    image: "/images/projects/rhythm-cut.jpg",
    description: "Fast-cut montage built to study pacing and beat matching. Exploring how edit rhythm affects emotional impact using found footage and original clips.",
    tools: ["DaVinci Resolve", "After Effects"],
  },
  {
    id: "minimal-posters",
    title: "Minimal Poster Series",
    type: "Personal",
    image: "/images/projects/posters.jpg",
    description: "Poster concepts exploring typography hierarchy and negative space. Each piece uses only two typefaces and a restricted color palette to study visual balance.",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    id: "golden-hour",
    title: "Golden Hour Compositions",
    type: "Study",
    image: "/images/projects/golden-hour.jpg",
    description: "Landscape and architectural photography during the magic hour. Studying how directional light shapes form and creates depth in everyday environments.",
    tools: ["Canon R5", "24-70mm f/2.8", "Capture One"],
  },
]

export const skills = [
  { name: "Photography", icon: "camera" },
  { name: "Video Editing", icon: "film" },
  { name: "Color Grading", icon: "palette" },
  { name: "Graphic Design", icon: "pen-tool" },
  { name: "Motion Graphics", icon: "play" },
  { name: "Brand Identity", icon: "layers" },
]
