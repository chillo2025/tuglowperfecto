import React from 'react'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-600 flex-grow">{product.description}</p>
      <p className="font-bold mt-4">{product.price}</p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition">
        Comprar
      </button>
    </div>
  )
}
