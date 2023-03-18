import React, { useEffect } from "react";
import "./Home.css";
import Home_Slider from "../../components/Home_Slider/Home_Slider";

export default function Home() {
  useEffect(() => {
    document.title = `Dimaniyat Tours`;
  });

  return (
    <>
      <div className="Home">
        <Home_Slider />
      </div>
    </>
  );
}
