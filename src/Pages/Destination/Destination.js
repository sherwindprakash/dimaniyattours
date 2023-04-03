import React, { useEffect } from "react";
import "./Destination.css";
import VIDEO from "../../assets/Video/Destination.mp4";
import VIDEO2 from "../../assets/Video/Destination_2.mp4";

import PlaceHolderImage1 from "../../assets/images/Destination1.webp";
import PlaceHolderImage2 from "../../assets/images/Destination2.webp";
import PlaceHolderImage3 from "../../assets/images/Destination3.webp";
import PlaceHolderImage4 from "../../assets/images/Destination4.webp";

export default function Destination() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | Destination`;
  });

  return (
    <>
      <div className="Destination">
        <h1>Destination</h1>
        <h2>Dimaniyat Islands (A'seeb)</h2>
        <a
          style={{
            marginBottom: "10px",
            display: "inline-block",
          }}
          href="https://en.wikipedia.org/wiki/Ad_Dimaniyat_Islands"
          target="_blank"
        >
          Ad Dimaniyat Islands{" "}
          <small>From Wikipedia, the free encyclopedia</small>
        </a>
        <div className="BodyDestination">
          The Damaniyat Nature Reserve is a natural habitat for unique wildlife
          populations surrounded by crystal blue waters and pristine sandy
          beaches. These islands are visited by several endangered species,
          including frequent visiting birds, in addition to the diverse coral
          reefs. The Dimaniyat Islands Reserve is one of the first nature
          reserves in the Sultanate of Oman proclaimed by the Royal Degree No.
          (23/96). It is located north of Muscat and east of WillayatBarka. Lies
          within its borders are the waters surrounding the nine islands.
        </div>
        {/* Video */}

        <video
          className="lazy"
          title="Dimaniyat Islands | Dimaniyat Tours"
          autoPlay
          muted
          loop
          playsInline
          width="100%"
          height="auto"
          src={VIDEO}
          type="video/mp4"
        ></video>

        {/*  */}
        <div className="ImagHolder">
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage1}
          />

          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage2}
          />
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage3}
          />
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage4}
          />
        </div>
      </div>
    </>
  );
}
