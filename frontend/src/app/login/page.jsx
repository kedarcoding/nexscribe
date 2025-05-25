"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { token, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  // Load remembered credentials
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    const rememberFlag = localStorage.getItem("rememberMe");

    if (rememberFlag === "true") {
      setEmail(savedEmail || "");
      setPassword(savedPassword || "");
      setRememberMe(true);
    }
  }, []);

  // Redirect if already logged in
  useEffect(() => {
    if (token) {
      router.replace("/profile");
    }
  }, [token, router]);

  if (token) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      // Store credentials if "Remember Me" is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password); // ⚠️ Not secure — avoid in real apps
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
        localStorage.removeItem("rememberMe");
      }

      login(token, user);
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

          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            Remember Me
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <button
              type="button"
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
