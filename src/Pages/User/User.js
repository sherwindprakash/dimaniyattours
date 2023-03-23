import React, { useEffect } from "react";
import "./User.css";

import Login from "../../components/User/Login";

export default function SpecialOffers() {
  //

  //
  useEffect(() => {
    document.title = `Dimaniyat Tours | User`;
  });

  return (
    <>
      <div className="User">
        <h1>User Profile</h1>
        <Login />
      </div>
    </>
  );
}
