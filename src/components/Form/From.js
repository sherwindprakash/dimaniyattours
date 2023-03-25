/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Excerpt, setExcerpt] = useState("");
  const [Phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // DATA
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: {
        FullName: FullName,
        Email: Email,
        Excerpt: Excerpt,
        Phone: Phone,
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/admin/api/collections/save/contacts?token=22f8709abba293936facc262597237",
      requestOptions
    )

    

      .then((response) => response.json())
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
    //
  };

  return (
    <>
      <form id="SignUPFrom" className="SignUPForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="FullName">Full Name:</label>
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
          <label htmlFor="Phone">Phone Number:</label>

          <input
            className="form-input"
            type="number"
            id="Phone"
            name="Phone"
            value={Phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            placeholder="Insert Your Phone Number"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="Email">Email Address:</label>

          <input
            className="form-input"
            type="email"
            id="Email"
            name="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
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
          <textarea
            name="message"
            id="message"
            value={Excerpt}
            onChange={(event) => setExcerpt(event.target.value)}
            required
          ></textarea>
        </div>

        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
