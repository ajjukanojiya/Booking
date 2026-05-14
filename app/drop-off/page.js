import Link from "next/link";

export default function DropOff() {
  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">Drop-off</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <form id="loginForm">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Drop-off</label>
                    <input type="search" className="form-control" required />
                  </div>
                  <Link href="/route">
                    <button type="button" className="quick-btn yellow-btn w-100">
                      Next
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
