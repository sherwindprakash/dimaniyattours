import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/zeenah_tm.svg";
import LogoW from "../assets/zeenah_tm_white.svg";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="nav">
      <div>
        <div className="off-canvas">
          {pathname === "/en/our-work/integrated/experience-oman" ||
          pathname === "/" ? (
            <a
              className="off-canvas-toggle btn btn-primary btn-action"
              href="#open-menu"
              title="Zeenah Menu"
              style={{
                color: "white",
              }}
            >
              &#9776;
            </a>
          ) : (
            <a
              className="off-canvas-toggle btn btn-primary btn-action"
              href="#open-menu"
              title="Zeenah Menu"
            >
              &#9776;
            </a>
          )}

          <div id="open-menu" className="off-canvas-sidebar" href="#close">
            <ul>
              <CustomLink title="Services" to="/en/services">
                Services
              </CustomLink>
              <CustomLink title="Story" to="/en/story">
                Story
              </CustomLink>
              <CustomLink title="Our Work" to="/en/our-work">
                Our Work
              </CustomLink>
              <CustomLink title="People" to="/en/people">
                People
              </CustomLink>
              <CustomLink title="Work With Us" to="/en/work-with-us">
                Work With Us
              </CustomLink>
              <CustomLink title="Contact" to="/en/get-in-touch">
                Contact
              </CustomLink>
            </ul>
            <div className="Align_Box">
              <a
                href="https://www.facebook.com/ZeenahAgency/"
                target="_blank"
                className="icon_holder"
                title="https://www.facebook.com/ZeenahAgency/"
              >
                <svg
                  version="1.1"
                  id="site-svg-icon"
                  x="0px"
                  y="0px"
                  viewBox="0 0 40 40"
                >
                  <g>
                    <path
                      className="sm-svg-cons"
                      d="M19.4,40c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S30.5,40,19.4,40z M19.4,1.3C9.1,1.3,0.8,9.7,0.8,20
		s8.4,18.7,18.7,18.7S38.1,30.3,38.1,20S29.7,1.3,19.4,1.3z"
                    ></path>
                  </g>
                  <path
                    className="sm-svg-cons"
                    d="M23.8,20.8v-3.6h-3.5c0-0.6,0-1.1,0-1.7c0-0.5,0.4-0.7,0.9-0.7c0.9,0,1.7,0,2.6,0v-3.6c-1.3,0.1-2.7-0.2-4,0.2
	c-1.8,0.6-2.9,2.3-2.9,4.4c0,0.4,0,0.9,0,1.4h-2.6V19v1.8h2.6v8.1h3.4v-8.1H23.8z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/zeenahagency/?hl=en"
                target="_blank"
                className="icon_holder"
                title="https://www.instagram.com/zeenahagency/?hl=en"
              >
                <svg
                  version="1.1"
                  id="site-svg-icon"
                  x="0px"
                  y="0px"
                  viewBox="0 0 40 40"
                >
                  <g>
                    <path
                      className="sm-svg-cons"
                      d="M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20S31,40,20,40z M20,1.3C9.7,1.3,1.3,9.7,1.3,20S9.7,38.7,20,38.7
		S38.7,30.3,38.7,20S30.3,1.3,20,1.3z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className="sm-svg-cons"
                      d="M23.4,28.5h-6.8c-2.7,0-4.9-2.2-4.9-4.9v-7.3c0-2.7,2.2-4.9,4.9-4.9h6.8c2.7,0,4.9,2.2,4.9,4.9v7.3
		C28.3,26.3,26.1,28.5,23.4,28.5z M16.6,12.7c-2,0-3.6,1.6-3.6,3.6v7.3c0,2,1.6,3.6,3.6,3.6h6.8c2,0,3.6-1.6,3.6-3.6v-7.3
		c0-2-1.6-3.6-3.6-3.6H16.6z"
                    ></path>
                    <path
                      className="sm-svg-cons"
                      d="M20,24.5c-2.5,0-4.5-2-4.5-4.5c0-1.2,0.5-2.3,1.3-3.2c0.8-0.9,1.9-1.3,3.1-1.3c0,0,0.1,0,0.1,0
		c1.4,0,2.6,0.5,3.4,1.4c0.8,0.8,1.1,1.9,1.1,3.2c0,1.2-0.5,2.3-1.3,3.2C22.3,24,21.2,24.5,20,24.5z M19.9,17c-0.8,0-1.5,0.3-2,0.9
		C17.3,18.4,17,19.2,17,20c0,1.7,1.3,3,3,3c1.6,0,3-1.3,3-3c0-0.9-0.2-1.6-0.7-2.1C21.8,17.3,21,17,19.9,17C20,17,19.9,17,19.9,17z"
                    ></path>
                    <path
                      className="sm-svg-cons"
                      d="M25.7,15.3c0,0.6-0.5,1.1-1.1,1.1c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1
		C25.2,14.3,25.7,14.8,25.7,15.3"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/595466/"
                target="_blank"
                className="icon_holder"
                title="https://www.linkedin.com/company/595466/"
              >
                <svg
                  version="1.1"
                  id="site-svg-icon"
                  x="0px"
                  y="0px"
                  viewBox="0 0 40 40"
                >
                  <g>
                    <path
                      className="sm-svg-cons"
                      d="M20,40C9,40,0,31,0,20S9,0,20,0s20,9,20,20S31,40,20,40z M20,1.3C9.7,1.3,1.3,9.7,1.3,20S9.7,38.7,20,38.7
		S38.7,30.3,38.7,20S30.3,1.3,20,1.3z"
                    ></path>
                  </g>
                  <g>
                    <path
                      className="st1"
                      d="M28.5,28.1c-1.2,0-2.4,0-3.6,0c0-0.1,0-0.1,0-0.2c0-1.9,0-3.7,0-5.6c0-0.4,0-0.9-0.2-1.3c-0.2-0.5-0.4-1-1-1.2
		c-0.8-0.3-1.7-0.1-2.2,0.6c-0.3,0.4-0.5,0.8-0.5,1.3c0,0.2,0,0.3,0,0.5c0,1.9,0,3.8,0,5.6c0,0.2,0,0.2-0.2,0.2c-1.1,0-2.2,0-3.3,0
		c-0.1,0-0.2,0-0.2-0.2c0-2.8,0-5.7,0-8.5c0-0.7,0-1.4,0-2.1c0,0,0-0.1,0-0.1c0.1,0,0.1,0,0.1,0c1.1,0,2.2,0,3.3,0
		c0.1,0,0.2,0,0.2,0.2c0,0.4,0,0.8,0,1.2c0,0,0,0.1,0,0.2c0.1-0.1,0.2-0.2,0.3-0.3c0.7-0.9,1.6-1.3,2.7-1.4c0.7,0,1.3,0,1.9,0.3
		c0.6,0.2,1.1,0.6,1.5,1.1c0.6,0.8,0.9,1.7,1,2.6c0,0.2,0,0.3,0.1,0.5C28.5,23.6,28.5,25.9,28.5,28.1z"
                    ></path>
                    <path
                      className="st1"
                      d="M11.5,13.5c0-0.1,0.1-0.2,0.1-0.4c0.2-0.5,0.5-0.9,1.1-1.1c0.7-0.2,1.3-0.2,1.9,0.1c0.7,0.4,1.1,1.2,0.9,2
		c-0.1,0.7-0.6,1.2-1.3,1.4c-0.6,0.2-1.2,0.2-1.8-0.1c-0.5-0.3-0.9-0.7-1-1.3c0,0,0-0.1,0-0.1C11.5,13.9,11.5,13.7,11.5,13.5z"
                    ></path>
                    <path
                      className="st1"
                      d="M15.4,28.1c-0.1,0-0.1,0-0.1,0c-1.1,0-2.2,0-3.3,0c-0.1,0-0.2,0-0.2-0.2c0-3.5,0-7.1,0-10.6c0,0,0-0.1,0-0.1
		c1.2,0,2.4,0,3.6,0C15.4,20.8,15.4,24.5,15.4,28.1z"
                    ></path>
                  </g>
                </svg>
              </a>
              <ul className="fotter-links">
                <CustomLink title="Privacy Policy" to="/en/privacy-policy">
                  Privacy Policy
                </CustomLink>
                <CustomLink
                  title="Terms and Conditions"
                  to="/en/terms-and-conditions"
                >
                  Terms and Conditions
                </CustomLink>
                <CustomLink title="Cookies Policy" to="/en/cookies-policy">
                  Cookies Policy
                </CustomLink>
              </ul>
            </div>
          </div>

          <a className="off-canvas-overlay" href="#close"></a>
        </div>
      </div>
      {/* Center */}
      <div className="site-eazy-access">
        <ul>
          <CustomLink
            title="Get in Touch"
            className="access-btn"
            to="/en/get-in-touch"
          >
            Get in Touch
          </CustomLink>
        </ul>
        <div>
          <a
            className="site-icon"
            href="tel:+96824607770"
            title="tel:+96824607770"
          >
            {pathname === "/en/our-work/integrated/experience-oman" ||
            pathname === "/" ? (
              <svg
                version="1.1"
                id="site-icon-white"
                x="0px"
                y="0px"
                width="35px"
                height="35px"
                viewBox="0 0 35 35"
              >
                <g>
                  <path
                    d="M33.1,25.8c-1.4-1.1-5.8-3.3-6.8-3.5c-1.1-0.3-2.4,0.8-2.7,2.1c-0.4,1.3-1,1.2-1,1.2s-2.6-1-7.3-5.7
  c-4.7-4.7-5.7-7.3-5.7-7.3s-0.1-0.7,1.2-1c1.3-0.4,2.3-1.7,2.1-2.7c-0.3-1.1-2.4-5.4-3.5-6.8S5.9,1.3,5.4,1.6s-5.5,3.6-4,9.5
  s4.8,10.6,8.4,14.2s8.3,6.8,14.2,8.3c5.9,1.5,9.1-3.6,9.5-4C33.8,29.1,34.5,26.9,33.1,25.8z"
                  />
                </g>
              </svg>
            ) : (
              <svg
                version="1.1"
                id="site-icon"
                x="0px"
                y="0px"
                width="35px"
                height="35px"
                viewBox="0 0 35 35"
              >
                <g>
                  <path
                    d="M33.1,25.8c-1.4-1.1-5.8-3.3-6.8-3.5c-1.1-0.3-2.4,0.8-2.7,2.1c-0.4,1.3-1,1.2-1,1.2s-2.6-1-7.3-5.7
  c-4.7-4.7-5.7-7.3-5.7-7.3s-0.1-0.7,1.2-1c1.3-0.4,2.3-1.7,2.1-2.7c-0.3-1.1-2.4-5.4-3.5-6.8S5.9,1.3,5.4,1.6s-5.5,3.6-4,9.5
  s4.8,10.6,8.4,14.2s8.3,6.8,14.2,8.3c5.9,1.5,9.1-3.6,9.5-4C33.8,29.1,34.5,26.9,33.1,25.8z"
                  />
                </g>
              </svg>
            )}
          </a>
        </div>
        <ul>
          <CustomLink title="AR" className="access-btn White" to="/en/ar">
            AR
          </CustomLink>
        </ul>
      </div>
      {/*  */}
      <div>
        <Link to="/en/" className="site-title">
          <picture>
            <source srcSet={LogoW} media="(prefers-color-scheme: dark)" />

            {pathname === "/en/our-work/integrated/experience-oman" ||
            pathname === "/" ? (
              <img
                className="site-logo"
                width="200"
                height="80"
                src={LogoW}
                alt="Zeenah | Integrated Marketing Agency Oman | web design agency Oman"
                title="Zeenah | Integrated Marketing Agency Oman | web design agency Oman"
              />
            ) : (
              <img
                className="site-logo"
                width="200"
                height="80"
                src={Logo}
                alt="Zeenah | Integrated Marketing Agency Oman | web design agency Oman"
                title="Zeenah | Integrated Marketing Agency Oman | web design agency Oman"
              />
            )}
          </picture>
        </Link>
      </div>
    </nav>
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
