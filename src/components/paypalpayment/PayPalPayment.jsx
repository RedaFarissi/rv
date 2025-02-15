import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PayPalPayment.css";

const PayPalPayment = () => {
  return (
<section className="PayPalPayment-section">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
        <PayPalScriptProvider options={{ "client-id": "AWNVpwOgDcdK7J8lXb8SqSM8-sud2BKP_Vgblzf47NIlZnLLVYRjEoTDhgw1L8RMqOQl7gXlj-xR8B0Z" }}>
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "10.00", // Change this to your price
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
                // Send transaction details to Django backend
                fetch("/api/paypal-success/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ orderID: data.orderID }),
                });
              });
            }}
          />
        </PayPalScriptProvider>
    </div>
  </div>
</section>
  );
};

export default PayPalPayment;
