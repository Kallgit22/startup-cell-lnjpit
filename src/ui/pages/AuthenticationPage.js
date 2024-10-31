// AuthenticationPage.js
import React, { useEffect, useState } from "react";
import "./styles/AuthenticationPage.css";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegistrationForm";
import ProgressDialog from "../components/ProgressDialog";
import { useSnackbar } from "../../context/SnackbarProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const AuthenticationPage = () => {
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(false);
  const { showSnackbar } = useSnackbar();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/user-profile")
    }
  }, []);

  const loginLink = () => {
    setAction("");
  };
  const registerLink = () => {
    setAction("active");
  };

  const handleLogin = (data) => {
    try {
      setLoading(true);
      axios
        .post(
          "https://api.startupcelllnjpitchapra.in/wp-json/jwt-auth/v1/token",
          data
        )
        .then((response) => {
          setLoading(false);
          showSnackbar("Login Successfull", "success");
          console.log(response.data);
          localStorage.setItem("userData", response.data);
          localStorage.setItem("authToken", response.data.token);
          navigate("/user-profile");
        })
        .catch((error) => {
          setLoading(false);
          showSnackbar("Network Error", "error");
        });
    } catch (error) {
      setLoading(false);
      showSnackbar("Uknown Error, Try again", "error");
    }
  };

  const handleRegister = (data) => {
    try {
      setLoading(true);
      axios
        .post(
          "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/register",
          data
        )
        .then((response) => {
          setLoading(false);
          showSnackbar("Successfully Registered", "success");
          console.log(response);
        })
        .catch((error) => {
          setLoading(false);
          showSnackbar("Network Error", "error");
          console.log(error);
        });
    } catch (error) {
      setLoading(false);
      showSnackbar("Unknown Error, Try again", "error");
    }
  };

  return (
    <div className="authentication-page">
      <div className="authentication-page-top">
        <div className={`authentication-form-wrapper ${action}`}>
          <div className="form-box login">
            <h1>Login</h1>
            <LoginForm
              userData={(data) => {
                handleLogin(data);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                boxSizing: "border-box",
                padding: "5px",
                marginTop: "5px",
              }}
            >
              <a
                style={{
                  fontSize: "14px",
                  fontWeight: "normal",
                }}
                href="#forgot"
              >
                Forgot Credential?
              </a>
            </div>
            <p>
              Don't have an account?{" "}
              <a href="#register" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
          <div className="form-box register">
            <h1>Register</h1>
            <RegisterForm
              userData={(data) => {
                handleRegister(data);
              }}
            />
            <p>
              Already have an account?{" "}
              <a href="#login" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
      {loading && <ProgressDialog />} {/* Show ProgressDialog when loading */}
    </div>
  );
};

export default AuthenticationPage;
