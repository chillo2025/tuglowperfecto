import React, { useEffect } from "react";

function Checkout({ amount = "15.00" }) {
  useEffect(() => {
    if (window.paypal) {
      // Limpia el contenedor antes de renderizar el botón (por si se remonta)
      const container = document.getElementById("paypal-button-container");
      if (container) container.innerHTML = "";

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert(`¡Gracias, ${details.payer.name.given_name}! Tu pago fue exitoso.`);
          });
        },
        onError: (err) => {
          console.error("Error en PayPal:", err);
          alert("Hubo un problema con el pago.");
        }
      }).render("#paypal-button-container");
    } else {
      console.error("PayPal SDK no cargado.");
    }
  }, [amount]);

  return <div id="paypal-button-container" className="mt-6"></div>;
}

export default Checkout;
