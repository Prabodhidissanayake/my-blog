import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <a href="/" className="logo-title">Social Brothers</a>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <a href="/home">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/blogs">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
