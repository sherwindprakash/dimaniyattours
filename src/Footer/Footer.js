import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Footer.css";

import Facebook from "../assets/SM/Footer/facebook-round-svgrepo-com.svg";
import Instagram from "../assets/SM/Footer/instagram-round-svgrepo-com.svg";
import Tripadvisor from "../assets/SM/Footer/tripadvisor-logotype-svgrepo-com.svg";
import WhatsApp from "../assets/SM/whatsapp-color-svgrepo-com.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerHolder">
          <div className="FUDiv">Follow us</div>
          <a
            href="https://www.facebook.com/people/Alluluah-Tourism/pfbid0T1eT2aNEHvPXGgqXmRyHvKRgqBVh4va3MdRMEipuYN4LaxYk87oZmkMyS9a34Rh8l/?fref=ts"
            alt="Dimaniyat Tours | Facebook"
            title="Dimaniyat Tours | Facebook"
            target="_blank"
          >
            <img
              loading="lazy"
              width="40"
              height="40"
              alt="Dimaniyat Tours | Facebook"
              title="Dimaniyat Tours | Facebook"
              src={Facebook}
              className="icon"
            />
          </a>
          <a
            href="https://www.instagram.com/luluataldaymaniyat/"
            alt="Dimaniyat Tours | Instagram"
            title="Dimaniyat Tours | Instagram"
            target="_blank"
          >
            <img
              loading="lazy"
              width="40"
              height="40"
              alt="Dimaniyat Tours | Instagram"
              title="Dimaniyat Tours | Instagram"
              src={Instagram}
              className="icon"
            />
          </a>
          <a
            href=""
            alt="Dimaniyat Tours | Trip Advisor"
            title="Dimaniyat Tours | Trip Advisor"
            target="_blank"
          >
            <img
              loading="lazy"
              width="40"
              height="40"
              alt="Dimaniyat Tours | Tripadvisor"
              title="Dimaniyat Tours | Tripadvisor"
              src={Tripadvisor}
              className="icon"
            />
          </a>

          <a
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=96899199908&text=HI&type=phone_number&app_absent=0"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              width="80"
              height="80"
              alt="Dimaniyat Tours | WhatsApp"
              title="Dimaniyat Tours | WhatsApp"
              src={WhatsApp}
              className="iconWhatsApp"
            />
          </a>

          <div className="FootText">
            {" "}
            Copyright © {new Date().getFullYear()} Dimaniyat Tours
          </div>
        </div>
      </footer>
    </>
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
