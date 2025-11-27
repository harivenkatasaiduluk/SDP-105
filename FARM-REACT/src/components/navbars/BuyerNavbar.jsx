import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const BuyerNavbar = ({ setCartOpen }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/shop">
          FarmerMart
        </Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBuy">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navBuy">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/shop">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/buyer/orders">Orders</Link></li>
          </ul>

          <button className="btn btn-outline-light me-2" onClick={() => setCartOpen(true)}>
            Cart
          </button>

          <button className="btn btn-light" onClick={logout}>
            Logout ({user.name})
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BuyerNavbar;
