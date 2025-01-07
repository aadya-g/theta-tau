'use client'

import React, { useRef, useCallback } from 'react';

export default function Header() {
  const execBoardRef = useRef<HTMLElement>(null);
  const historyRef = useRef<HTMLElement>(null);
  const pillarsRef = useRef<HTMLElement>(null);
  const xiChapterRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-red-700">About Us</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => scrollToSection(execBoardRef)}
                className="text-red-600 hover:text-red-800 transition duration-300"
              >
                Executive Board
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(historyRef)}
                className="text-red-600 hover:text-red-800 transition duration-300"
              >
                Our History
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(pillarsRef)}
                className="text-red-600 hover:text-red-800 transition duration-300"
              >
                Our Pillars
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(xiChapterRef)}
                className="text-red-600 hover:text-red-800 transition duration-300"
              >
                Xi Chapter
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}