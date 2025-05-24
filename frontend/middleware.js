import { NextResponse } from 'next/server';

export function middleware(req) {
  // Get cookies from request headers
  const authToken = req.cookies.authToken; // Retrieve the authToken cookie
  const userRole = req.cookies.userRole; // Retrieve the userRole cookie

  // If no authToken or userRole is found, redirect to login
  if (!authToken || !userRole) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // If trying to access admin routes, ensure the user is an admin
  if (req.url.includes('/admin') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/login', req.url));  // Redirect if the user is not an admin
  }

  // Allow the request to continue if the user has the appropriate role or is authenticated
  return NextResponse.next();
}

// Define which routes this middleware should be applied to

