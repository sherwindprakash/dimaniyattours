import React, { useEffect } from "react";
import "./Package.css";
// import Slider from "../components/Slider/Slider";

export default function Package() {
  useEffect(() => {
    document.title = `Package`;
  });

  return (
    <>
      <div className="Package">
        <h1>Package</h1>
      </div>
    </>
  );
}
