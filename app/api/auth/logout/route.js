import { NextResponse } from "next/server";

export async function GET(request) {
  // Redirect back to home
  const response = NextResponse.redirect(new URL("/", request.url));
  
  // Clear the cookie by setting it to expire immediately
  response.cookies.set("token", "", { 
    httpOnly: true, 
    path: "/", 
    expires: new Date(0) 
  });

  return response;
}
