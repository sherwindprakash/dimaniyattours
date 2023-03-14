import React, { useEffect } from "react";

import background_DIGITAL from "../assets/Services/DIGITAL.jpg";
import background_ADVERTISING from "../assets/Services/ADVERTISING.jpg";
import background_MEDIA from "../assets/Services/MEDIA.jpg";
import background_CONTENT from "../assets/Services/CONTENT.jpg";
import background_BRANDING from "../assets/Services/BRANDING.jpg";
import background_EVENTS from "../assets/Services/EVENTS.jpg";

export default function Services() {
  useEffect(() => {
    document.title = `Services | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Page Services">
        <h1>SERVICES</h1>
        <div className="inside-body">
          <div className="inside-body-Half-Block">
            The essence of integrating your communications is to approach any
            problem with an open mind and no preconceptions. To do this, we have
            a tool bag of specific skill sets to hand to find the right
            combination of solutions.
          </div>
        </div>
        <div className="page-content-holder">
          {/*  */}
          <div className="divResponce">
            <div
              className="Services-holder"
              role="img"
              alt="web design company - event management - digital marketing specialist | Zeenah"
              style={{
                backgroundImage: `url(${background_DIGITAL})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                // background: "#dc3636",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <h6 className="page-title">DIGITAL</h6>
            </div>
            <p>
              The digital revolution continues to gather pace, offering new
              channels for growth and access to new audiences. From strategy to
              website design, SEO to social media, we can help your business
              benefit from doing more online. See it in action
            </p>
          </div>
          {/*  */}
          <div className="divResponce">
            <div
              className="Services-holder"
              role="img"
              alt="web design company - event management - digital marketing specialist | Zeenah"
              style={{
                backgroundImage: `url(${background_ADVERTISING})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                // background: "#dc3636",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <h6 className="page-title">ADVERTISING</h6>
            </div>
            <p>
              Some believe advertising is dead. We believe it still has a
              critical part to play in any omni-channel strategy. Our
              experienced creative team has worked with some of the regions
              leading brands and has received some of the industries highest
              accolades for their work. See it in action
            </p>
          </div>
          {/*  */}
          <div className="divResponce">
            <div
              className="Services-holder"
              role="img"
              alt="web design company - event management - digital marketing specialist | Zeenah"
              style={{
                backgroundImage: `url(${background_MEDIA})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                // background: "#dc3636",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <h6 className="page-title">MEDIA</h6>
            </div>
            <p>
              Our media department has many years experience navigating the
              media landscape, both online and offline. They can help you get
              the maximum value from your media budget. See it in action
            </p>
          </div>
          {/*  */}
          <div className="divResponce">
            <div
              className="Services-holder"
              role="img"
              alt="web design company - event management - digital marketing specialist | Zeenah"
              style={{
                backgroundImage: `url(${background_CONTENT})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                // background: "#dc3636",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <h6 className="page-title">CONTENT</h6>
            </div>
            <p>
              Some believe advertising is dead. We believe it still has a
              critical part to play in any omni-channel strategy. Our
              experienced creative team has worked with some of the regions
              leading brands and has received some of the industries highest
              accolades for their work. See it in action
            </p>
          </div>
          {/*  */}
          <div className="divResponce">
            <div
              className="Services-holder"
              role="img"
              alt="web design company - event management - digital marketing specialist | Zeenah"
              style={{
                backgroundImage: `url(${background_BRANDING})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                // background: "#dc3636",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <h6 className="page-title">BRANDING</h6>
            </div>
            <p>
              At the heart of every successful business is a robust brand. We
              create robust brand strategies and designs for our clients that
              capture the essence of who they are and then apply them across all
              consumer touch points. See it in action
            </p>
          </div>
          {/*  */}
          <div className="divResponce">
            <div
              className="Services-holder"
              role="img"
              alt="web design company - event management - digital marketing specialist | Zeenah"
              style={{
                backgroundImage: `url(${background_EVENTS})`,
                backgroundSize: "cover",
                backgroundPosition: "center left",
                // background: "#dc3636",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "350px",
              }}
            >
              <h6 className="page-title">EVENTS</h6>
            </div>
            <p>
              Event planning is both a science and an art that requires
              precision planning and implementation. We offer the full range of
              events solutions – from in-house training and seminars to full
              scale brand launches and international conferences. See it in
              action
            </p>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}
