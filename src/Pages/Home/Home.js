import React, { useEffect } from "react";
import "./Home.css";
import HomeSlider from "../../components/Home_Slider/Home_Slider";
import HomePackage from "../../components/Package_Home/Package_Home";
import DimaniyatIslands from "../../components/DimaniyatIslands/DimaniyatIslands";
import Comments from "../../components/Comments/Comments";


export default function Home() {
  useEffect(() => {
    document.title = `Dimaniyat Tours`;
  });

  return (
    <>
      <div className="Home">
        <HomeSlider />
        <HomePackage />
        <DimaniyatIslands />
        <Comments/>
      </div>
    </>
  );
}
