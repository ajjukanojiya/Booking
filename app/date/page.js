"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function DateForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("2026-05-16");

  const handleNext = () => {
    const params = new URLSearchParams(searchParams);
    params.set("date", selectedDate);
    router.push(`/time?${params.toString()}`);
  };

  return (
    <>
      <div className="calendar-container">
        {/* MAY */}
        <div className="calendar">
          <div className="month">May 2026</div>
          <div className="days">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div>
            <div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="dates">
            <div></div><div></div><div></div><div></div><div></div>
            <div onClick={() => setSelectedDate("2026-05-01")}>1</div><div onClick={() => setSelectedDate("2026-05-02")}>2</div>
            <div onClick={() => setSelectedDate("2026-05-03")}>3</div><div onClick={() => setSelectedDate("2026-05-04")}>4</div><div onClick={() => setSelectedDate("2026-05-05")}>5</div><div onClick={() => setSelectedDate("2026-05-06")}>6</div><div onClick={() => setSelectedDate("2026-05-07")}>7</div><div onClick={() => setSelectedDate("2026-05-08")}>8</div><div onClick={() => setSelectedDate("2026-05-09")}>9</div>
            <div onClick={() => setSelectedDate("2026-05-10")}>10</div><div onClick={() => setSelectedDate("2026-05-11")}>11</div><div onClick={() => setSelectedDate("2026-05-12")}>12</div><div onClick={() => setSelectedDate("2026-05-13")}>13</div><div onClick={() => setSelectedDate("2026-05-14")}>14</div><div onClick={() => setSelectedDate("2026-05-15")}>15</div><div style={{background: selectedDate === "2026-05-16" ? "yellow" : ""}} onClick={() => setSelectedDate("2026-05-16")}>16</div>
            <div onClick={() => setSelectedDate("2026-05-17")}>17</div><div onClick={() => setSelectedDate("2026-05-18")}>18</div><div onClick={() => setSelectedDate("2026-05-19")}>19</div><div onClick={() => setSelectedDate("2026-05-20")}>20</div><div onClick={() => setSelectedDate("2026-05-21")}>21</div><div onClick={() => setSelectedDate("2026-05-22")}>22</div><div onClick={() => setSelectedDate("2026-05-23")}>23</div>
            <div onClick={() => setSelectedDate("2026-05-24")}>24</div><div onClick={() => setSelectedDate("2026-05-25")}>25</div><div onClick={() => setSelectedDate("2026-05-26")}>26</div><div onClick={() => setSelectedDate("2026-05-27")}>27</div><div onClick={() => setSelectedDate("2026-05-28")}>28</div><div onClick={() => setSelectedDate("2026-05-29")}>29</div><div onClick={() => setSelectedDate("2026-05-30")}>30</div>
            <div onClick={() => setSelectedDate("2026-05-31")}>31</div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 mb-3">
        <strong>Selected Date: {selectedDate}</strong>
      </div>
      <button onClick={handleNext} className="quick-btn yellow-btn">Next</button>
    </>
  );
}

export default function DatePage() {
  return (
    <div className="inner-container">
      <Suspense fallback={<div>Loading...</div>}>
        <DateForm />
      </Suspense>
    </div>
  );
}
