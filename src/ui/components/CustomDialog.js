import React from "react";
import "./styles/CustomDialog.css"; // You can add styles here

const CustomDialog = ({ open, onClose, content }) => {
  if (!open) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        {content &&
          content.map((data, index) => (
            <div key={index}>
              <p>
                <strong>{data.title}</strong>
              </p>
              <p>{data.content}</p>
            </div>
          ))}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomDialog;
