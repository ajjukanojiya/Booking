"use client";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function RouteForm() {
  const searchParams = useSearchParams();
  const currentParams = searchParams.toString();
  const nextUrl = currentParams ? `/add-location?${currentParams}` : "/add-location";

  return (
    <div className="row">
      <div className="col-12 col-lg-5">
        <div className="map-title">What is your Route?</div>
        <div className="map-option pb-2">
          <input type="checkbox" />
          <div className="option-text">
            <strong>Max. 2 in the back</strong>
            Think comfort, keep the middle seat empty
          </div>
        </div>
        <Link href={nextUrl}>
          <button className="quick-btn yellow-btn">Next</button>
        </Link>
      </div>
      <div className="col-12 col-lg-7">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56050.09411097668!2d77.30477899999997!3d28.59585015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2cff51660d3%3A0xf4e16af66c90b8e9!2sKartavya%20Path%20%26%20India%20Gate%20Cir%2C%20India%20Gate%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1777376067428!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default function RoutePage() {
  return (
    <div className="inner-container">
      <div className="container">
        <Suspense fallback={<div>Loading map...</div>}>
          <RouteForm />
        </Suspense>
      </div>
    </div>
  );
}
