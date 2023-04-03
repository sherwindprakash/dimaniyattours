import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Receipt() {
  //
  let data = sessionStorage.getItem("api_key");
  const navigate = useNavigate();
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("access_url");
  //
  return (
    <>
      {data ? (
        <>
          <h1>Receipt Cancel</h1>
          <div className="Message">
            <Link className="btn" title="Back" to="/en/receipt/">
              Go to User
            </Link>
          </div>
        </>
      ) : (
        navigate("/en/user/")
      )}
    </>
  );
}
