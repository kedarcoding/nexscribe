"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("authUser");
      const storedToken = localStorage.getItem("token");

      if (storedUser) {
        setAuthUser(JSON.parse(storedUser));
      }

      if (storedToken) {
        setToken(storedToken);
      }
    } catch (error) {
      console.error("Failed to parse auth data from localStorage:", error);
      localStorage.removeItem("authUser");
      localStorage.removeItem("token");
      setAuthUser(null);
      setToken(null);
    }
  }, []);

  const setAuthData = (token, user) => {
    setAuthUser(user);
    setToken(token);

    localStorage.setItem("authUser", JSON.stringify(user));
    localStorage.setItem("token", token);

    // Optional cookies
    document.cookie = `authToken=${token}; path=/; max-age=3600`;
    document.cookie = `userRole=${user.role}; path=/; max-age=3600`;
  };

  const login = (token, user) => {
    setAuthData(token, user);
    router.push("/profile");
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");

    document.cookie = "authToken=; path=/; max-age=0";
    document.cookie = "userRole=; path=/; max-age=0";

    setAuthUser(null);
    setToken(null);
    router.push("/login");
  };

  const setUser = (user) => {
    setAuthUser(user);
    localStorage.setItem("authUser", JSON.stringify(user));
  };

  return (
    <AuthContext.Provider value={{ authUser, token, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
