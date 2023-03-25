import React, { useEffect } from "react";
import "./Aboutus.css";

export default function Gallery() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | About us`;
  });

  return (
    <>
      <div className="Aboutus">
        <h1>About us</h1>
        https://www.lightgalleryjs.com/docs/react/ LINK Type
      </div>
    </>
  );
}
