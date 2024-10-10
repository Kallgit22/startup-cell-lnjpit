import React, { useState } from "react";
import "../styles/ExpandableDialog.css";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";

export default function ExpandableDialog() {
  const [click, setClick] = useState(false);

  const onClickHandle = () => {
    setClick(!click);
  };
  return (
    <div className="expandable-dialog-wrapper" onClick={onClickHandle}>
      <div className="dialog-option">
        <span>What is Startup</span>
        {click ? (
          <FaArrowCircleUp
            className="dialog-option-icon"
            onClick={onClickHandle}
          />
        ) : (
          <FaArrowCircleDown
            className="dialog-option-icon"
            onClick={onClickHandle}
          />
        )}
      </div>
      <div className={`dialog-content ${click ? "dialog-show" : ""}`}>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt
          sed repellat saepe omnis, officiis laborum cupiditate eius nisi quod!
          Deleniti nemo provident iste repellat tenetur voluptatibus odit
          voluptate et!
        </h3>
      </div>
    </div>
  );
}
