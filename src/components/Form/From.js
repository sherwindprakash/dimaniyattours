/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./Form.css";


const Form = () => {
  const [FullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // DATA
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: {
        user: "prakash@sherwin.com",
        password: "prakash",
        email: "prakash@sherwin.com",
        group: "author",
        Full_Name: FullName,
        Nationality: "Male",
        DayPhone: "96237694",
        active: true,
        api_key: true,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/admin/api/cockpit/saveUser?token=22f8709abba293936facc262597237",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    //
  };

  return (
    <>
      <form id="SignUPFrom" className="SignUPForm" onSubmit={handleSubmit}>

      <div className="inputGroup">
                <label htmlFor="name">Full Name:</label>
                <input
                  className="form-input"
                  type="text"
                  id="FullName"
                  name="FullName"
                  value={FullName}
                  onChange={(event) => setFullName(event.target.value)}
                  required
                  placeholder="Full Name"
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
    </>
  );
};

export default Form;

