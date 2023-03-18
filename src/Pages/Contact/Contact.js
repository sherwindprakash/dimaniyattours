import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | Contact`;
  });

  return (
    <>
      <div className="Contact">
        <h1>Contact</h1>
      </div>
    </>
  );
}
