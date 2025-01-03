import { useRef, useCallback } from 'react'
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
    const pillarsRef = useRef<HTMLElement>(null)
    const historyRef = useRef<HTMLElement>(null)
  
    const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, [])
  
    return (
      <div className="relative min-h-screen overflow-hidden">
        {/* Gradient Aura Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-pink-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/4 bottom-1/4 w-1/2 h-1/2 bg-gradient-to-tr from-green-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute right-1/3 top-1/3 w-1/3 h-1/3 bg-gradient-to-bl from-red-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
          <div className="absolute left-1/2 top-1/2 w-1/4 h-1/4 bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-3000"></div>
        </div>
  
        {/* Main Content */}
        <div className="relative min-h-screen bg-white bg-opacity-95">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
  
            <nav className="mb-8">
              <ul className="flex justify-center space-x-4 p-4 bg-gray-100 bg-opacity-80 rounded-lg">
                <li>
                  <button 
                    onClick={() => scrollToSection(executivesRef)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Executive Board
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(pillarsRef)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Our Pillars
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(historyRef)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Our History
                  </button>
                </li>
              </ul>
            </nav>
  
            <section ref={executivesRef} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Executive Board</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {executives.map((exec, index) => (
                  <div key={index} className="flex flex-col items-center bg-white bg-opacity-80 p-4 rounded-lg">
                    <Image
                      src={exec.image}
                      alt={exec.name}
                      width={100}
                      height={100}
                      className="rounded-full mb-2"
                    />
                    <h3 className="font-semibold">{exec.name}</h3>
                    <p className="text-sm text-gray-600">{exec.position}</p>
                    <div className="w-full h-2 bg-blue-500 mt-2 rounded-full"></div>
                  </div>
                ))}
              </div>
            </section>
  
            <section ref={pillarsRef} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Pillars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {pillars.map((pillar, index) => (
                  <div 
                    key={index} 
                    className="bg-white bg-opacity-80 p-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-opacity-100"
                  >
                    <h3 className="font-semibold mb-2 text-lg">{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </div>
                ))}
              </div>
            </section>
  
            <section ref={historyRef} className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our History</h2>
              <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-full md:w-2/3 order-2 md:order-1">
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium mb-4">
                      Theta Tau is the oldest and largest co-ed professional engineering fraternity in the United States.
                      Since its founding at the University of Minnesota in 1904, we have shaped the engineering profession
                      by fostering brotherhood among engineering students and professionals. Theta Tau was founded at the 
                      University of Minnesota by Erich J. Schrader, Elwin L. Vinal, William M. Lewis, and Isaac B. Hanks.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium">                        
                      Our organization emphasizes professional development, academic excellence, personal integrity, and a
                      strong sense of fraternal brotherhood. Through our three pillars of professional development, service,
                      and brotherhood, we cultivate leaders who make lasting impacts in their communities and the engineering field.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 order-1 md:order-2">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Theta Tau History"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-sm"
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