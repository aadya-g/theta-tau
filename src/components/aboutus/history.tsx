'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import Image from 'next/image'

const historyImages = [
    '/banquetpic.jpg?height=400&width=600',
    '/electionscandid.JPG?height=400&width=600',
    '/retreatpic.JPG?height=400&width=600',
    '/banquetpic1.jpg?height=400&width=600',
  ]

  function ImageCarousel({ images, name }: { images: string[], name: string }) {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }, [images.length])
  
    return (
      <div className="relative overflow-hidden rounded-lg shadow-md">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`${name} Image ${index + 1}`}
              width={600}
              height={400}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
    )
  }

  export function OurHistory() {
    const historyRef = useRef<HTMLElement>(null)

    return (
        <section ref={historyRef} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-red-800">Our History</h2>
              <div className="bg-red-50 p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-full md:w-2/3">
                    <p className="text-black-700 mb-4">
                      Theta Tau is the oldest and largest co-ed professional engineering fraternity in the United States.
                      Since its founding at the University of Minnesota in 1904, we have shaped the engineering profession
                      by fostering brotherhood among engineering students and professionals. Theta Tau was founded at the 
                      University of Minnesota by Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks.
                    </p>
                    <p className="text-black-700">                        
                      Our organization emphasizes professional development, academic excellence, personal integrity, and a
                      strong sense of fraternal brotherhood. Through our three pillars of professional development, service,
                      and brotherhood, we cultivate leaders who make lasting impacts in their communities and the engineering field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <ImageCarousel images={historyImages} name="Theta Tau History" />
                  </div>
                </div>
              </div>
            </section>
    )
}