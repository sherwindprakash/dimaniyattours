import React, { useEffect } from "react";

// import Slider from "../components/Slider/Slider";

export default function Home() {
  useEffect(() => {
    document.title = `Title Here`;
  });

  return (
    <>
      <div className="Home">
        <h1>TEST</h1>
      </div>
    </>
  );
}
