import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-jetbrains-mono'
});

export const metadata: Metadata = {
  title: ' Shamanth Portfolio ',
  description: 'A portfolio showcasing photography, video editing, and graphic design work.',
  icons: {
    icon: '/camera.png',
    apple: '/camera.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0E0E0E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="grain" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
