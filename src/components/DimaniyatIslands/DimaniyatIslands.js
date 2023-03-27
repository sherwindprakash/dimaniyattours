/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./DimaniyatIslands.css";

import MAP from "../../assets/compass-2-svgrepo-com.svg";
import MAPW from "../../assets/compass-2-svgrepo-com-White.svg";

export default function Shorts_Trips() {
  return (
    <>
      <div className="DimaniyatIslands">
        <h1 style={{
          marginTop:"80px"
        }}>Visit Dimaniyat Islands</h1>

        <div className="DI_Holder">
          <div className="LeftDIH">
            Dimaniyat Islands is the Nature Reserve for unique wildlife
            populations surrounded by crystal blue waters and pristine sandy
            beaches. These islands are visited by several endangered species,
            including frequent visiting birds, in addition to the diverse coral
            reefs. The Dimaniyat Islands Reserve is one of the first nature
            reserves in the Sultanate of Oman proclaimed by the Royal Degree No.
            (23/96). It is located north of Muscat and east of Willayat Barka.
            Lies within its borders are the waters surrounding the nine islands.
            <div className="ExtHolderData">
              <a
                className="btnDI"
                href="http://www.omantourism.gov.om"
                target="_blank"
                rel="noreferrer"
              >
                www.omantourism.gov.om
              </a>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                href="https://www.google.com/maps/place/Ad+Dimaniyat+Islands/@23.8555542,58.070546,14z/data=!3m1!4b1!4m6!3m5!1s0x3e8deb65745449c7:0x31cab4255039ac67!8m2!3d23.8555556!4d58.0880556!16s%2Fg%2F1216xc1h"
                target="_blank"
                title="Google Map" rel="noreferrer"
              >
                <picture>
                  <source srcSet={MAPW} media="(prefers-color-scheme: dark)" />
                  <img
                    className="timeImageHome"
                    fetchpriority="low"
                    height="40"
                    width="40"
                    alt="Time Icon"
                    title="Time Icon"
                    src={MAP}
                  />
                </picture>

                <figcaption>Google Map</figcaption>
              </a>
            </div>
          </div>
          <div className="RightDIH">
            {/* Video */}
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube-nocookie.com/embed/1J_EmN0ZoeE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
