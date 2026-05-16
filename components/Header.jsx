import Link from "next/link";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "gaadi-ride-secret-key-123");

export default async function Header() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  let user = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);
      user = payload; // { id, name, email }
    } catch (err) {
      console.log("Invalid token");
    }
  }

  return (
    <>
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
                  <li><Link href="/listing"><i className="fas fa-search"></i> Search</Link></li>
                  
                  {user ? (
                    <>
                      <li>
                        <Link href="/pick-up">
                          <button className="quick-btn ride-btn">Publish your Ride</button>
                        </Link>
                      </li>
                      <li>
                        <i className="fas fa-user"></i> {user.name}
                        <ul className="profile-sec">
                          <li><Link href="/your-ride">Your rides</Link></li>
                          <li><Link href="/inbox">Inbox</Link></li>
                          <li><Link href="/profile"><i className="fas fa-user"></i> Profile</Link></li>
                          <li>
                            {/* We will use a regular form POST to hit an API endpoint that clears the cookie, or we can use a client component approach. Let's just link to an api route that redirects */}
                            <a href="/api/auth/logout"><i className="fas fa-sign-out-alt"></i> Sign out</a>
                          </li>
                        </ul>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link href="/login">
                          <button className="quick-btn ride-btn">Login / Sign Up</button>
                        </Link>
                      </li>
                    </>
                  )}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
