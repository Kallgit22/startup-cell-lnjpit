import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./styles/ProfilePage.css"; // Importing the CSS file

export default function ProfilePage() {
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/authentication");
    }
  }, [isLoggedIn,navigate]);

  return (
    <div className="profile-page">
      {user && (
        <div className="profile-container">
          <h1 className="profile-title">
            Welcome <br />
            {user.name}
          </h1>
          <div className="profile-info">
            <p className="profile-detail">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="profile-detail">
              <strong>User Name:</strong> {user.username}
            </p>
            <p className="profile-detail">
              <strong>Email:</strong> {user.email}
            </p>
            {/* Add more user details as needed */}
          </div>
          <div className="profile-actions">
            <button className="profile-button">Update Profile</button>
            <button className="profile-button">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}
