// components/Navbar.js
"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; //

const Navbar = () => {
  const { authUser, logout } = useAuth();

  return (
    <nav className="fixed z-99 text-lg top-0 w-full bg-blue-600 p-4 flex justify-between items-center">
      <ul className="flex space-x-8 px-4">
        <li><Link href="/home" className="text-white hover:text-gray-400">Home</Link></li>
        <li><Link href="/insights" className="text-white hover:text-gray-400">Insights</Link></li>
        <li><Link href="/profile" className="text-white hover:text-gray-400">Profile</Link></li>
      </ul>

      <div className="relative right-20">
        {authUser ? (
          <div className="group relative">
            <img src={authUser.photo} alt="IMG" className="w-12 h-12 rounded-full cursor-pointer" />
            <div className="absolute right-0 mt-0.5 w-28 bg-white shadow-lg rounded-lg hidden group-hover:flex">
              <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link href="/login" className="text-white hover:text-gray-400">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
