import React from "react";
import "./styles/UniversalCustomDialog.css"; // Add your styles here

const UniversalCustomDialog = ({ open, onClose, title, content }) => {
  if (!open) return null;

  return (
    <div className="universal-dialog-overlay">
      <div className="universal-dialog-content">
        <h3>{title}</h3>
        <div className="universal-dialog-body">
          {content} {/* Render any type of content here */}
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UniversalCustomDialog;
