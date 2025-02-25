import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./PayPalPayment.sass";
import { Footer } from "../path";

const PayPalPayment = (props) => {
  return (
<>
    <section className="PayPalPayment-section" onClick={props.boxProfileStyle}>
      <div className="container  d-flex align-items-center justify-content-center">
        <div className="row box-payment">
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
                    fetch("/payment/api/paypal-success/", {
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
    <br /><br /><br /><br /><br />
    <Footer 
          widthFooter="100%"
          block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
          block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
          blockChildStyle={{width: "90%" , margin:"auto"}}
    />
</>
  );
};

export default PayPalPayment;
