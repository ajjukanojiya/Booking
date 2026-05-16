"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import RideCard from "@/components/RideCard";

function ListingContent() {
    const [activeTab, setActiveTab] = useState("rent");
    const [rides, setRides] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchParams = useSearchParams();
    const pickup = searchParams.get("pickup") || "";
    const dropoff = searchParams.get("dropoff") || "";

    useEffect(() => {
        setLoading(true);
        // Bhejte waqt URL parameters lagayenge
        const fetchUrl = `/api/rides?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoff)}`;
        
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setRides(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [pickup, dropoff]);

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

                                {/* Instant Rent */}
                                <div className={`tab-content ${activeTab === "rent" ? "active" : ""}`} id="rent">
                                    <div className="form-row">
                                        <div className="field">
                                            <h4>Pickup</h4>
                                            <input type="text" className="map-icon" placeholder="Point Location" defaultValue={pickup} />
                                        </div>

                                        <div className="field">
                                            <h4>Drop Off</h4>
                                            <input type="text" className="map-icon" placeholder="Point Location" defaultValue={dropoff} />
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
                        <div className="col-12 col-lg-3">

                            <div className="filter-box">
                                <div className="map-box">
                                    <button className="map-btn">
                                        <i className="fa-solid fa-location-dot"></i>
                                        Show rides on map
                                    </button>
                                </div>

                                <div className="section-title">
                                    <h2>Sort by</h2>
                                    <span className="clear">Clear all</span>
                                </div>

                                <div className="option active">
                                    <div className="left">
                                        <div className="radio"></div>
                                        <span>Earliest departure</span>
                                    </div>
                                    <i className="fa-regular fa-clock icon"></i>
                                </div>

                                <div className="option">
                                    <div className="left">
                                        <div className="radio"></div>
                                        <span>Lowest price</span>
                                    </div>
                                    <i className="fa-solid fa-money-bill icon"></i>
                                </div>

                                <div className="option">
                                    <div className="left">
                                        <div className="radio"></div>
                                        <span>Close to departure point</span>
                                    </div>
                                    <i className="fa-solid fa-person-walking green icon"></i>
                                </div>

                                <div className="option">
                                    <div className="left">
                                        <div className="radio"></div>
                                        <span>Close to arrival point</span>
                                    </div>
                                    <i className="fa-solid fa-person-walking green icon"></i>
                                </div>

                                <div className="option">
                                    <div className="left">
                                        <div className="radio"></div>
                                        <span>Shortest ride</span>
                                    </div>
                                    <i className="fa-regular fa-hourglass-half icon"></i>
                                </div>

                                <div className="line"></div>

                                <div className="departure">Departure time</div>
                            </div>

                        </div>

                        <div className="col-12 col-lg-9">
                            <nav style={{ "--bs-breadcrumb-divider": "''" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">Tomorrow</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {pickup || "Anywhere"} → {dropoff || "Anywhere"}
                                    </li>
                                </ol>
                            </nav>

                            {loading ? (
                                <h4>Loading rides...</h4>
                            ) : rides.length > 0 ? (
                                rides.map((ride) => (
                                    <RideCard
                                        key={ride.id}
                                        id={ride.id}
                                        driverName={ride.driverName}
                                        price={ride.price}
                                        rating={ride.rating}
                                        pickup={ride.pickup}
                                        dropoff={ride.dropoff}
                                    />
                                ))
                            ) : (
                                <h4>No rides found for this route.</h4>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Listing() {
    return (
        <Suspense fallback={<div>Loading Page...</div>}>
            <ListingContent />
        </Suspense>
    );
}