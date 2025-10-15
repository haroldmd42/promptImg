import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar-futuristic">
      <div className="navbar-inner">
        <NavLink className="navbar-logo" to="/">
          <img src={`${import.meta.env.BASE_URL}logo.png`}alt="Logo" />
          
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink to="/" end className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/collections" className="nav-link">
              Colecciones
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-to-use" className="nav-link">
              Cómo usar
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
