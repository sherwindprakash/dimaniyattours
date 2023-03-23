import React, { useState } from "react";

const HomeSignUp = () => {
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
      "http://localhost/dimaniyattours_api/admin/admin/api/cockpit/saveUser?token=22f8709abba293936facc262597237",
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
        <input
          className="form-input"
          type="text"
          id="Emergency_Contact_Name"
          name="Emergency_Contact_Name"
          value={FullName}
          onChange={(event) => setFullName(event.target.value)}
          //   required
          placeholder=""
        />
        <button className="BUTSignUP" type="submit">
          ADD TO CART
        </button>
      </form>
    </>
  );
};

export default HomeSignUp;
