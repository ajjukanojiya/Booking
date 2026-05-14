"use client";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [activeTab, setActiveTab] = useState("rent");

  return (
    <>
      {/* banner section start here */}
      <div className="banner-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center">
              <div className="banner-title">Travel anywhere together. Spend smarter.</div>
            </div>
            <div className="col-12 col-lg-6">
              <img className="banner-img" src="/images/banner.jpg" alt="gaadi ride" />
            </div>
          </div>
        </div>
      </div>
      {/* banner section end here */}

      {/* search section start here */}
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

                    <Link href="/listing">
                      <button className="quick-btn">Search Here !</button>
                    </Link>
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
      {/* search section end here */}

      {/* step section start here */}
      <div className="steps-wrapper">
        <div className="step-box">
          <div className="icon-box">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Choose location</h3>
          <p>Choose your and find<br />your best car</p>
        </div>

        <div className="step-box">
          <div className="icon-box">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <h3>Pick-up date</h3>
          <p>Select your pick up date and<br />time to book your car</p>
        </div>

        <div className="step-box">
          <div className="icon-box">
            <i className="fas fa-book"></i>
          </div>
          <h3>Book your car</h3>
          <p>Book your car and we will deliver<br />it directly to you</p>
        </div>
      </div>
      {/* step section end here */}
    </>
  );
}
