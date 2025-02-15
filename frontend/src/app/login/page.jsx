// src/app/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your Laravel API endpoint
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      // Assume your API returns a token in response.data.token
      localStorage.setItem("token", response.data.token);

      // Redirect to the profile page after successful login
      router.push("/profile");
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl mb-4">Login Page</h1>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Login
          </button>
          <div className="mt-4 text-center">
          <p className="text-gray-600">Don't have an account?</p>
          <button type="button"
            onClick={() => router.push("/signup")}
            className="text-blue-600 underline mt-2"
          >
            Sign Up
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
