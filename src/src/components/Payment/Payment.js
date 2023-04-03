/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useNavigate } from "react-router-dom";

import "./Payment.css";



const PayNow = (props) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // DATA
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Basic QWNKd2ZySVJQM2tybzhBcklIMVFDaFhwNGFIU3NYalkzdHQ3Zm52Uy1oU3lSOHloVFJ2cmJsS0stdldPTjRTbTVmTGVCc0JKb010UWZuQTE6RUtESHFzdW1BcElOajUwd1VfV1BlVzN6dklJakFLelRNc1Ftc3RXY1BTbVotdVptOXFpNWtwbU16TnQwdVRBbGxmR3A4X2RrWDhEYVBWYVA="
    );
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://api-m.sandbox.paypal.com/v1/oauth2/token", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // SEND DATA
        console.log(result.access_token);

        const access_token = result.access_token;
        localStorage.setItem("access_token", access_token);


        // ADD Second DATA
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + access_token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          intent: "sale",
          payer: { payment_method: "paypal" },
          transactions: [
            {
              amount: {
                total: "100",
                currency: "USD",
                details: {
                  subtotal:"100",
                  tax: "0.00",
                  shipping: "0.00",
                  handling_fee: "0.00",
                  shipping_discount: "0.00",
                  insurance: "0.00",
                },
              },
              description: "This is the payment transaction description.",
              custom: "EBAY_EMS_90048630024435",
              invoice_number: "123",
              payment_options: {
                allowed_payment_method: "INSTANT_FUNDING_SOURCE",
              },
              soft_descriptor: "ECHI5786786",
              item_list: {
                items: [
                  {
                    name: "hat",
                    description: "Brown color hat",
                    quantity: "5",
                    price: "3",
                    tax: "0.01",
                    sku: "1",
                    currency: "USD",
                  },
                  {
                    name: "handbag",
                    description: "Black color hand bag",
                    quantity: "1",
                    price: "15",
                    tax: "0.02",
                    sku: "product34",
                    currency: "USD",
                  },
                ],
                shipping_address: {
                  recipient_name: "Hello World",
                  line1: "4thFloor",
                  line2: "unit#34",
                  city: "SAn Jose",
                  country_code: "US",
                  postal_code: "95131",
                  phone: "011862212345678",
                  state: "CA",
                },
              },
            },
          ],
          note_to_payer: "Contact us for any questions on your order.",
          redirect_urls: {
            return_url: "http://localhost:3000/en/receipt",
            cancel_url: "http://localhost:3000/en/receipt/cancel",
          },
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://api-m.sandbox.paypal.com/v1/payments/payment",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {

            localStorage.setItem("URL", result.links[2].href);
            console.log(result.links[1].href);
            window.open(result.links[1].href, "_self");
            //navigate(result.links[1].href);
          })
          .catch((error) => {
            console.log(error);
          });

        //
      })
      .catch((error) => {
        console.log(error);
      });
    //
    

  };

  return (
    <>
      <h1
        style={{
          marginTop: "0px",
        }}
      >
        PAYPAL HERE
      </h1>
      {props.Total} <br></br>
      {props.Adult} <br></br>
      {props.AdultQ} <br></br>
      {props.Kid} <br></br>
      {props.KidQ} <br></br>
      {props.Addons} <br></br>
      {props.Date}
      <form id="SignUPFrom" className="SignUPForm" onSubmit={handleSubmit}>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      

    </>
  );
};

export default PayNow;
