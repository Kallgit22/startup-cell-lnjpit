import React, { useState } from "react";
import "./styles/RegistrationForm.css";
import { FaUser, FaLock, FaUnlock } from "react-icons/fa";

export default function LoginForm({ userData }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username",credentials.username);
    formData.append("password",credentials.password);
    userData(formData);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="input-box">
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <FaUser className="icon" />
      </div>
      <div className="input-box">
        <input
          type={passwordVisible ? "text" : "password"}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <span onClick={togglePasswordVisibility} className="icon-toggle">
          {passwordVisible ? (
            <FaUnlock className="icon" />
          ) : (
            <FaLock className="icon" />
          )}
        </span>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
