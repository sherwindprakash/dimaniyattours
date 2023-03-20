import React, { useEffect } from "react";
import "./Destination.css";
import PlaceHolderImage from "../../assets/600x800.png";

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
        <iframe
          width="100%"
          height="720"
          src="https://www.youtube-nocookie.com/embed/1J_EmN0ZoeE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/*  */}
        <div className="ImagHolder">
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage}
          />
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage}
          />
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage}
          />
          <img
            className="PackageHolderImage"
            fetchpriority="low"
            height="800"
            width="600"
            alt="Dimaniyat Islands (A'seeb)"
            title="Dimaniyat Islands (A'seeb)"
            src={PlaceHolderImage}
          />
        </div>
      </div>
    </>
  );
}
