const Contact = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-success fw-bold mb-3">Contact Us</h2>
      <p className="lead">We would love to hear from you!</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <h5 className="fw-bold">Email</h5>
          <p>support@farmermart.com</p>

          <h5 className="fw-bold mt-3">Phone</h5>
          <p>+91 98765 43210</p>

          <h5 className="fw-bold mt-3">Address</h5>
          <p>FarmerMart Headquarters, Vijayawada, Andhra Pradesh</p>
        </div>

        <div className="col-md-6">
          <h5 className="fw-bold">Send Message</h5>
          <form>
            <div className="mb-3">
              <input className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
