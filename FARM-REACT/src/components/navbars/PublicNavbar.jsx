import { Link, useLocation } from "react-router-dom";

const PublicNavbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold text-success" to="/">
          FarmerMart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#publicNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="publicNav">
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/contact" ? "active" : ""}`} to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/shop" ? "active" : ""}`} to="/shop">
                Shop
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-2">
            <Link className="btn btn-success" to="/login">Login</Link>
            <Link className="btn btn-outline-success" to="/register">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
