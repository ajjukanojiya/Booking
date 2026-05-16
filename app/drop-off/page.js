"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function DropOffForm() {
  const [dropoffLocation, setDropoffLocation] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pickup = searchParams.get("pickup") || "";

  const handleNext = (e) => {
    e.preventDefault();
    if (!dropoffLocation) {
      alert("Please enter a drop-off location!");
      return;
    }
    // Forward both pickup and dropoff to the next step
    router.push(`/route?pickup=${encodeURIComponent(pickup)}&dropoff=${encodeURIComponent(dropoffLocation)}`);
  };

  return (
    <form id="loginForm" onSubmit={handleNext}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Drop-off</label>
        <input 
          type="search" 
          className="form-control" 
          required 
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          placeholder="Enter destination"
        />
      </div>
      <button type="submit" className="quick-btn yellow-btn w-100 mt-3">
        Next
      </button>
    </form>
  );
}

export default function DropOff() {
  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">Drop-off</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <Suspense fallback={<div>Loading...</div>}>
                  <DropOffForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
