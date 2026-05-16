"use client";
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function PassengerForm() {
    const [count, setCount] = useState(1);
    const [options, setOptions] = useState({ max2: false });
    const [loading, setLoading] = useState(false);
    
    const searchParams = useSearchParams();
    const router = useRouter();

    const handleCountChange = (val) => {
        if (count + val > 0 && count + val <= 8) {
            setCount(count + val);
        }
    };

    const handleOptionChange = (option) => {
        setOptions({
            ...options,
            [option]: !options[option],
        });
    };

    const handleSubmit = async () => {
        setLoading(true);
        // Gather all data from URL and state
        const rideData = {
            pickup: searchParams.get("pickup") || "Unknown",
            dropoff: searchParams.get("dropoff") || "Unknown",
            date: searchParams.get("date") || "",
            time: searchParams.get("time") || "",
            passengers: count
        };

        try {
            const res = await fetch("/api/rides", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(rideData)
            });

            const responseData = await res.json();

            if (res.ok) {
                alert("Ride successfully published!");
                router.push("/"); // Navigate back to home or listing
            } else {
                alert("Failed to publish ride. Error: " + (responseData.details || responseData.error));
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="passenger-section">
            <div className="counter">
                <div className="btn-circle" onClick={() => handleCountChange(-1)}>−</div>
                <div id="count">{count}</div>
                <div className="btn-circle plus" onClick={() => handleCountChange(1)}>+</div>
            </div>

            <div className="divider"></div>

            <div className="title">Passenger options</div>

            <div className="option" onClick={() => handleOptionChange('max2')}>
                <input type="checkbox" checked={options.max2} readOnly />
                <div className="option-text">
                    <strong>Max. 2 in the back</strong>
                    Think comfort, keep the middle seat empty
                </div>
            </div>

            <button 
                className="continue-btn mt-4" 
                onClick={handleSubmit}
                disabled={loading}
            >
                {loading ? "Publishing..." : "Publish Ride"}
            </button>
        </div>
    );
}

export default function PassengerPage() {
    return (
        <div className="inner-container">
            <div className="login-bg">
                <div className="title1">What’s the maximum number of<br /> riders you can take?</div>
                <div className="login-box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-12 cust_pading_left slidetext_overflow">
                                <Suspense fallback={<div>Loading...</div>}>
                                    <PassengerForm />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}