import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for authentication
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const getUserData = async (token) => {
    try {
      axios
        .get(
          "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setUser(response.data.user);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to check token validity
  const verifyToken = async (token) => {
    try {
      const response = await fetch(
        "https://api.startupcelllnjpitchapra.in/wp-json/jwt-auth/v1/token/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setIsLoggedIn(true);
        getUserData(token);
      } else {
        throw new Error("Token verification failed");
      }
    } catch (error) {
      console.error("Token verification failed:", error);
      setUser(null); // Clear user data on error
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      verifyToken(token);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
