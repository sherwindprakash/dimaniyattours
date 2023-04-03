/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Payment.css";

const PayNow = (props) => {
  //
  const [hideLightbox, setHideLightbox] = useState(true);
  // CONST GEN
  function getCurrentTimestamp() {
    return Date.now();
  }
  const invoice_number = getCurrentTimestamp;
  //
  const navigate = useNavigate();
  //
  const handleSubmit = (event) => {
    setHideLightbox(false);
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
        sessionStorage.setItem("access_token", result.access_token);
        const access_token = result.access_token;
        console.log(result.access_token);

        // ADD Second DATA
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + access_token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          intent: "sale",
          payer: {
            payment_method: "paypal",
          },
          transactions: [
            {
              amount: {
                total: props.Total,
                currency: "USD",
                details: {
                  subtotal: props.Total,
                  tax: "0.00",
                  shipping: "0.00",
                  handling_fee: "1.00",
                  shipping_discount: "-1.00",
                  insurance: "0.00",
                },
              },
              description: "This is the payment transaction description.",
              custom: "DT_" + invoice_number,
              invoice_number: invoice_number,
              payment_options: {
                allowed_payment_method: "INSTANT_FUNDING_SOURCE",
              },
              soft_descriptor: invoice_number,
              item_list: {
                items: [
                  {
                    name: "Adult",
                    description: "",
                    quantity: props.AdultQ,
                    price: props.Adult,
                    tax: "0.00",
                    sku: "SKU_" + invoice_number,
                    currency: "USD",
                  },
                  {
                    name: "Kid",
                    description: "",
                    quantity: props.KidQ,
                    price: props.Kid,
                    tax: "0.00",
                    sku: "SKU_" + invoice_number,
                    currency: "USD",
                  },
                ],
                shipping_address: {
                  recipient_name: props.Full_Name,
                  line1: "NA",
                  line2: "NA",
                  city: "NA",
                  country_code: "NA",
                  postal_code: "NA",
                  phone: props.Nationality + props.DayPhone,
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
          .then((response) => {
            // OPEN PAYPAL
            console.log(response.links[1].href);
            console.log(response.links[2].href);
            sessionStorage.setItem("access_url", response.links[2].href);
            //
            window.location.replace(response.links[1].href);
            //
          })
          .catch((error) => console.log("error", error));
        //
      })
      .catch((error) => {
        console.log(error);
      });
    //
  };
  //
  const handleSubmitDIS = (event) => {
    setHideLightbox(false);
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
        sessionStorage.setItem("access_token", result.access_token);
        const access_token = result.access_token;
        console.log(result.access_token);

        // ADD Second DATA
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + access_token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          intent: "sale",
          payer: {
            payment_method: "paypal",
          },
          transactions: [
            {
              amount: {
                total: (props.Total / 100) * 20,
                currency: "USD",
                details: {
                  subtotal: (props.Total / 100) * 20,
                  tax: "0.00",
                  shipping: "0.00",
                  handling_fee: "1.00",
                  shipping_discount: "-1.00",
                  insurance: "0.00",
                },
              },
              description: props.Title,
              custom: "DT_" + invoice_number,
              invoice_number: invoice_number,
              payment_options: {
                allowed_payment_method: "INSTANT_FUNDING_SOURCE",
              },
              soft_descriptor: invoice_number,
              item_list: {
                items: [
                  {
                    name: "Adult",
                    description: "",
                    quantity: props.AdultQ,
                    price: (props.Adult / 100) * 20,
                    tax: "0.00",
                    sku: "SKU_" + invoice_number,
                    currency: "USD",
                  },
                  {
                    name: "Kid",
                    description: "",
                    quantity: props.KidQ,
                    price: (props.Kid / 100) * 20,
                    tax: "0.00",
                    sku: "SKU_" + invoice_number,
                    currency: "USD",
                  },
                ],
                shipping_address: {
                  recipient_name: props.Full_Name,
                  line1: "NA",
                  line2: "NA",
                  city: "NA",
                  country_code: "NA",
                  postal_code: "NA",
                  phone: props.Nationality + props.DayPhone,
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
          .then((response) => {
            // OPEN PAYPAL
            console.log(response.links[1].href);
            console.log(response.links[2].href);
            sessionStorage.setItem("access_url", response.links[2].href);
            //
            window.location.replace(response.links[1].href);
            //
          })
          .catch((error) => console.log("error", error));
        //
      })
      .catch((error) => {
        console.log(error);
      });
    //
  };
  //

  return (
    <>
      <h1
        style={{
          marginTop: "0px",
        }}
      >
        <img
          style={{
            width: "auto",
          }}
          src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/34_Yellow_PayPal_Pill_Button.png"
          alt="PayPal"
        />
      </h1>
      <h2 className={`SHOW ${hideLightbox ? "show-lightbox" : "HIDE"}`}>
        Loading payment... please don't refresh or close window.
      </h2>
      <div className={`lightbox ${hideLightbox ? "show-lightbox" : ""}`}>
        <div className="PayHolder">
          <form id="SignUPFrom" className="SignUPForm" onSubmit={handleSubmit}>
            <button className="Paybtn" type="submit">
              Pay Full Payment {props.Total} USD and Book Your Tour.
            </button>
          </form>
          <div
            style={{
              padding: "15px",
            }}
          >
            or
          </div>
          <form
            id="SignUPFrom"
            className="SignUPForm"
            onSubmit={handleSubmitDIS}
          >
            <button className="Paybtn" type="submit">
              Pay (20%) {(props.Total / 100) * 20}.00 USD to Book Your Tour.
            </button>
            <small>
              {" "}
              * No refund will be given for any portions of the tour unused by
              the traveler after tour departure regardless of circumstances.
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default PayNow;
