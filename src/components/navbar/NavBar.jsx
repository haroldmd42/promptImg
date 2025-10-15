import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-futuristic">
      <div className="navbar-inner">
        {/* Logo */}
        <NavLink className="navbar-logo" to="/">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo"
            className="navbar-logo-img"
          />
        </NavLink>

        {/* Botón hamburguesa */}
        <button
          className={`navbar-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links */}
        <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
          <li>
            <NavLink to="/" end className="nav-link" onClick={() => setIsOpen(false)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/collections" className="nav-link" onClick={() => setIsOpen(false)}>
              Colecciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-to-use" className="nav-link" onClick={() => setIsOpen(false)}>
              Cómo usar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
