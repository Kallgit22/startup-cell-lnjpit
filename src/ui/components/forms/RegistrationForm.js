import React, { useState } from "react";
import "./styles/RegistrationForm.css";
import { FaUser, FaLock, FaIdCard, FaUnlock } from "react-icons/fa";

const RegistrationForm = ({ userData }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "Subscriber",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const generateRandomUsername = () => {
      const date = new Date();
      const formattedDate = 
        date.getFullYear().toString() +
        (date.getMonth() + 1).toString().padStart(2, '0') +
        date.getDate().toString().padStart(2, '0');
  
      const randomDigits = Math.floor(100000 + Math.random() * 900000).toString();
  
      return formattedDate + randomDigits; 
    };
  
    const username = generateRandomUsername(); 
    const formData = new FormData();
    formData.append("username", username);
    formData.append("display_name", `${user.firstname} ${user.lastname}`);
    formData.append("first_name", user.firstname);
    formData.append("user_email", user.email);
    formData.append("password", user.password);
    formData.append("roles", user.role);
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
          name="firstname"
          onChange={handleChange}
          placeholder="First Name"
        />
        <FaIdCard className="icon" />
      </div>
      <div className="input-box">
        <input
          type="text"
          name="lastname"
          onChange={handleChange}
          placeholder="Last Name"
        />
        <FaIdCard className="icon" />
      </div>
      <div className="input-box">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <FaUser className="icon" />
      </div>

      <div className="input-box">
        <input
          type={passwordVisible ? "text" : "password"} // Toggle between text and password
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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
