import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import "./Head.css";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <header>
      <div className="HeadLeft"></div>
      <div className="HeadRight">
        <ul className="HomeMenu">
          <CustomLink title="Home" to="/en/">
            Home
          </CustomLink>
          <CustomLink title="Package" to="/en/package/">
            Package
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
