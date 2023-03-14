import React, { useEffect } from "react";
import background_Story_1 from "../assets/Contact/contact-new-01.webp";
import background_Story_2 from "../assets/Contact/contact-new-02.webp";

export default function Story() {
  useEffect(() => {
    document.title = `Contact | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Page OurWork">
        <h1>Contact</h1>
        <div className="inside-body-left">
          <div className="left"></div>
          <div className="right">
            If you think we are the kind of agency that you are looking for, we
            would love to meet you and discuss how we can take things forward.
          </div>
        </div>
        <div
          className="inside-body-left"
          style={{
            marginTop: "30px",
            marginBottom: "0px",
          }}
        >
          <div className="left">
            <img
              className="Cont_image"
              alt="Get in touch | Integrated Marketing Agency Oman | web design agency Oman"
              title="Get in touch | Integrated Marketing Agency Oman | web design agency Oman"
              src={background_Story_1}
              width="100%"
              height="auto"
            />
          </div>
          <div className="right">
            <img
              className="Cont_image"
              alt="Get in touch | Integrated Marketing Agency Oman | web design agency Oman"
              title="Get in touch | Integrated Marketing Agency Oman | web design agency Oman"
              src={background_Story_2}
              width="100%"
              height="auto"
            />
          </div>
        </div>
        <div className="inside-body-left">
          <div
            className="left"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div className="ContDataHlder">
              <div>
                <h3>
                  <b>ADDRESS</b>
                </h3>
                <p>P.O. Box 880, Muscat 130, Sultanate of Oman.</p>
              </div>
              <div>
                <h3>
                  <b>CONTACT</b>
                </h3>

                <a href="tel:+968 24 607 770" target="_blank">
                  T: 00968 24 607 770
                </a>

                <a href="fax:+968 24 691 259" target="_blank">
                  F: 00968 24 691 259
                </a>

                <a href="mailto:hello@zeenah.com " target="_blank">
                  E: hello@zeenah.com
                </a>
              </div>
            </div>
          </div>
          <div className="right">
            <iframe
              style={{
                border: "none",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7765258148843!2d58.46885271497882!3d23.612346284657605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f8b634508fdd%3A0x47f35d22c2fa0557!2sZEENAH!5e0!3m2!1sen!2som!4v1678188172581!5m2!1sen!2som"
              width="100%"
              height="600"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
