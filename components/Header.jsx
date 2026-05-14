import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Header Section Start */}
      <header className="header_section">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="logo-section">
                  <Link href="/">
                    <img className="logo1" alt="Gaadi Ride" src="/images/gaadiride.png" />
                    <div className="logo-txt">
                      Gaadi Ride
                      <span>Go places together. Save money every mile.</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center justify-content-end">
                <ul className="top-head">
                  <li><i className="fas fa-search"></i></li>
                  <li>
                    <Link href="/login">
                      <button className="quick-btn ride-btn">Publish your Ride</button>
                    </Link>
                  </li>
                  <li>
                    <i className="fas fa-user"></i>
                    <ul className="profile-sec">
                      <li><Link href="/your-ride">Your rides</Link></li>
                      <li><Link href="/inbox">Inbox</Link></li>
                      <li><Link href="#"><i className="fas fa-user"></i> Profile</Link></li>
                      <li><Link href="#"><i className="fas fa-sign-out-alt"></i> Sign out</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </>
  );
}
