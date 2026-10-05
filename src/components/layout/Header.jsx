import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../../assets/images/espi-logo-bg.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="ESPI — Espacio de Salud Psicoterapéutico Integral" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;