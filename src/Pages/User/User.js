import React, { useEffect, useState } from "react";
import "./User.css";

import Login from "../../components/User/Login";
import Register from "../../components/User/Register";

export default function SpecialOffers() {
  const [Email, setEmail] = useState([]);

  useEffect(() => {
    document.title = `Dimaniyat Tours | ` + Email;

    var raw = "";

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/admin/api/cockpit/listUsers?token=22f8709abba293936facc262597237&filter[api_key]=" +
        sessionStorage["api_key"],
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setEmail([result[0].email]))
      .catch((error) => console.log("error", error));
  });

  return (
    <>
      <div className="User">
        {/* Details */}
        {sessionStorage["api_key"] ? (
          <div
            style={{
              width: "100%",
            }}
          >
            <h1>Dashboard</h1>
            <div className="Dashboard">
              <div className="DHolder">
                <div
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  Welcome, {Email}
                </div>
                <h2>Invoice</h2>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>User Login/Register</h1>

            <div className="Dashboard">
              <div className="DHolder">
                <h2>Login</h2>
                <Login />
              </div>
              <div className="DHolder">
                <h2>Register</h2>
                <Register />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
