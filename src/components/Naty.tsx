'use client'

import { useState } from 'react';

export default function Naty() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="ml-2 text-white font-bold text-2xl">Rio Aracatiaçu</span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#navbar" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-base font-medium transition duration-300">Inicio</a>
            <a href="#hero" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-base font-medium transition duration-300">Sobre Nós</a>
            <a href="#obj" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-base font-medium transition duration-300">Objetivos</a>
            <a href="#contato" className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-base font-medium transition duration-300">Contato</a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
              aria-label="Menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-700">
          <a href="#navbar" className="text-white block px-3 py-3 rounded-md text-lg font-medium hover:bg-blue-600">Inicio</a>
          <a href="#hero" className="text-white block px-3 py-3 rounded-md text-lg font-medium hover:bg-blue-600">Sobre Nós</a>
          <a href="#obj" className="text-white block px-3 py-3 rounded-md text-lg font-medium hover:bg-blue-600">Objetivos</a>
          <a href="#contato" className="text-white block px-3 py-3 rounded-md text-lg font-medium hover:bg-blue-600">Contato</a>
        </div>
      </div>
    </nav>
  );
}
