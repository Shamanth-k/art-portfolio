# Shamanth Portfolio

A modern, visually stunning portfolio website showcasing photography, video editing, and graphic design work. Built with Next.js 16 and featuring smooth animations, interactive galleries, and a cinematic dark aesthetic.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Configuration](#configuration)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This portfolio website is designed to present creative work across three disciplines:

- **Photography** - High-quality image galleries with detailed project information
- **Video Editing** - Video reels and motion content with inline playback
- **Graphic Design** - Poster designs and visual experiments

The site features a dark, cinematic aesthetic with atmospheric dust particles, smooth scroll animations, and an interactive gallery system.

---

## Features

| Feature | Description |
|---------|-------------|
| **Interactive Gallery** | Filterable portfolio grid with lightbox view and project details |
| **Video Playback** | Inline video player for editing reels and motion content |
| **Category Filter** | Toggle between Photography, Editing, and Design categories |
| **Selected Works** | Featured project carousel with video thumbnails |
| **About Section** | Skills showcase with icon-based visual representation |
| **Contact Form** | Integrated contact section for inquiries |
| **Dust Particles** | Atmospheric particle effects with cursor interaction |
| **Responsive Design** | Fully responsive layout optimized for all screen sizes |
| **Dark Theme** | Cinematic dark aesthetic with grain texture overlay |
| **Smooth Animations** | Framer Motion powered transitions and micro-interactions |

---

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.10 | React framework with App Router |
| React | 19.2.0 | UI component library |
| TypeScript | 5.x | Type-safe development |

### Styling

| Technology | Purpose |
|------------|---------|
| Tailwind CSS | 4.1.9 | Utility-first CSS framework |
| tailwindcss-animate | Animation utilities |
| class-variance-authority | Component variant management |
| tailwind-merge | Conditional class merging |

### UI Components

| Library | Purpose |
|---------|---------|
| Radix UI | Accessible headless component primitives |
| Lucide React | Icon library |
| Framer Motion | Animation library |
| Embla Carousel | Carousel component |

### Fonts

- **Space Grotesk** - Primary sans-serif typeface
- **JetBrains Mono** - Monospace accent font


---

## Project Structure

```
portfolio-website-build/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with fonts and metadata
│   └── page.tsx             # Main portfolio page component
├── components/
│   ├── portfolio/
│   │   ├── about.tsx        # About section with skills grid
│   │   ├── contact.tsx      # Contact form section
│   │   ├── dust-particles.tsx # Atmospheric particle effect
│   │   ├── footer.tsx       # Site footer
│   │   ├── gallery.tsx      # Filterable work gallery
│   │   ├── hero.tsx         # Landing hero section
│   │   ├── selected-works.tsx # Featured projects carousel
│   │   ├── video-reel.tsx   # Video player component
│   │   └── work-selector.tsx # Category filter tabs
│   ├── ui/                  # Reusable UI components (Radix-based)
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   ├── portfolio-data.ts    # Portfolio content and data types
│   └── utils.ts             # Utility functions
├── hooks/                   # Custom React hooks
├── public/
│   └── resources/           # Media assets (images, videos)
├── styles/                  # Additional stylesheets
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** - Version 18.x or higher
- **npm** or **pnpm** - Package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Shamanth-k/art-portfolio.git
cd portfolio-website-build
```

2. Install dependencies:

```bash
npm install
```

Or using pnpm:

```bash
pnpm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## Configuration

### Environment Variables

No environment variables are required for basic functionality.

### Metadata Configuration

Update site metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Shamanth Portfolio',
  description: 'A portfolio showcasing photography, video editing, and graphic design work.',
  icons: {
    icon: '/camera.png',
    apple: '/camera.png',
  },
}
```

---

## Customization

### Adding New Work Items

Edit `lib/portfolio-data.ts` to add new portfolio items:

```typescript
export const works: WorkItem[] = [
  {
    id: "unique-id",
    title: "Project Title",
    year: "2025",
    category: "photography" | "editing" | "design",
    thumbnail: "/resources/path/to/thumbnail.jpg",
    images: ["/resources/path/to/image.jpg"],
    description: "Project description text.",
    tools: ["Tool 1", "Tool 2"],
  },
  // ... additional items
]
```

### Adding Featured Projects

Add entries to the `projects` array in `lib/portfolio-data.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "project-id",
    title: "Project Title",
    type: "Personal" | "Concept" | "Study",
    image: "/resources/path/to/video.mp4",
    description: "Project description.",
    tools: ["Tool 1", "Tool 2"],
  },
]
```

### Updating Skills

Modify the `skills` array in `lib/portfolio-data.ts`:

```typescript
export const skills = [
  { name: "Skill Name", icon: "lucide-icon-name" },
]
```

---

## Deployment

### Vercel (Recommended)

1. Push your repository to GitHub
2. Import the project in Vercel Dashboard
3. Deploy with default settings

### Manual Deployment

Build and export the application:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## License

This project is private and not licensed for public distribution.

---

## Author

**Shamanth K**

Portfolio website showcasing creative work in photography, video editing, and graphic design.
