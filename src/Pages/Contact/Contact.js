import React, { useEffect } from "react";
import "./Contact.css";
// import Slider from "../components/Slider/Slider";

export default function Contact() {
  useEffect(() => {
    document.title = `Contact`;
  });

  return (
    <>
      <div className="Contact">
        <h1>Contact</h1>
      </div>
    </>
  );
}
