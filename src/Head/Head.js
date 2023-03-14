import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import "./Head.css";
import Logo from "../assets/zeenah_tm.svg";
import LogoW from "../assets/zeenah_tm_white.svg";

export default function Navbar() {
  const { pathname } = useLocation();
  return <h1>HEAD</h1>;
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
