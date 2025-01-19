'use client'

import Image from "next/image"
import Link from "next/link"
import { Instagram, Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"


export default function RushImage() {
    const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      const scrollContent = Array.from(scrollContainer.children)
      scrollContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        scrollContainer.appendChild(duplicatedItem)
      })

      const scroll = () => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0
        } else {
          scrollContainer.scrollLeft += 1
        }
      }

      const scrollInterval = setInterval(scroll, 30)

      return () => clearInterval(scrollInterval)
    }
  }, [])
    return (

        <section className="w-full py-12 md:py-24 overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Life at Theta Tau</h2>
            <div 
              ref={scrollRef}
              className="flex overflow-x-hidden space-x-4 pb-4"
              style={{ 
                width: "calc(100% + 2rem)",
                marginLeft: "-1rem",
                marginRight: "-1rem"
              }}
            >
              {[
                { alt: "comm serve", src: "/thumbnail_IMG_4179-1024x768.jpg" },
                { alt: "Theta Tau workshop", src: "/20241028_205300_70BC9E.jpeg.jpeg" },
                { alt: "Theta Tau alumni meetup", src: "/20240827_174150_7A6F7D.jpeg" },
                { alt: "Theta Tau campus event", src: "/10861.jpg.jpg" },
                { alt: "Theta Tau hackathon", src: "/20240908_204437_752C9A.jpeg" },
                { alt: "Theta Tau career fair", src: "/public/IMG_4185-1024x768.jpg.jpg" },
              ].map((item, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-xl">
                  <Image
                    alt={item.alt}
                    className="object-cover w-full h-full"
                    height="300"
                    src={`/placeholder.svg?height=300&width=300&text=${item.src.replace(' ', '+')}`}
                    width="300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
    )
              }
