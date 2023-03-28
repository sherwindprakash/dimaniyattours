/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./Form.css";

import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte

// Create an instance of Notyf
const notyf = new Notyf();

const Form = (props) => {
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
        Post: props.post
      },
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/admin/api/collections/save/" +
        props.name +
        "?token=22f8709abba293936facc262597237",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        //console.log(result)
        notyf.success(
          "Thank you for your interest in " +
            props.name +
            " us and we will get back to you as soon as possible."
        );

        setTimeout(function () {
          window.location.reload(false);
        }, 2000);
      })
      .catch((error) => {
        //console.log(error)
        notyf.error("Not Successful.");
      });
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
            id={`FullName_` + props.name}
            name={`FullName_` + props.name}
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
            id={`Phone_` + props.name}
            name={`Phone_` + props.name}
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
            id={`Email_` + props.name}
            name={`Email_` + props.name}
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Insert Your Email Address"
          />
        </div>

        <div className="inputGroup textarea">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id={`Message_` + props.name}
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
