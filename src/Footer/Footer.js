import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Footer.css";
import Logo from "../assets/zeenah_tm.svg";
import LogoW from "../assets/zeenah_tm_white.svg";

import Logo_4C from "../assets/4C.svg";

export default function Navbar() {
  return (
    <>
      <h2>Foot</h2>
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
