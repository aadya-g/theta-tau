'use client'

import { useRef, useCallback, useState, useEffect } from 'react'
import Image from 'next/image'

const executives = [
  { name: 'Ryan Hogan', position: 'Regent', image: '/exec_headshots/Ryan_hogan.JPG?height=100&width=100' },
  { name: 'Bennett Kinney', position: 'Vice Regent', image: '/exec_headshots/Bennett_Kinney.JPG?height=100&width=100' },
  { name: 'Ben Levy', position: 'Corresponding Secretary', image: '/exec_headshots/Ben_Levy.JPG?height=100&width=100' },
  { name: 'Kate Briesemeister', position: 'Scribe', image: '/exec_headshots/Kate_Briesemeister.jpg?height=100&width=100' },
  { name: 'Liam Gaiden', position: 'Treasurer', image: '/exec_headshots/Liam_Gaiden.jpg?height=100&width=100' },
  { name: 'Gianna McLeod', position: 'Treasurer', image: '/exec_headshots/Gianna_McLeod.jpg?height=100&width=100' },
  { name: 'Katie Mangus', position: 'Marshall', image: '/exec_headshots/Katie_Mangus.JPG?height=100&width=100' },
  { name: 'Ike Fritz', position: 'Marshall', image: '/placeholder.svg?height=100&width=150' },
  { name: 'Sydney Magee', position: 'Rush Chair', image: '/exec_headshots/SydneyMagee.jpg?height=100&width=100' },
]

const regent = executives[0]
  const otherExecutives = executives.slice(1)

export function ExecBoard() {
    const executivesRef = useRef<HTMLElement>(null)
    return (
      <section ref={executivesRef} className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-center text-red-800">Our Executive Board</h2>
      <div className="mb-8">
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-full max-w-[250px]">
            <Image
              src={regent.image || "/placeholder.svg"}
              alt={regent.name}
              width={100}
              height={100}
              className="rounded-full mb-4 border-2 border-red-300"
            />
            <h3 className="font-semibold text-lg text-red-700">{regent.name}</h3>
            <p className="text-sm text-red-600">{regent.position}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {otherExecutives.map((exec, index) => (
          <div key={index} className="flex justify-center">
            <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-full max-w-[250px]">
              <Image
                src={exec.image || "/placeholder.svg"}
                alt={exec.name}
                width={100}
                height={100}
                className="rounded-full mb-4 border-2 border-red-300"
              />
              <h3 className="font-semibold text-lg text-red-700">{exec.name}</h3>
              <p className="text-sm text-red-600">{exec.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    )
}