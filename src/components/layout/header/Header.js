import { Outlet } from "react-router-dom";
import './Header.css';

function Header() {
    return (
      <div className="header-container">
        <a>Social Brothers</a>
        <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item"><a>Home</a></li>
            <li className="navbar-item"><a>Blog</a></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;