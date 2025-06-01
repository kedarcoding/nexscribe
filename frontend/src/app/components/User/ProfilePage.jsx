"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { put } from "@/services/api";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [editable, setEditable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    gender: "",
    dob: "",
  });

  const { authUser, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.push("/login");
      return;
    }

    setProfile(authUser);

    setFormData({
      name: authUser?.name || "",
      email: authUser?.email || "",
      bio: authUser?.profile?.bio || "",
      gender: authUser?.profile?.gender || "",
      dob: authUser?.profile?.dob || "",
    });
  }, [authUser, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const res = await put("/profile/update", formData);

      const updatedUser = {
        ...authUser,
        name: formData.name,
        email: formData.email,
        profile: {
          ...authUser.profile,
          bio: formData.bio,
          gender: formData.gender,
          dob: formData.dob,
        },
      };

      setProfile(updatedUser);
      setUser(updatedUser); // ✅ updates localStorage and context state
      setEditable(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Something went wrong while updating your profile.");
    }
  };

  if (!profile) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg border border-green-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Your Profile</h2>

      <div className="space-y-5">
        <InputField label="Name" name="name" value={formData.name} editable={editable} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} editable={editable} onChange={handleChange} />
        <InputField label="Bio" name="bio" value={formData.bio} editable={editable} onChange={handleChange} />
        <InputField label="Gender" name="gender" value={formData.gender} editable={editable} onChange={handleChange} />
        <InputField label="Date of Birth" name="dob" value={formData.dob} editable={editable} onChange={handleChange} type="date" />
      </div>

      <div className="mt-8 flex gap-3">
        {editable ? (
          <>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={() => setEditable(false)}
              className="px-5 py-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditable(true)}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}

function InputField({ label, name, value, editable, onChange, type = "text" }) {
  return (
    <div>
      <label className="block font-medium text-gray-700 mb-1">{label}:</label>
      {editable ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-300"
        />
      ) : (
        <p className="text-gray-900">{value || "N/A"}</p>
      )}
    </div>
  );
}
