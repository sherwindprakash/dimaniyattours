import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Footer.css";

import Facebook from "../assets/SM/Footer/facebook-round-svgrepo-com.svg"
import Instagram from "../assets/SM/Footer/instagram-round-svgrepo-com.svg"
import Tripadvisor from "../assets/SM/Footer/tripadvisor-logotype-svgrepo-com.svg"
import WhatsApp from "../assets/SM/whatsapp-color-svgrepo-com.svg"


export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerHolder">
        <h3>Follow us</h3>
        <img loading="lazy" width="40" height="40" alt="Dimaniyat Tours | Facebook" title="Dimaniyat Tours | Facebook" src={Facebook} className="icon" />
        <img loading="lazy" width="40" height="40" alt="Dimaniyat Tours | Instagram" title="Dimaniyat Tours | Instagram" src={Instagram} className="icon" />
        <img loading="lazy" width="40" height="40" alt="Dimaniyat Tours | Tripadvisor" title="Dimaniyat Tours | Tripadvisor" src={Tripadvisor} className="icon" />
        

          <a target="_blank" href="https://api.whatsapp.com/send/?phone=96899199908&text=HI&type=phone_number&app_absent=0">
        <img loading="lazy" width="80" height="80" alt="Dimaniyat Tours | WhatsApp" title="Dimaniyat Tours | WhatsApp" src={WhatsApp} className="iconWhatsApp" />
        </a>
        

        <h4> Copyright © {new Date().getFullYear()} Dimaniyat Tours</h4>
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
