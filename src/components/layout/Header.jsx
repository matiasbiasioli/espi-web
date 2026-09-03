import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          espi
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;