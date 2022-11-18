import { Link } from "react-router-dom";
import "./NavBar.css"
export const NavBar = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link className="navbar__link" to="/halloween">
            Halloween
          </Link>
        </li>
      </ul>
    </>
  );
};
