'use client'

import Image from "next/image"

export function AlumniPlacementGrid() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Alumni Network</h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Epsilon Pi Tau alumni are making significant contributions at leading technology and engineering companies worldwide. Explore our extensive network:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-border">
          {companyLogos.map((logo, index) => (
            <div key={index} className="bg-background p-6 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const companyLogos = [
  { src: "/placeholder.svg?height=100&width=100&text=Google", alt: "Google Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Apple", alt: "Apple Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Microsoft", alt: "Microsoft Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Amazon", alt: "Amazon Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Tesla", alt: "Tesla Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=SpaceX", alt: "SpaceX Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=IBM", alt: "IBM Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Intel", alt: "Intel Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=NVIDIA", alt: "NVIDIA Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Boeing", alt: "Boeing Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Lockheed", alt: "Lockheed Martin Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=GE", alt: "General Electric Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Siemens", alt: "Siemens Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=Ford", alt: "Ford Logo" },
  { src: "/placeholder.svg?height=100&width=100&text=NASA", alt: "NASA Logo" },
]