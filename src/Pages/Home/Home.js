import React, { useEffect } from "react";
import "./Home.css";
// import Slider from "../components/Slider/Slider";

export default function Home() {
  useEffect(() => {
    document.title = `Home`;
  });

  return (
    <>
      <div className="Home">
        <h1>Home</h1>
      </div>
    </>
  );
}
