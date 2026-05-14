import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">Type in your email, and check your inbox for <br />instructions to set a new password.</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <form id="loginForm">
                  <div className="form-group">
                    <label htmlFor="username">Enter your Email Id</label>
                    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" required placeholder="" />
                  </div>
                  <button type="submit" className="quick-btn yellow-btn w-100">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
