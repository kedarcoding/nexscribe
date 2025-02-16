"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext"; 
import { useRouter } from "next/navigation";
export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const { authUser, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.push("/login");
    }
  }, [authUser, router]);
    // const fetchProfile = async () => {
    //   try {
    //     const token = localStorage.getItem("token"); // Assuming token is stored
        // const response = await axios.get("http://localhost:8000/api/profile", {
        //   headers: { Authorization: `Bearer ${token}` },
        // });
        // setProfile(response.data);
      // } catch (error) {
      //   console.error("Error fetching profile:", error);
      // } finally {
      //   setLoading(false);
      // }
    // };
    // fetchProfile();
  // }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700">Profile</h2>
      <div className="mt-4 space-y-6">
        <p><span className="font-medium text-gray-600">Name:</span> {authUser?.user?.name}</p>
        <p><span className="font-medium text-gray-600">Email:</span> {authUser?.user?.email}</p>
        <p><span className="font-medium text-gray-600">Bio:</span> {authUser?.user?.profile?.bio || "Not provided"}</p>
        <p><span className="font-medium text-gray-600">Gender:</span> {authUser?.user?.profile?.gender || "Not specified"}</p>
        <p><span className="font-medium text-gray-600">DOB:</span> {authUser?.user?.profile?.dob || "Not set"}</p>
      </div>
    </div>
  );
}
