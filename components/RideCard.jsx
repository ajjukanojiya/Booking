import Link from "next/link";

export default function RideCard({ id, driverName, price, rating }) {
  return (
    <div className="ride-card">
      <div className="left-section">
        <div className="route">
          <div className="location">
            00:20<br />Faridabad
          </div>

          <div className="line">
            <span className="duration">0h30</span>
          </div>

          <div className="location">
            00:50<br />Noida
          </div>
        </div>

        <div className="bottom">
          <i className="fas fa-car"></i>
          <div className="driver">
            <i className="fas fa-user user-icon"></i>
            {driverName}
          </div>
          <div className="rating">
            <i className="fas fa-star"></i> <i className="fas fa-star"></i> {rating}
          </div>
          <div className="instant">
            <Link href={`/detail/${id}`}> <i className="fas fa-bolt"></i> Instant Booking</Link>
          </div>
        </div>
      </div>

      <div className="price">
        ₹{price}<span>.00</span>
      </div>
    </div>
  );
}
