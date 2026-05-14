import Link from "next/link";

export default function TimePage() {
  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">When do you plan to pick up your passengers?</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <form id="loginForm">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Time</label>
                    <input type="search" className="form-control" required placeholder="8:00" />
                  </div>
                  <Link href="/passenger">
                    <button type="button" className="quick-btn yellow-btn w-100">
                      Continue
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
