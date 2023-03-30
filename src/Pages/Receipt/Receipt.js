import React from "react";

export default function Receipt() {
  const queryParameters = new URLSearchParams(window.location.search);
  const PayerID = queryParameters.get("PayerID");

  const access_token = localStorage.getItem("access_token");
  const URL = localStorage.getItem("URL");

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer " + access_token
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ payer_id: PayerID });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    URL,
    requestOptions
  )
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    localStorage.removeItem("access_token");
    localStorage.removeItem("URL");

  })
  .catch((error) => {
    console.log(error)
  });

  return (
    <>
      <h1>Receipt</h1>
      {PayerID}
    </>
  );
}
