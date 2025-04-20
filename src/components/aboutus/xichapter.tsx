'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import Image from 'next/image'

const xiChapterImages = [
    '/ttbanquet.jpg?height=400&width=600',
    '/elections.JPG?height=400&width=600',
    '/advisor_dinner.jpg?height=400&width=600',
    '/ike+katie_banquet.jpeg?height=400&width=600',
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

export function XiChapter() {
    const xiChapterRef = useRef<HTMLElement>(null)

    const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
      }, [])

      return (
        <section ref={xiChapterRef} className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center text-red-800">Xi Chapter</h2>
        <div className="bg-red-50 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/3">
              <ImageCarousel images={xiChapterImages} name="Xi Chapter" />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-black-700 mb-4">
                The Xi Chapter of Theta Tau was founded at the University of Wisconsin-Madison on January 13, 1923. For over a century, our chapter has been a cornerstone of engineering excellence and professional development on campus.
              </p>
              <p className="text-black-700 mb-4">
                Throughout our history, Xi Chapter has produced numerous distinguished alumni who have made significant contributions to the field of engineering and beyond. Our members have gone on to become industry leaders, innovators, and educators.
              </p>
              <p className="text-black-700">
                Today, Xi Chapter continues to uphold the values and traditions of Theta Tau while adapting to the ever-changing landscape of engineering. We are committed to fostering a diverse and inclusive community of future engineers who will shape the world of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
      )
    }
