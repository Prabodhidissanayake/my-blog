import "./Header.css";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isHomeActive = useLocation().pathname == "/home";

  return (
    <div className="header-container">
      <a href="/" className="logo-title">
        Social Brothers
      </a>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/home" className={isHomeActive ? "active" : ""}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/blogs" className={!isHomeActive ? "active" : ""}>
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
