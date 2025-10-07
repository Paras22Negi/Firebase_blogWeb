import React, { useEffect, useState, createContext } from "react";
import BlogHeader from "./Components/BlogHeader";

export const loginContext = createContext();

export default function MainRootLayout({ children }) {
  // Safe init from localStorage
  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("USERTOKEN") ?? "";
    } catch(err) {
      console.log("Failed to read token", err);
      return "";
    }
  });

  const obj = [token, setToken];

  useEffect(() => {
    try {
      localStorage.setItem("USERTOKEN", token ?? "");
    } catch(err) {
      console.log("Failed to save token", err);
    }
  }, [token]);

  return (
    <loginContext.Provider value={obj}>
      <BlogHeader />
      {children}
    </loginContext.Provider>
  );
}
