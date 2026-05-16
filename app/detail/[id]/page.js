"use client";
import { useState, use, useEffect } from "react";
import Link from "next/link";

export default function Detail({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [activeTab, setActiveTab] = useState("rent");
  const [ride, setRide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/rides/${id}`)
      .then(res => res.json())
      .then(data => {
        setRide(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container mt-5 text-center"><h2>Loading Ride Details...</h2></div>;
  }

  if (!ride || ride.error) {
    return <div className="container mt-5 text-center"><h2>Ride not found!</h2></div>;
  }

  return (
    <>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="booking-box">
                <div className="tabs">
                  <button 
                    className={`tab-btn ${activeTab === "rent" ? "active" : ""}`} 
                    onClick={() => setActiveTab("rent")}
                  >
                    Instant Rent
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === "driver" ? "active" : ""}`} 
                    onClick={() => setActiveTab("driver")}
                  >
                    Private Driver
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === "trip" ? "active" : ""}`} 
                    onClick={() => setActiveTab("trip")}
                  >
                    Long Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-container mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="detail-section">
                <div className="wrapper">
                  
                  <div className="card">
                    <div className="route-item">
                      <div className="route-time">{ride.time || "00:00"} <small>Departure</small></div>
                      <div className="route-content">
                        <h3>{ride.pickup}</h3>
                        <p>Pickup Location</p>
                      </div>
                    </div>

                    <div className="route-item" style={{ marginBottom: 0 }}>
                      <div className="route-time">Arrival</div>
                      <div className="route-content">
                        <h3>{ride.dropoff}</h3>
                        <p>Dropoff Location</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="profile-top">
                      <div className="profile-left">
                        <div className="profile-img"></div>
                        <div>
                          <div className="profile-name">{ride.driverName}</div>
                          <div className="rating">★ {ride.rating} / 5</div>
                        </div>
                      </div>
                    </div>

                    <div className="info-list">
                      <div>✔ Verified Profile</div>
                      <div>✔ Never cancels rides</div>
                      <div>👥 Max. {ride.passengers} passengers</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="detail-book">
                <div className="card">
                  <div className="date">{ride.date || "Date not specified"}</div>
                  <div className="timeline">
                    <div className="time">
                      {ride.time}<br /><br />...
                    </div>
                    <div className="line">
                      <div className="dot top"></div>
                      <div className="dot bottom"></div>
                    </div>
                    <div className="details">
                      <div className="location">{ride.pickup}</div>
                      <div className="address">...</div>
                      <div className="location">{ride.dropoff}</div>
                      <div className="address">...</div>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="driver">
                    <i className="fas fa-car"></i>
                    <i className="fas fa-user user-icon"></i>
                    <div>
                      <div className="driver-name">{ride.driverName}</div>
                      <div className="rating"><i className="fas fa-star"></i> {ride.rating}</div>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div>1 passenger</div>
                  <div className="price">₹{ride.price}.00</div>
                </div>

                <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn">
                  <i className="fas fa-bolt"></i> Book Now
                </button>
              </div>

              {/* Modal */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Ride Booking</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to book this ride from {ride.pickup} to {ride.dropoff} for ₹{ride.price}?
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                      <button 
                        type="button" 
                        className="btn btn-primary" 
                        data-bs-dismiss="modal" 
                        onClick={async () => {
                          try {
                            const res = await fetch("/api/bookings", {
                              method: "POST",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ rideId: id, price: ride.price })
                            });
                            const data = await res.json();
                            if(data.success) {
                              alert("Success! Your ride is confirmed. Booking ID: " + data.booking.id);
                            } else {
                              alert("Booking failed: " + data.error);
                            }
                          } catch(err) {
                            alert("Error: " + err.message);
                          }
                        }}
                      >
                        Confirm Booking
                      </button>
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
