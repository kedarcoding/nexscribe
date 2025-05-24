"use client"; 
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    const storedToken = localStorage.getItem("token");

    if (storedUser) setAuthUser(JSON.parse(storedUser));
    if (storedToken) setToken(JSON.parse(storedToken));
  }, []);

  const setAuthDataInCookies = (token, user) => {
    // Store user and token in localStorage
    localStorage.setItem("authUser", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));

    // Store the token in cookies for server-side access
    document.cookie = `authToken=${token}; path=/; max-age=3600`; // 1 hour expiry
    document.cookie = `userRole=${user.role}; path=/; max-age=3600`; // Store user role in cookie
  };

  const login = (token, user) => {
    setAuthDataInCookies(token, user);
    setAuthUser(user);
    setToken(token);
    router.push("/profile");
  };

  const logout = () => {
    // Clear both localStorage and cookies
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    document.cookie = "authToken=; path=/; max-age=0"; // Remove token cookie
    document.cookie = "userRole=; path=/; max-age=0"; // Remove role cookie

    setAuthUser(null);
    setToken(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authUser, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
