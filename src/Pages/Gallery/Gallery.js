import React, { useEffect } from "react";
import "./Gallery.css";
// import Slider from "../components/Slider/Slider";

export default function Gallery() {
  useEffect(() => {
    document.title = `Gallery`;
  });

  return (
    <>
      <div className="Gallery">
        <h1>Gallery</h1>
      </div>
    </>
  );
}
