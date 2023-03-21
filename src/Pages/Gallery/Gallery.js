import React, { useEffect } from "react";
import "./Gallery.css";

export default function Gallery() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | Gallery`;
  });

  return (
    <>
      <div className="Gallery">
        <h1>Gallery</h1>
        https://www.lightgalleryjs.com/docs/react/ LINK Type
      </div>
    </>
  );
}
