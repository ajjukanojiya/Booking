"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PickUp() {
  const [pickupLocation, setPickupLocation] = useState("");
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!pickupLocation) {
      alert("Please enter a pick-up location!");
      return;
    }
    // Navigate to next page and pass data in URL
    router.push(`/drop-off?pickup=${encodeURIComponent(pickupLocation)}`);
  };

  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">Pick-up</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <form id="loginForm" onSubmit={handleNext}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pick-up</label>
                    <input 
                      type="search" 
                      className="form-control" 
                      required 
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter city or address"
                    />
                  </div>
                  <button type="submit" className="quick-btn yellow-btn w-100 mt-3">
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
