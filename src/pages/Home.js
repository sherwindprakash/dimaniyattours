import React, { useEffect } from "react";

import Slider from "../components/Slider/Slider";
import Home_Accordion from "../components/Home_Accordion/Home_Accordion";

export default function Home() {
  useEffect(() => {
    document.title = `Zeenah | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Home">
        <Slider />
        <Home_Accordion />
      </div>
    </>
  );
}
