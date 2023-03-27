import React, { useEffect, useState } from "react";

import "./Comments.css";

export default function Comments() {
  const [Info, setInfo] = useState();

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(
      "http://localhost/admin/api/collections/get/comments?token=22f8709abba293936facc262597237&filter[published]=true"
    )
      .then((response) => response.json())
      .then((data) => setInfo(data.entries));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
      <div className="Comments">
        <h1
          style={{
            marginTop: "80px",
          }}
        >
          Let's hear from the people
        </h1>

        {Info ? (
          <div
            style={{
              width: "100%",
            }}
          >
            
            {Info &&
              Info.map((item, index) => {
                return (
                  <>
                    <div className="commentHolder" key={index}>
                      <h4>{item.FullName}</h4>
                      <div>{item.Excerpt}</div>
                    </div>
                  </>
                );
              })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
