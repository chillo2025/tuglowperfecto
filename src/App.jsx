import Checkout from './components/Checkout';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">tuglowperfectoskincare</h1>
        <p className="text-center mb-8 text-gray-700">Productos oficiales The Ordinary disponibles:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Botón de pago PayPal */}
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}
