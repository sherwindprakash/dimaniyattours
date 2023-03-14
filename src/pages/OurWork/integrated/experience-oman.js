import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import background_Story from "./experience-oman.webp";
import "../base.css";

export default function Story() {
  useEffect(() => {
    document.title = `Our Work | Traveller Oasis`;
  });

  return (
    <>
      <div className="Page OurWorkSingle">
        <div
          className="Img-holder-inside"
          style={{
            backgroundImage: `url(${background_Story})`,
          }}
        >
          <Link className="backToWork" to="/en/our-work/">
            VIEW ALL WORK
          </Link>

          <h1>Traveller Oasis</h1>
          <h2>Digital, Events</h2>
        </div>
        <div className="inside-body">
          <div className="single-content">
            This project was commissioned by the Ministry of Tourism Oman and
            the online scope included website and mobile app design and
            development, SEO, content development, html emailer design,
            development and copywriting as well as digital and social media
            advertising. An integrated project, the aim was to provide a unified
            source of visitor and safety content for visitors travelling to
            Salalah during the lush summer monsoons.
          </div>
        </div>
        <div
          className="page-content-holder"
          style={{
            marginTop: "40px",
          }}
        >
          DATA
        </div>
      </div>
    </>
  );
}
