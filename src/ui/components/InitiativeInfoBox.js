import React from "react";
import "../styles/InitiativeInfoBox.css";

export default function InitiativeInfoBox({data}) {
  return (
    <div className="info-box">
      <div className="info-logo">
        <img src="/images/icons/startup.png" alt="" />
      </div>
     <div className="info-content">
        <span>{data.title}</span>
     <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        harum vel quia voluptatum dolor a tempora esse. Omnis ullam maxime
        debitis? Dolorum facilis magnam officia, ab quaerat facere illum dolor.
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        harum vel quia voluptatum dolor a tempora esse. Omnis ullam maxime
        
      </p>
     </div>
    </div>
  );
}