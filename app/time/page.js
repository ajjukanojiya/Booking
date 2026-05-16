"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function TimeForm() {
  const [time, setTime] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleNext = (e) => {
    e.preventDefault();
    if (!time) {
      alert("Please enter a time!");
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("time", time);
    router.push(`/passenger?${params.toString()}`);
  };

  return (
    <form id="loginForm" onSubmit={handleNext}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Time</label>
        <input 
          type="time" 
          className="form-control" 
          required 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit" className="quick-btn yellow-btn w-100 mt-3">
        Continue
      </button>
    </form>
  );
}

export default function TimePage() {
  return (
    <div className="inner-container">
      <div className="login-bg">
        <div className="title1">When do you plan to pick up your passengers?</div>
        <div className="login-box">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                <Suspense fallback={<div>Loading...</div>}>
                  <TimeForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
