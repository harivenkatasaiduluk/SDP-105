import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/admin/dashboard">
          Admin Panel
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/admin/dashboard">Farmers</Link></li>
          </ul>
          <button className="btn btn-outline-light" onClick={logout}>
            Logout ({user.name})
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
