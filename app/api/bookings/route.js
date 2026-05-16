import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const prisma = new PrismaClient();
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "gaadi-ride-secret-key-123");

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Check logged-in user from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    let passengerName = "Guest User";

    if (token) {
      try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        passengerName = payload.name; // Logged-in user is the passenger
      } catch (err) {
        console.log("Invalid token in POST /api/bookings");
      }
    }
    
    const newBooking = await prisma.booking.create({
      data: {
        rideId: parseInt(data.rideId),
        passenger: passengerName, // Dynamic from logged-in user
        seats: 1, // Defaulting to 1 seat for now
        totalPrice: parseInt(data.price),
        status: "Confirmed"
      }
    });

    return NextResponse.json({ success: true, booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json({ success: false, error: "Failed to create booking", details: error.message }, { status: 500 });
  }
}
