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
                { alt: "Theta Tau social event", text: "Social Event" },
                { alt: "Theta Tau workshop", text: "Workshop" },
                { alt: "Theta Tau alumni meetup", text: "Alumni Meetup" },
                { alt: "Theta Tau campus event", text: "Campus Event" },
                { alt: "Theta Tau hackathon", text: "Hackathon" },
                { alt: "Theta Tau career fair", text: "Career Fair" },
                { alt: "Theta Tau study group", text: "Study Group" },
                { alt: "Theta Tau volunteer work", text: "Volunteer Work" }
              ].map((item, index) => (
                <div key={index} className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-xl">
                  <Image
                    alt={item.alt}
                    className="object-cover w-full h-full"
                    height="300"
                    src={`/placeholder.svg?height=300&width=300&text=${item.text.replace(' ', '+')}`}
                    width="300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
    )
              }
