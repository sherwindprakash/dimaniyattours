import React, { useState } from "react";
import "./Form.css";

// Create an instance of Notyf
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte
const notyf = new Notyf();

const HomeSignUp = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [token, setToken] = useState();

  const handleSubmit = (event) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    // DATA
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      user: Email,
      password: Password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://localhost/admin/api/cockpit/authUser?token=22f8709abba293936facc262597237",
      requestOptions
    )
      //
      .then(function (response) {
        if (response.status === 401) {
          notyf.error("Unauthorized!");
        } else {
          notyf.success("Login success!");
          setTimeout(() => window.location.replace("/en/packages/"), 2000);
        }
      });
    //
    fetch(
      "http://localhost/admin/api/cockpit/authUser?token=22f8709abba293936facc262597237",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => sessionStorage.setItem("api_key", result.api_key))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <form id="SignUPFrom" className="SignUPForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="FullName">Email:</label>
          <input
            className="form-input"
            type="email"
            id="Email"
            name="Email"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
            required
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="Password">Password:</label>
          <input
            className="form-input"
            type="password"
            id="Password"
            name="Password"
            value={Password}
            onChange={(event) => setPassword(event.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default HomeSignUp;
