import React, { useEffect } from "react";
import "./Destination.css";
// import Slider from "../components/Slider/Slider";

export default function Destination() {
  useEffect(() => {
    document.title = `Destination`;
  });

  return (
    <>
      <div className="Destination">
        <h1>Destination</h1>
      </div>
    </>
  );
}
