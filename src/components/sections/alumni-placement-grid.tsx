'use client'

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function AlumniPlacementGrid() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Split logos into 4 rows
  const rows = [
    companyLogos.slice(0, 8),
    companyLogos.slice(8, 16),
    companyLogos.slice(16, 24),
    companyLogos.slice(24, 32)
  ];

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8">Our Alumni Network</h2>
        <p className="text-xl text-center text-gray-600 mb-24 max-w-3xl mx-auto leading-relaxed">
          Theta Tau alumni are making significant contributions at leading technology and engineering companies worldwide. Explore our extensive network:
        </p>

        <div className="relative">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="mb-12 overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className={`inline-flex logo-track ${isPaused ? 'paused' : ''}`}
                style={{
                  width: 'fit-content',
                  whiteSpace: 'nowrap'
                }}
              >
                {/* Original set */}
                {row.map((logo, index) => (
                  <div
                    key={index}
                    className="w-[150px] h-[60px] flex items-center justify-center flex-shrink-0 mx-8 transition-transform duration-300 hover:scale-110"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {row.map((logo, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="w-[150px] h-[60px] flex items-center justify-center flex-shrink-0 mx-8 transition-transform duration-300 hover:scale-110"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const companyLogos = [
  { src: "/companies/google.svg", alt: "Google Logo" },
  { src: "/companies/tesla.svg", alt: "Tesla Logo" },
  { src: "/companies/amazon.svg", alt: "Amazon Logo" },
  { src: "/companies/meta.svg", alt: "Meta Logo" },
  { src: "/companies/disney.svg", alt: "Walt Disney Logo" },
  { src: "/companies/mckinsey.svg", alt: "McKinsey Logo" },
  { src: "/companies/lockheed.svg", alt: "Lockheed Martin Logo" },
  { src: "/companies/exxon.svg", alt: "Exxon Logo" },
  { src: "/companies/snapchat.svg", alt: "Snapchat Logo" },
  { src: "/companies/honda.svg", alt: "Honda Logo" },
  { src: "/companies/capital-one.svg", alt: "Capital One Logo" },
  { src: "/companies/moderna.svg", alt: "Moderna Logo" },
  { src: "/companies/marathon.svg", alt: "Marathon Logo" },
  { src: "/companies/pentair.svg", alt: "Pentair Logo" },
  { src: "/companies/cargill.svg", alt: "Cargill Logo" },
  { src: "/companies/stevens.svg", alt: "Stevens Capital Management Logo" },
  { src: "/companies/burns.svg", alt: "Burns and McDonnell Logo" },
  { src: "/companies/ge-healthcare.svg", alt: "GE Healthcare Logo" },
  { src: "/companies/siemens.svg", alt: "Siemens Logo" },
  { src: "/companies/rivian.svg", alt: "Rivian Logo" },
  { src: "/companies/bp.svg", alt: "BP Logo" },
  { src: "/companies/pepsico.svg", alt: "PepsiCo Logo" },
  { src: "/companies/tokyo-electron.svg", alt: "Tokyo Electron Logo" },
  { src: "/companies/boston-scientific.svg", alt: "Boston Scientific Logo" },
  { src: "/companies/jnj.svg", alt: "Johnson & Johnson Logo" },
  { src: "/companies/expedia.svg", alt: "Expedia Logo" },
  { src: "/companies/milwaukee.svg", alt: "Milwaukee Tool Logo" },
  { src: "/companies/rockwell.svg", alt: "Rockwell Automation Logo" },
  { src: "/companies/eaton.svg", alt: "Eaton Aerospace Logo" },
  { src: "/companies/subzero.svg", alt: "Sub-Zero Logo" },
  { src: "/companies/honeywell.svg", alt: "Honeywell Aerospace Logo" },
  { src: "/companies/epic.svg", alt: "Epic Logo" }
];
