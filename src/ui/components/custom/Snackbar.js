// Snackbar.js
import React from "react";
import "./styles/SnackBar.css";

const Snackbar = ({ message, type }) => {
  return (
    <div className={`snackbar ${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Snackbar;
