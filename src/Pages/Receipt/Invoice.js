import React, { useState } from "react";

const Invoice = (props) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    data: {
      id: props.id,
      package: props.Package,
      FullName: props.FullName,
      Phone: props.Phone,
      Email: props.Email,
      Adult: props.Adult,
      Adult_Quantity: props.Adult_Quantity,
      Kid: props.Kid,
      Kid_Quantity: props.Kid_Quantity,
      Travel_addons: props.Travel_addons,
      Total: props.Total,
      state: props.state,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://localhost/admin/api/collections/save/invoice?token=22f8709abba293936facc262597237",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return <></>;
};

export default Invoice;
