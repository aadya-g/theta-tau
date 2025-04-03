"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu } from "lucide-react"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
        {/* Header Section with Parallax */}
        <section
          ref={headerRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(139, 0, 0, 0.8), rgba(139, 0, 0, 0.6))",
          }}
        >
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${scrollY * 0.5}px)`,
              filter: "brightness(0.4)",
            }}
          />

          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-block mb-4 overflow-hidden">
                <h1
                  className="text-4xl md:text-6xl font-bold text-white mb-2 transform transition-transform duration-700 translate-y-0 opacity-100"
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    transform: `translateY(${Math.min(scrollY * 0.2, 40)}px)`,
                    opacity: 1 - scrollY * 0.002,
                  }}
                >
                  <span className="text-gold">Theta</span> Tau
                </h1>
              </div>
              <p
                className="text-white/90 text-lg mb-8 max-w-xl mx-auto transform transition-all duration-700"
                style={{
                  opacity: 1 - scrollY * 0.003,
                  transform: `translateY(${Math.min(scrollY * 0.1, 20)}px)`,
                }}
              >
                The oldest, largest, and foremost fraternity for engineers.
              </p>
              <Button
                asChild
                className="bg-transparent hover:bg-gold/20 text-gold border-2 border-gold rounded-none px-8 py-6 font-normal text-base group transition-all duration-300"
              >
                <Link href="/rush" className="flex items-center gap-2">
                  Rush Theta Tau
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              xmlns="https://thetatauxi.org/rush"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/70"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>
        </div>
  )
} 
        