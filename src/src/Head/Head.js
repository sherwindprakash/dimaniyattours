/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import "./Head.css";
import siteLogo from "../assets/main-logo.webp";

import Facebook from "../assets/SM/facebook-round-svgrepo-com.svg";
import Instagram from "../assets/SM/instagram-round-svgrepo-com.svg";
import Tripadvisor from "../assets/SM/tripadvisor-logotype-svgrepo-com.svg";

import FacebookD from "../assets/SM/Dark_Mode/facebook-round-svgrepo-com.svg";
import InstagramD from "../assets/SM/Dark_Mode/instagram-round-svgrepo-com.svg";
import TripadvisorD from "../assets/SM/Dark_Mode/tripadvisor-logotype-svgrepo-com.svg";

import User from "../assets/user.svg";
import UserDark from "../assets/user-dark.svg";

export default function Header() {
  //
  const [FullName, setFullName] = useState();

  var raw = "";

  var requestOptions = {
    method: "POST",
    body: raw,
    redirect: "follow",
  };

  fetch(
    "http://localhost/admin/api/cockpit/listUsers?token=22f8709abba293936facc262597237&filter[api_key]=" +
      sessionStorage["api_key"],
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => setFullName(result[0].Full_Name))
    .catch((error) => console.log("error", error));
  //
  const { pathname } = useLocation();
  return (
    <header>
      <div className="HeadLeft">
        <ul className="noStyle">
          <CustomLink title="Home" to="/en/">
            <img
              loading="lazy"
              width="250"
              height="98"
              alt="Dimaniyat Tours"
              title="Dimaniyat Tours"
              aria-label="Dimaniyat Tours"
              src={siteLogo}
              className="siteLogo"
            />
          </CustomLink>
        </ul>
      </div>
      <div className="HeadRight">
        <div className="off-canvas">
          <a
            className="off-canvas-toggle btn btn-primary btn-action"
            href="#sidebar-id"
          >
            &#9776;
          </a>

          <div id="sidebar-id" className="off-canvas-sidebar">
            <ul className="HomeMenu-mobile">
              <CustomLink title="Home" to="/en/">
                Home
              </CustomLink>
              <CustomLink title="Packages" to="/en/packages/">
                Packages
              </CustomLink>
              <CustomLink title="Destination" to="/en/destination/">
                Destination
              </CustomLink>
              <CustomLink title="About us" to="/en/about-us/">
                About us
              </CustomLink>
              <CustomLink title="Contact" to="/en/contact/">
                Contact
              </CustomLink>
            </ul>

            <div className="SM-SlidMenu">
              <picture>
                <source
                  srcSet={FacebookD}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  loading="lazy"
                  width="40"
                  height="40"
                  alt="Dimaniyat Tours | Facebook"
                  title="Dimaniyat Tours | Facebook"
                  src={Facebook}
                  className="icon"
                />
              </picture>

              <picture>
                <source
                  srcSet={InstagramD}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  loading="lazy"
                  width="40"
                  height="40"
                  alt="Dimaniyat Tours | Instagram"
                  title="Dimaniyat Tours | Instagram"
                  src={Instagram}
                  className="icon"
                />
              </picture>

              <picture>
                <source
                  srcSet={TripadvisorD}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  loading="lazy"
                  width="40"
                  height="40"
                  alt="Dimaniyat Tours | Tripadvisor"
                  title="Dimaniyat Tours | Tripadvisor"
                  src={Tripadvisor}
                  className="icon"
                />
              </picture>
            </div>
          </div>

          <a className="off-canvas-overlay" href="#close"></a>
        </div>

        <ul className="HomeMenu">
          <CustomLink title="Home" to="/en/">
            Home
          </CustomLink>
          <CustomLink title="Packages" to="/en/packages/">
            Packages
          </CustomLink>
          <CustomLink title="Destination" to="/en/destination/">
            Destination
          </CustomLink>
          <CustomLink title="About us" to="/en/about-us/">
            About us
          </CustomLink>
          <CustomLink title="Contact" to="/en/contact/">
            Contact
          </CustomLink>
          <CustomLink
            title={FullName}
            to="/en/user/"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Details */}
            {sessionStorage["api_key"] ? (
              <div
                style={{
                  width: "100%",
                }}
              >
                <picture>
                  <source
                    srcSet={UserDark}
                    media="(prefers-color-scheme: dark)"
                  />
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      margin: "0",
                      padding: "0",
                      top: "3px",
                      marginRight: "5px",
                    }}
                    loading="lazy"
                    width="40"
                    height="40"
                    alt="Dimaniyat Tours | User Profile"
                    title="Dimaniyat Tours | User Profile"
                    src={User}
                    className="icon-USER"
                  />
                </picture>
                {FullName}
              </div>
            ) : (
              <picture>
                <source
                  srcSet={UserDark}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  loading="lazy"
                  width="40"
                  height="40"
                  alt="Dimaniyat Tours | User Profile"
                  title="Dimaniyat Tours | User Profile"
                  src={User}
                  className="icon-USER"
                />
              </picture>
            )}
          </CustomLink>
        </ul>
      </div>
    </header>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
