import React from "react";
import { Link } from "react-router-dom";
import "../Receipt/index.css";

export default function Receipt() {
  return (
    <>
      <h1>404</h1>
      <div className="Message">
        <Link className="btn" title="Back" to="/en/">
          Go to Home
        </Link>
      </div>
    </>
  );
}
