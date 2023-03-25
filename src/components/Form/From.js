/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./Form.css";

export default function Form() {
 

  return (
    <>
     <form id="myform">
              <div className="inputGroup">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Insert Your Full Name"
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Insert Your Phone Number"
                />
              </div>

              <div className="inputGroup">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Insert Your Email Address"
                />
              </div>

              <div
                className="inputGroup"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              >
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <button className="btn" type="submit">
                Submit
              </button>
            </form>

            <div
              id="div1"
              style={{
                display: "none",
              }}
            >
              Thank you for taking the time to contact us. We value your
              feedback and will do our best to respond to your message in a
              timely and helpful manner. Sincerely, Dimaniyat Tours
            </div>
    </>
  );
}
