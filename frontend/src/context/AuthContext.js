// context/AuthContext.js
"use client"; 
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) setAuthUser(JSON.parse(storedUser));
  }, []);

  const login = (user) => {
    localStorage.setItem("authUser", JSON.stringify(user));
    setAuthUser(user);
    router.push("/profile");
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    setAuthUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
