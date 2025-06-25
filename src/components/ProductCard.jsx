import React, { useEffect } from "react";

export default function ProductCard({ product }) {
  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: product.price.replace("₡", "").replace(",", ""), // si querés en USD, adaptalo
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert("¡Gracias, " + details.payer.name.given_name + "! Tu pago fue exitoso.");
          });
        },
        onError: (err) => {
          console.error("Error en PayPal:", err);
          alert("Hubo un problema con el pago.");
        }
      }).render(`#paypal-button-${product.id}`);
    }
  }, [product]);

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-green-600 font-bold mb-4">{product.price}</p>

      {/* Botón de PayPal único por producto */}
      <div id={`paypal-button-${product.id}`}></div>
    </div>
  );
}
