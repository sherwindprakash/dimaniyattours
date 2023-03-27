/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./Payment.css";

const PayNow = (props) => {
  return (
    <>
      <h1>PAYPAL HERE</h1>
      {props.Total} <br></br>
      {props.Adult} <br></br>
      {props.AdultQ} <br></br>

      {props.Kid} <br></br>
      {props.KidQ} <br></br>

      {props.Addons}
    </>
  );
};

export default PayNow;
