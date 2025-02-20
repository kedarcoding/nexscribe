// context/AuthContext.js
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
    if (storedUser) setAuthUser(JSON.parse(storedUser));
    const token = localStorage.getItem("token");
    if (token) setToken(JSON.parse(token));

  }, []);

  const login = (token,user) => {
    localStorage.setItem("token",JSON.stringify(token));
    localStorage.setItem("authUser", JSON.stringify(user));
    setAuthUser(user);
    setToken(token);
    router.push("/profile");
  };

  const logout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    setAuthUser(null);
    setToken(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ authUser,token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
