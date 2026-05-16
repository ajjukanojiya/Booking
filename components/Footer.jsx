import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="row g-4">
            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-info mb-3">
                <ul className="foot-add">
                  <li>
                    <div className="logo-section">
                      <Link href="/">
                        <img className="logo1" alt="Gaadi Ride" src="/images/gaadiride.png" />
                        <div className="logo-txt">
                          Gaadi Ride
                          <span>Go places together. Save money every mile.</span>
                        </div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <p>Gaadi Ride makes travel smarter and more affordable. Share rides, save money, and enjoy the journey.</p>
                  </li>
                  <li>
                    <div className="social-icons">
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                      <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                      <Link href="#"><i className="fab fa-instagram"></i></Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h5>Travel with carpool</h5>
              <ul className="footlink">
                <li><Link href="/about-birac">About BIRAC</Link></li>
                <li><Link href="#">Nashik → Pune</Link></li>
                <li><Link href="#">Mumbai → Pune</Link></li>
                <li><Link href="#">Pune → Aurangabad</Link></li>
                <li><Link href="#">Bengaluru → Chittoor</Link></li>
                <li><Link href="#">Gurgaon → Jaipur</Link></li>
                <li><Link href="#">Meerut → Gautam Buddha Nagar</Link></li>
              </ul>
            </div>

            {/* Programs */}
            <div className="col-lg-3 col-md-6">
              <h5>Find out more</h5>
              <ul className="footlink">
                <li><Link href="#">BIG Scheme</Link></li>
                <li><Link href="#">Who we are</Link></li>
                <li><Link href="#">How does ... work?</Link></li>
                <li><Link href="#">Help Centre</Link></li>
                <li><Link href="#">Press</Link></li>
                <li><Link href="#">We&apos;re Hiring!</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <h5>Stay Updated</h5>
              <p className="subscribe-txt">Subscribe to our newsletter for latest funding calls and updates.</p>
              <div className="input-group newsletter">
                <input type="email" className="form-control" placeholder="Your email" />
                <button className="btn quick-btn foot-btn ">Join</button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="footer-bottom d-flex justify-content-between flex-wrap">
            <div>
              © 2026 Gaadi Ride. All Rights Reserved.
            </div>
            <div className="policy-txt">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Use</Link>
              <Link href="#">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
