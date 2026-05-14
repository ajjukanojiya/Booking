import Link from "next/link";

export default function AddLocation() {
  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">Include extra stops and increase your riders</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <div className="addcity-link"><Link href="#">Add City</Link></div>
                <Link href="/date">
                  <button type="button" className="quick-btn yellow-btn w-100">
                    Continue
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
