import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const prisma = new PrismaClient();
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "gaadi-ride-secret-key-123");

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pickup = searchParams.get('pickup');
  const dropoff = searchParams.get('dropoff');

  // Build the query conditionally
  const query = { where: {} };
  
  if (pickup) {
    query.where.pickup = { contains: pickup }; // MySQL is case-insensitive for text generally
  }
  if (dropoff) {
    query.where.dropoff = { contains: dropoff };
  }

  const rides = await prisma.ride.findMany(query);
  return NextResponse.json(rides);
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    let driverName = "Anonymous";

    if (token) {
      try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        driverName = payload.name; // Get name from token
      } catch (err) {
        console.log("Invalid token in POST /api/rides");
      }
    }
    
    // Save to database using Prisma
    const newRide = await prisma.ride.create({
      data: {
        pickup: data.pickup,
        dropoff: data.dropoff,
        date: data.date,
        time: data.time,
        passengers: parseInt(data.passengers) || 1,
        driverName: driverName, // Dynamic from logged-in user
        price: 200,               // Hardcoded for now
        rating: "5.0"             // Hardcoded for now
      }
    });

    return NextResponse.json({ success: true, ride: newRide });
  } catch (error) {
    console.error("Error saving ride:", error);
    return NextResponse.json({ success: false, error: "Failed to save ride", details: error.message }, { status: 500 });
  }
}

