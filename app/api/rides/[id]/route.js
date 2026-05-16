import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const rideId = parseInt(id, 10);

    if (isNaN(rideId)) {
      return NextResponse.json({ error: "Invalid ride ID" }, { status: 400 });
    }

    const ride = await prisma.ride.findUnique({
      where: { id: rideId }
    });

    if (!ride) {
      return NextResponse.json({ error: "Ride not found" }, { status: 404 });
    }

    return NextResponse.json(ride);
  } catch (error) {
    console.error("Error fetching ride:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
