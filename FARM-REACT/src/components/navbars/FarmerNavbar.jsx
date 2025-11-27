import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const FarmerNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/farmer/dashboard">
          FarmerMart
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navFarm">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navFarm">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/farmer/products">My Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/farmer/orders">Orders</Link>
            </li>
          </ul>

          <button className="btn btn-light" onClick={logout}>
            Logout ({user.name})
          </button>
        </div>
      </div>
    </nav>
  );
};

export default FarmerNavbar;
