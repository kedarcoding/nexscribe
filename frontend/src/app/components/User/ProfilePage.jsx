"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token"); // Assuming token is stored
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700">Profile</h2>
      <div className="mt-4 space-y-3">
        <p><span className="font-medium text-gray-600">Name:</span> {profile?.user?.name}</p>
        <p><span className="font-medium text-gray-600">Email:</span> {profile?.user?.email}</p>
        <p><span className="font-medium text-gray-600">Bio:</span> {profile?.bio || "Not provided"}</p>
        <p><span className="font-medium text-gray-600">Gender:</span> {profile?.gender || "Not specified"}</p>
        <p><span className="font-medium text-gray-600">DOB:</span> {profile?.dob || "Not set"}</p>
        <p><span className="font-medium text-gray-600">Profession:</span> {profile?.profession || "Not specified"}</p>
      </div>
    </div>
  );
}
