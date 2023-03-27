/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import "./Contact.css";
import Form from "../../components/Form/From"

export default function Contact() {
  useEffect(() => {
    document.title = `Dimaniyat Tours | Contact`;
  });

  return (
    <>
      <div className="Contact">
        <h1>Contact</h1>
        <div className="ContHolder">
          <div className="FormHolder">
            <iframe
              className="Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29242.619264666842!2d58.26595400000001!3d23.628443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8dfc325bb39fcd%3A0x9bfc823b9e94d25e!2sAl%20Mouj%20Muscat!5e0!3m2!1sen!2som!4v1679293561271!5m2!1sen!2som"
              width="50%"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            className="FormHolder"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <h2>Dear valued customer,</h2>
            <h3
              style={{
                fontWeight: "100",
                marginTop: "20px",
                marginBottom: "20px",
                display: "block",
              }}
            >
              Thank you for your interest in contacting us. Please fill out the
              form below to send us your message, question, or feedback, and we
              will get back to you as soon as possible.
            </h3>
            <Form name={"contacts"} />
          </div>
        </div>
      </div>
    </>
  );
}
