import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./index.css";
import Invoice from "./Invoice";

// Create an instance of Notyf
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte
const notyf = new Notyf();
//
export default function Receipt() {
  // SEND TO INVOICE
  const [Package, setPackage] = useState();
  const [FullName, setFullName] = useState();
  const [id, setid] = useState();
  const [Adult, setAdult] = useState();
  const [Adult_Quantity, setAdult_Quantity] = useState();
  const [Kid, setKid] = useState();
  const [Kid_Quantity, setKid_Quantity] = useState();
  const [Travel_addons, setTravel_addons] = useState();
  const [Total, setTotal] = useState();
  const [state, setstate] = useState();

  //
  const [message, setMessage] = useState("");
  const [messageSUC, setMessageSUC] = useState("");
  const [Email, setEmail] = useState();
  const [DayPhone, setDayPhone] = useState();

  //
  let data = sessionStorage.getItem("api_key");
  const navigate = useNavigate();
  //
  var rawX = "";
  var requestOptionsX = {
    method: "POST",
    body: rawX,
    redirect: "follow",
  };
  fetch(
    "http://localhost/admin/api/cockpit/listUsers?token=22f8709abba293936facc262597237&filter[api_key]=" +
      sessionStorage["api_key"],
    requestOptionsX
  )
    .then((response) => response.json())
    .then((result) => setEmail(result[0].email));
  //
  var rawX2 = "";
  var requestOptionsX2 = {
    method: "POST",
    body: rawX2,
    redirect: "follow",
  };
  fetch(
    "http://localhost/admin/api/cockpit/listUsers?token=22f8709abba293936facc262597237&filter[api_key]=" +
      sessionStorage["api_key"],
    requestOptionsX2
  )
    .then((response) => response.json())
    .then((result) => setDayPhone(result[0].DayPhone));
  //

  const queryParameters = new URLSearchParams(window.location.search);
  const PayerID = queryParameters.get("PayerID");

  const access_token = sessionStorage.getItem("access_token");
  const access_url = sessionStorage.getItem("access_url");

  //
  if (access_token) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + access_token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ payer_id: PayerID });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(access_url, requestOptions)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMessage(response.message);
        setMessageSUC(response.state);
        //DATA SEND
        setPackage(response.transactions[0].description);
        setFullName(
          response.transactions[0].item_list.shipping_address.recipient_name
        );
        // setPhone(
        //   response.transactions[0].item_list.shipping_address
        //     .shipping_phone_number
        // );
        // Email ADD
        setid(response.id);
        setAdult(response.transactions[0].item_list.items[0].price);
        setAdult_Quantity(response.transactions[0].item_list.items[0].quantity);
        setKid(response.transactions[0].item_list.items[1].price);
        setKid_Quantity(response.transactions[0].item_list.items[1].quantity);
        setTravel_addons("");
        setTotal(response.transactions[0].amount.total);
        setstate(response.state);
        //
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("access_url");
        //
      })

      .catch((error) => {
        console.log(error);
        //notyf.error("Error On Payment");
        //
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("access_url");
        //
      });
    //
  }

  return (
    <>
      {data ? (
        <div className="Message">
          <h2
            style={{
              textTransform: "uppercase",
            }}
          >
            <div>
              {message} {messageSUC} {` - ` + PayerID}
            </div>

            <Invoice
              Package={Package}
              FullName={FullName}
              Phone={DayPhone}
              id={id}
              Adult={Adult}
              Adult_Quantity={Adult_Quantity}
              Kid={Kid}
              Kid_Quantity={Kid_Quantity}
              Travel_addons={Travel_addons}
              Total={Total}
              state={state}
              Email={Email}
            />
          </h2>

          <Link className="btn" title="Back" to="/en/user/">
            Go to User/Inovice
          </Link>
        </div>
      ) : (
        navigate("/en/user/")
      )}
    </>
  );
}
