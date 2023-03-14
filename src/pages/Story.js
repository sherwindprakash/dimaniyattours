import React, { useEffect } from "react";

import background_Story from "../assets/Story/zeenahTeam_2019.webp";
import background_MENA_DIGITAL_AWARDS from "../assets/Story/MENA-DIGITAL-AWARDS.webp";
import background_TRANSFORM_MENA from "../assets/Story/TRANSFORM-MENA_.webp";
import background_DUBAI_LYNX from "../assets/Story/DUBAI-LYNX_.webp";
import background_OMAN_TECH_AWARDS from "../assets/Story/OMAN-TECH-AWARDS.webp";

export default function Story() {
  useEffect(() => {
    document.title = `Story | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Page Story">
        <h1>Story</h1>
        <div className="Img-holder">
          <img
            alt="Story | Integrated Marketing Agency Oman | web design agency Oman"
            title="Story | Integrated Marketing Agency Oman | web design agency Oman"
            className="img-full-width"
            src={background_Story}
            width="100%"
            height="auto"
          />
        </div>
        <div
          className="page-content-holder"
          style={{
            marginTop: "40px",
          }}
        >
          <h3>
            Zeenah first opened its doors back in 2003 with a small team and big
            ambitions.
          </h3>
          <p
            style={{
              textAlign: "center",
            }}
          >
            Since then the agency has grown from strength to strength, and
            expanded to offer expertise across the full range of communication
            disciplines and channels.<br></br>
            Along the way we have been privileged to work with some of Oman’s
            biggest private companies and most prestigious public organisations.
            While over the years we have formed working affiliations and
            partnerships with local and international specialists to enrich our
            clients. Our biggest, most recent development has been to adapt our
            structure to a completely integrated approach, with a greater focus
            on digital engagement.<br></br>
            The world is constantly changing, and we look forward to the
            challenges it brings us.
          </p>
          {/*  */}
          <div
            className="page-content-holder"
            style={{
              marginTop: "40px",
            }}
          >
            {/*  */}
            <div className="divResponce-Story">
              <img
                src={background_MENA_DIGITAL_AWARDS}
                alt="MENA DIGITAL AWARDS"
                title="MENA DIGITAL AWARDS"
                width="100%"
                height="auto"
              />

              <h5 className="story-awards">MENA DIGITAL AWARDS</h5>
              <ul>
                <li>2017 - Social Media - Experience Oman (MOT) - Gold</li>
              </ul>
            </div>
            {/*  */}
            <div className="divResponce-Story">
              <img
                src={background_TRANSFORM_MENA}
                alt="TRANSFORM MENA"
                title="TRANSFORM MENA"
                width="100%"
                height="auto"
              />

              <h5 className="story-awards">TRANSFORM MENA</h5>
              <ul>
                <li>
                  2017 - Best Use of Typography - National Museum - Silver
                </li>
                <li>2017 - Best Brand Development - NCSI - Bronze</li>
                <li>2017 - Best Visual Identity - NCSI - Gold</li>
                <li>2017 - Best Visual Identity - National Museum - Bronze</li>
                <li>2016 - Best Brand Architecture - Bank Muscat - Bronze</li>
                <li>2016 - Best Brand consolidation - Bank Muscat - Gold</li>
              </ul>
            </div>
            {/*  */}
            <div className="divResponce-Story">
              <img
                src={background_DUBAI_LYNX}
                alt="DUBAI LYNX"
                title="DUBAI LYNX"
                width="100%"
                height="auto"
              />

              <h5 className="story-awards">DUBAI LYNX</h5>
              <ul>
                <li>2012 - Radio - Best Use of Medium - Audi - Bronze</li>
                <li>2008 - Interactive - 53° East sand Adventures - Bronze</li>
              </ul>
            </div>
            {/*  */}
            <div className="divResponce-Story">
              <img
                src={background_OMAN_TECH_AWARDS}
                alt="OMAN TECH AWARDS"
                title="OMAN TECH AWARDS"
                width="100%"
                height="auto"
              />

              <h5 className="story-awards">OMAN TECH AWARDS</h5>
              <ul>
                <li>2016 - Odeia - Gold</li>
                <li>2016 - Odeia (.om extension) - Gold</li>
                <li>2016 - Zeenah Group - Gold</li>
                <li>2016 - Zeenah Events - Gold</li>
                <li>2016 - Zeenah Blog (ZLOG) - Gold</li>
                <li>2016 - Traveller Oasis - Silver</li>
                <li>2016 - TBWA\Zeenah - Silver</li>
                <li>2016 - Traveller Oasis - Bronze</li>
                <li>2016 - Gallery Sarah - Bronze</li>
              </ul>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
