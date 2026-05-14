import Link from "next/link";

export default function Login() {
  return (
    <>
      {/* inner body section start here */}
      <div className="inner-container">
        {/* login section start here */}
        <div className="login-bg">
          <div className="title1">Please enter your email and password</div>
          <div className="login-box">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                  <div className="brand-text p-0 mb-4">
                    <h4>Login</h4>
                  </div>

                  <form id="loginForm">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        aria-describedby="emailHelp"
                        required
                        placeholder=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        placeholder=""
                      />
                    </div>
                    <div className="rgs-txt pt-2">
                      <input type="radio" /> Remember me
                    </div>
                    
                    <Link href="/pick-up">
                      <button type="button" className="quick-btn yellow-btn w-100">
                        Login
                      </button>
                    </Link>

                    <div className="rgs-txt pt-2">
                      <Link href="/forgot-password">Forgot password</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* login section end here */}
      </div>
      {/* inner body section end here */}
    </>
  );
}
