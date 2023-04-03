import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Aboutus.css";
import IMG1 from "./images/Aboutus1.webp";
import IMG2 from "./images/Aboutus2.webp";
import IMG3 from "./images/Aboutus3.webp";

export default function Gallery() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | About us`;
  });

  return (
    <>
      <div className="Aboutus">
        <h1>About us</h1>
        <div className="AboutHolder">
          <div className="ContntHolderAU">
            About the Company Luluat Al-Dimaniyat llc. was founded in 2014. The
            company's main office is situated in Muscat and it has an office
            brunch in the Special Economic Zone At Duqm (SEZAD). We offer a
            diverse portfolio of products and top-quality services focused in
            the marine industry. We are one of the SME’s companies. We are proud
            to be unique in every service we provide to our prestigious
            customers and at the same time we are glad that we have the ability
            to respond quickly to ever-changing market. We offer tailor-made
            packages to meet our client’s specifc needs.
          </div>

          <div className="ImageHolder">
            <img
              fetchpriority="low"
              height="300"
              width="300"
              alt="About us"
              title="About us"
              src={IMG1}
              className="myImg"
            />
            <img
              fetchpriority="low"
              height="300"
              width="300"
              alt="About us"
              title="About us"
              src={IMG2}
              className="myImg"
            />
            <img
              fetchpriority="low"
              height="300"
              width="300"
              alt="About us"
              title="About us"
              src={IMG3}
              className="myImg"
            />
          </div>

          <div className="Holder">
            <h2>Services Offered</h2>
            <div>
              The company would specialize in conducting different types of
              activities, which include
            </div>
            <div className="RawDiv">
              <div className="SingleHolder">
                <h3>Marine Tourism:</h3>
                <ul>
                  <li>
                    Island watching & snorkeling trips (full & half day trips)
                  </li>
                  <li>Sunrise & Sunset trips</li>
                  <li>Full moon trips</li>
                  <li>Camping in the islands (seasonal)</li>
                  <li>Whale shark trips (seasonal)</li>
                  <li>Private boat trips</li>
                  <li>
                    Customized tour packages for special events such as birthday
                    parties & wedding anniversary .... etc.
                  </li>
                </ul>
              </div>
              <div className="SingleHolder">
                <h3>Marine Services:</h3>
                <ul>
                  <li>Ship Chartering & Chandelling</li>
                  <li>Mooring Ropes</li>
                  <li>Helping in Oil Boom & Cleaning Oil Spill</li>
                  <li>Providing Divers </li>
                  <li>Renting Service Boats</li>
                  <li>Crew Manning & Managment</li>
                </ul>
                <Link
                  className="MServices"
                  title="Marine Services"
                  to="/en/marine-service/"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
