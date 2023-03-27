import React, { useEffect } from "react";
import "./SpecialOffers.css";

export default function SpecialOffers() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | SpecialOffers`;
  });

  return (
    <>
      <div className="SpecialOffers">
        <h1>Special Offers</h1>
      </div>
    </>
  );
}
