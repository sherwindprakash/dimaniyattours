import React, { useEffect } from "react";
import "./Destination.css";

export default function Destination() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | Destination`;
  });

  return (
    <>
      <div className="Destination">
        <h1>Destination</h1>
      </div>
    </>
  );
}
