import React, { useEffect, useState } from "react";
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
              <CustomLink title="Gallery" to="/en/gallery/">
                Gallery
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
          <CustomLink title="Gallery" to="/en/gallery/">
            Gallery
          </CustomLink>
          <CustomLink title="Contact" to="/en/contact/">
            Contact
          </CustomLink>
          <CustomLink title="User" to="/en/user/">
            <picture>
              <source srcSet={UserDark} media="(prefers-color-scheme: dark)" />
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
