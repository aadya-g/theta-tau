'use client'

import { useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'

const executives = [
  { name: 'Ryan Hogan', position: 'Regent', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Bennett Kinney', position: 'Vice Regent', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Ben Levy', position: 'Corresponding Secretary', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Kate Briesemeister', position: 'Scribe', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Liam Gaiden', position: 'Treasurer', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Gianna McLeod', position: 'Treasurer', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Katie Mangus', position: 'Marshall', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Ike Fritz', position: 'Marshall', image: '/placeholder.svg?height=100&width=100' },
]

const pillars = [
  { title: 'Community Service', description: 'Members of Theta Tau make an impact on the world around them through service and philanthropic acts.' },
  { title: 'Professionalism', description: 'Members of Theta Tau are more prepared for the job market, networking, and applying their learning in their work.' },
  { title: 'Brotherhood', description: 'Members of Theta Tau have made friendships and connections that they will maintain for the rest of their lives.' },
]

export default function Page() {
    const executivesRef = useRef<HTMLElement>(null)
    const xiChapterRef = useRef<HTMLElement>(null)
    const pillarsRef = useRef<HTMLElement>(null)
    const historyRef = useRef<HTMLElement>(null)
  
    const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])
  
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-red-100 to-white-100">
        {/* Main Content */}
        <div className="relative min-h-screen">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold mb-8 text-center">About Us</h1>
  
            <nav className="mb-12">
              <ul className="flex flex-wrap justify-center gap-4">
                {[
                  { ref: executivesRef, text: 'Executive Board' },
                  { ref: xiChapterRef, text: 'Xi Chapter' },
                  { ref: pillarsRef, text: 'Our Pillars' },
                  { ref: historyRef, text: 'Our History' },
                ].map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => scrollToSection(item.ref)}
                      className="px-6 py-2 bg-white rounded-full shadow-md text-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
  
            <section ref={executivesRef} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-red-900">Our Executive Board</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {executives.map((exec, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-4"
                    />
                    <h3 className="font-semibold text-lg">{exec.name}</h3>
                    <p className="text-sm text-gray-600">{exec.position}</p>
                  </div>
                ))}
              </div>
            </section>

            <section ref={xiChapterRef} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-red-900">Xi Chapter</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-full md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Xi Chapter"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      The Xi Chapter of Theta Tau was founded at the University of Wisconsin-Madison on May 15, 1920. For over a century, our chapter has been a cornerstone of engineering excellence and professional development on campus.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Throughout our history, Xi Chapter has produced numerous distinguished alumni who have made significant contributions to the field of engineering and beyond. Our members have gone on to become industry leaders, innovators, and educators.
                    </p>
                    <p className="text-gray-700">
                      Today, Xi Chapter continues to uphold the values and traditions of Theta Tau while adapting to the ever-changing landscape of engineering. We are committed to fostering a diverse and inclusive community of future engineers who will shape the world of tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </section>
  
            <section ref={pillarsRef} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-red-900">Our Pillars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="font-semibold mb-3 text-xl text-red-900">{pillar.title}</h3>
                    <p className="text-gray-700">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </section>
  
            <section ref={historyRef} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-red-900">Our History</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-full md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      Theta Tau is the oldest and largest co-ed professional engineering fraternity in the United States.
                      Since its founding at the University of Minnesota in 1904, we have shaped the engineering profession
                      by fostering brotherhood among engineering students and professionals. Theta Tau was founded at the 
                      University of Minnesota by Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks.
                    </p>
                    <p className="text-gray-700">                        
                      Our organization emphasizes professional development, academic excellence, personal integrity, and a
                      strong sense of fraternal brotherhood. Through our three pillars of professional development, service,
                      and brotherhood, we cultivate leaders who make lasting impacts in their communities and the engineering field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Theta Tau History"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

