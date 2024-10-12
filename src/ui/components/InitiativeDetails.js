// InitiativeDetails.js
import React from "react";
import "../pages/styles/Initiative.css";

export default function InitiativeDetails({ details, title }) {
  return (
    <div className="initiative-details">
      <h1>{title}</h1>
      <section className="initiative-introduction">
        <h2>Introduction</h2>
        {Object.values(details.introduction).map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </section>

      {details.whoApply && Object.keys(details.whoApply).length > 0 && (
        <section className="initiative-whoApply">
          <h2>Who Can Apply</h2>
          {Object.values(details.whoApply).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </section>
      )}

      {details.howApply && Object.keys(details.howApply).length > 0 && (
        <section className="initiative-howApply">
          <h2>How to Apply</h2>
          {Object.values(details.howApply).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </section>
      )}

      {details.benifitImpact &&
        Object.keys(details.benifitImpact).length > 0 && (
          <section className="initiative-benefitImpact">
            <h2>Benefits and Impact</h2>
            {Object.values(details.benifitImpact).map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </section>
        )}
    </div>
  );
}
