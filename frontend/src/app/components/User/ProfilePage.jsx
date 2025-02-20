"use client";

import { useEffect, useState } from "react";
import axios from "axios"; // ✅ Import axios
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const { authUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.push("/login");
      return; // ✅ Prevent further execution
    }
    setProfile(authUser);
  }, [authUser, router]); // ✅ Run when authUser changes

  // if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700">Profile</h2>
      <div className="mt-4 space-y-6">
        <p><span className="font-medium text-gray-600">Name:</span> {profile?.name || "N/A"}</p>
        <p><span className="font-medium text-gray-600">Email:</span> {profile?.email || "N/A"}</p>
        <p><span className="font-medium text-gray-600">Bio:</span> {profile?.profile?.bio || "Not provided"}</p>
        <p><span className="font-medium text-gray-600">Gender:</span> {profile?.profile?.gender || "Not specified"}</p>
        <p><span className="font-medium text-gray-600">DOB:</span> {profile?.profile?.dob || "Not set"}</p>
      </div>
    </div>
  );
}
