import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm px-4 m-4 rounded-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="../logo.png" alt="Logo" className="d-inline-block align-text-top"/>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse font-bold " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/collections">Colecciones</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Como usar</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
