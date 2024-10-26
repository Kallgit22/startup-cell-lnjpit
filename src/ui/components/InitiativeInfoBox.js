import React from "react";
import "../styles/InitiativeInfoBox.css";

export default function InitiativeInfoBox({ data }) {
  return (
    <div className="info-box">
      <div className="info-logo">
        <img src="/images/icons/startup.png" alt="" />
      </div>
      <div className="info-content">
        <span>{data.title}</span>
        <p>
          {data.content}
        </p>
      </div>
    </div>
  );
}
