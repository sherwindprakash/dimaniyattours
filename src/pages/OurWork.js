import React, { useEffect } from "react";
import Work from "../components/Work/Work";

export default function Story() {
  useEffect(() => {
    document.title = `Our Work | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Page OurWork">
        <h1>Our Work</h1>
        <div className="inside-body">
          <div className="inside-body-Half-Block">
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
          <Work />
        </div>
      </div>
    </>
  );
}
