import React, { useEffect } from "react";

export default function Story() {
  useEffect(() => {
    document.title = `Work With Us | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Page OurWork">
        <h1>Work With Us</h1>

        <div className="inside-body-left">
          <div className="left">
            The proof of the pudding is in the eating, as they say. So here are
            some small tasters of the wide range of goodies that we have
            produced over recent years. So go on. Indulge yourself. Enjoy.
          </div>
          <div className="right">
            The proof of the pudding is in the eating, as they say. So here are
            some small tasters of the wide range of goodies that we have
            produced over recent years. So go on. Indulge yourself. Enjoy.
          </div>
        </div>
        <div
          className="page-content-holder"
          style={{
            marginTop: "40px",
          }}
        >
          123
        </div>
      </div>
    </>
  );
}
