'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import Image from 'next/image'

const pillars = [
    { title: 'Community Service', description: 'Members of Theta Tau make an impact on the world around them through service and philanthropic acts.' },
    { title: 'Professionalism', description: 'Members of Theta Tau are more prepared for the job market, networking, and applying their learning in their work.' },
    { title: 'Brotherhood', description: 'Members of Theta Tau have made friendships and connections that they will maintain for the rest of their lives.' },
  ]

  export function Pillars() { 
    const pillarsRef = useRef<HTMLElement>(null)

    return (
        <section ref={pillarsRef} className="mb-16">
              <h2 className="text-3xl font-semibold mb-6 text-center text-red-800">Our Pillars</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <div 
                    key={index} 
                    className="bg-red-50 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <h3 className="font-semibold mb-3 text-xl text-red-700">{pillar.title}</h3>
                    <p className="text-black-600">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </section>
    )
}