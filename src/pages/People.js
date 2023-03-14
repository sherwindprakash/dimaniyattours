import React, { useEffect } from "react";
import People from "../components/People/People";

export default function Story() {
  useEffect(() => {
    document.title = `People | Integrated Marketing Agency Oman | web design agency Oman`;
  });

  return (
    <>
      <div className="Page People">
        <h1>People</h1>
        <div className="inside-body">
          <div className="inside-body-Half-Block">
            We are a people business. One that always offers a unique
            perspective based on local insight and international know-how.
            Always challenging convention and norms but respecting tradition and
            culture. We are wise heads on young shoulders.
          </div>
        </div>
        <div
          className="page-content-holder"
          style={{
            marginTop: "40px",
          }}
        >
          <People />
        </div>
      </div>
    </>
  );
}
