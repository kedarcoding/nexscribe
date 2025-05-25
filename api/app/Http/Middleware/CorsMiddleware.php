<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Allow requests from the Vue.js app (localhost:5173)
        $allowedOrigins = ['http://localhost:5173','http://localhost:8080','http://localhost:3000']; // List of allowed origins

        // If the request's origin matches the allowed origins
        if (in_array($request->header('Origin'), $allowedOrigins)) {
            // Set CORS headers
            return $next($request)
                ->header('Access-Control-Allow-Origin', $request->header('Origin'))
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
                ->header('Access-Control-Allow-Credentials', 'true');
        }

        // If the origin is not allowed, proceed without adding CORS headers
        return $next($request);
    }
}
