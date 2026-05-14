"use client";
import { useState, use } from "react";
import Link from "next/link";

export default function Detail({ params }) {
  // Next.js 15+ Client component dynamic params need to be unwrapped with React `use`
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [activeTab, setActiveTab] = useState("rent");

  return (
    <>
      <div className="search-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <div className="booking-box">

                {/* Tabs */}
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

                {/* Instant Rent */}
                <div className={`tab-content ${activeTab === "rent" ? "active" : ""}`} id="rent">
                  <div className="form-row">
                    <div className="field">
                      <h4>Pickup</h4>
                      <input type="text" className="map-icon" placeholder="Point Location" />
                    </div>

                    <div className="field">
                      <h4>Drop Off</h4>
                      <input type="text" className="map-icon" placeholder="Point Location" />
                    </div>

                    <div className="field">
                      <h4>Estimate Time</h4>
                      <input type="date" placeholder="Point Location" />
                    </div>

                    <div className="field">
                      <h4>Return date</h4>
                      <input type="date" placeholder="Return date" />
                    </div>
                    <div className="field">
                      <h4>Passenger</h4>
                      <input type="text" className="pass-icon" placeholder="1 passenger" />
                    </div>

                    <button className="quick-btn">Rent Now !</button>
                  </div>
                </div>

                {/* Private Driver */}
                <div className={`tab-content ${activeTab === "driver" ? "active" : ""}`} id="driver">
                  <div className="form-row">
                    <div className="field">
                      <h4>Pickup 2</h4>
                      <input type="text" placeholder="Your Pickup Point" />
                    </div>

                    <div className="field">
                      <h4>Hours</h4>
                      <input type="text" placeholder="4 Hours" />
                    </div>

                    <div className="field">
                      <h4>Driver Type</h4>
                      <input type="text" placeholder="Professional Driver" />
                    </div>

                    <div className="field">
                      <h4>Pricing</h4>
                      <input type="text" placeholder="$ 20.00" />
                    </div>

                    <button className="rent-btn">Book Driver</button>
                  </div>
                </div>

                {/* Long Trip */}
                <div className={`tab-content ${activeTab === "trip" ? "active" : ""}`} id="trip">
                  <div className="form-row">
                    <div className="field">
                      <h4>Pickup 3</h4>
                      <input type="text" placeholder="Start Location" />
                    </div>

                    <div className="field">
                      <h4>Destination</h4>
                      <input type="text" placeholder="Destination" />
                    </div>

                    <div className="field">
                      <h4>Days</h4>
                      <input type="text" placeholder="2 Days" />
                    </div>

                    <div className="field">
                      <h4>Pricing</h4>
                      <input type="text" placeholder="$ 100.00" />
                    </div>

                    <button className="rent-btn">Book Trip</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="inner-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="detail-section">
                <div className="wrapper">
                  
                  {/* Dynamic Alert for the user to see the ID */}
                  <div className="alert alert-warning">
                    <strong>Dynamic Route Active:</strong> You are viewing details for Ride ID: <strong>{id}</strong>
                  </div>

                  <div className="card">
                    <div className="route-item">
                      <div className="route-time">15:30 <small>0h30</small></div>
                      <div className="route-content">
                        <h3>New Delhi</h3>
                        <p>F8Q5+MWM, 1st 60 Feet Road Block D, Molar band Extension, Ext, Molarband, Delhi</p>
                      </div>
                    </div>

                    <div className="route-item" style={{ marginBottom: 0 }}>
                      <div className="route-time">16:00</div>
                      <div className="route-content">
                        <h3>Bajidpur</h3>
                        <p>Stellar Building, Sec 135, Noida-Greater Noida Expy, Sector 135, Noida, Uttar Pradesh</p>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="profile-top">
                      <div className="profile-left">
                        <div className="profile-img"></div>
                        <div>
                          <div className="profile-name">Kunal</div>
                          <div className="rating">★ 5/5 - 3 ratings</div>
                        </div>
                      </div>
                      <div className="arrow">›</div>
                    </div>

                    <div className="info-list">
                      <div>✔ Verified Profile</div>
                      <div>✔ Never cancels rides</div>
                      <div>Flexible about where and when to meet.</div>
                    </div>

                    <hr />

                    <div className="info-list">
                      <div>⚡ Your booking will be confirmed instantly</div>
                      <div>🚭 No smoking, please</div>
                      <div>👥 Max. 2 in the back</div>
                      <div>🚘 MARUTI Wagon R - Dark grey</div>
                    </div>

                    <button className="contact-btn">💬 Contact Kunal</button>
                  </div>

                  <div className="card">
                    <div className="title">Passengers</div>
                    <div className="passenger">
                      <div className="passenger-left">
                        <div className="passenger-img"></div>
                        <div>
                          <div className="passenger-name">Chetan</div>
                          <div className="passenger-route">New Delhi → Bajidpur</div>
                        </div>
                      </div>
                      <div className="arrow">›</div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="footer-note">
                      By choosing this trip, you will help avoid ≈3 kg of CO₂.
                      A total of 1.2 kg CO₂ emissions are associated with this booking
                      (71% less than travelling alone by car).
                      <Link href="#">See our impact report</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="detail-book">
                <div className="card">
                  <div className="date">Monday, 27 April</div>
                  <div className="timeline">
                    <div className="time">
                      15:30<br /><br />16:00
                    </div>
                    <div className="line">
                      <div className="dot top"></div>
                      <div className="dot bottom"></div>
                    </div>
                    <div className="details">
                      <div className="location">New Delhi</div>
                      <div className="address">F8G5+MWM, 1st 60 Feet Road Block D, Molar band Extension...</div>
                      <div className="location">Bajidpur</div>
                      <div className="address">Stellar Building, Sec 135, Noida-Greater Noida Expy...</div>
                    </div>
                  </div>

                  <div className="divider"></div>

                  <div className="driver">
                    <i className="fas fa-car"></i>
                    <i className="fas fa-user user-icon"></i>
                    <div>
                      <div className="driver-name">Kunal</div>
                      <div className="rating"><i className="fas fa-star"></i> 5</div>
                    </div>
                  </div>
                </div>

                <div className="bottom">
                  <div>1 passenger</div>
                  <div className="price">₹60.00</div>
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
                      <h5 className="modal-title" id="exampleModalLabel">Successfully submitted</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      Your ride has been successfully submitted.
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
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
