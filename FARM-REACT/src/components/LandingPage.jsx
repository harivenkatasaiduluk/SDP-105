import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-light py-5 mb-5">
        <div className="container text-center">
          <h1 className="fw-bold text-success">Fresh Produce Directly From Farmers</h1>
          <p className="lead mt-3">
            Cut out middlemen. Support farmers. Get the freshest food delivered to your home.
          </p>
          <Link to="/shop" className="btn btn-success btn-lg px-4 mt-3">
            Go to Shop
          </Link>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container text-center mb-5">
        <h2 className="fw-bold text-success mb-4">Why FarmerMart?</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <h4>💰 Fair Prices</h4>
            <p>Farmers earn more, customers pay less.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4>🌾 Fresh & Organic</h4>
            <p>Straight from the fields to your doorstep.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h4>🔒 Secure Orders</h4>
            <p>Safe and reliable buying experience.</p>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-success text-white text-center py-5">
        <h3 className="fw-bold">Are you a Farmer?</h3>
        <p className="lead">Join us and sell your crops directly to customers.</p>
        <Link to="/register" className="btn btn-light btn-lg px-4">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
