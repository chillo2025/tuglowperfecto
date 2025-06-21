import React from 'react'

export default function Header() {
  return (
    <header className="bg-white shadow p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">tuglowperfectoskincare</h2>
        <nav>
          <a href="#productos" className="text-gray-600 hover:text-gray-900 px-3">Productos</a>
          <a href="#contacto" className="text-gray-600 hover:text-gray-900 px-3">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
