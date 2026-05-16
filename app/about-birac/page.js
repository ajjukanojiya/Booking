import Link from "next/link";

export const metadata = {
  title: "About BIRAC - Gaadi Ride",
  description: "Learn more about BIRAC and our mission.",
};

export default function AboutBirac() {
  return (
    <>
      {/* Banner Section */}
      <div className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>About BIRAC</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center mt-3">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">About BIRAC</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="inner-container my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-sm border-0 p-5">
                <h3 className="mb-4" style={{ color: "#007bff" }}>Welcome to BIRAC</h3>
                <p className="lead text-muted mb-4">
                  We are committed to providing the most sustainable, cost-effective, and safe travel solutions for our users. BIRAC represents our core mission and values towards a better and greener tomorrow.
                </p>

                <div className="row mt-5">
                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="icon-box bg-light text-primary p-3 rounded-circle me-3">
                        <i className="fas fa-leaf fa-2x"></i>
                      </div>
                      <div>
                        <h5>Sustainability First</h5>
                        <p className="text-muted">Carpooling reduces the carbon footprint significantly. Our goal is to make every ride green and eco-friendly.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="icon-box bg-light text-primary p-3 rounded-circle me-3">
                        <i className="fas fa-wallet fa-2x"></i>
                      </div>
                      <div>
                        <h5>Cost Effective</h5>
                        <p className="text-muted">Travel shouldn't be expensive. By sharing rides, both drivers and passengers save money on fuel and tolls.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="icon-box bg-light text-primary p-3 rounded-circle me-3">
                        <i className="fas fa-shield-alt fa-2x"></i>
                      </div>
                      <div>
                        <h5>Safe & Secure</h5>
                        <p className="text-muted">Every user profile is verified. We ensure that your journey is not just affordable, but absolutely safe.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-start">
                      <div className="icon-box bg-light text-primary p-3 rounded-circle me-3">
                        <i className="fas fa-users fa-2x"></i>
                      </div>
                      <div>
                        <h5>Community Driven</h5>
                        <p className="text-muted">Meet new people, make connections, and travel together. We are building a community of responsible travelers.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
