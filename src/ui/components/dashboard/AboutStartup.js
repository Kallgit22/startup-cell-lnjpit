import React from "react";
import "../dashboard/styles/AboutStartup.css";


const AboutStartup = () => {
  return (
    <div className="about-startup-container">
      <h1>About Startup</h1>

      <div className="content">
        <div className="steps">
          <div className="step">
            <div className="box">
            <h2>Steps</h2>
            </div>
          </div>
          <ul>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Market Research
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Business Plan
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Build a Team
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Product Development
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Legal & Financial Setup
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Ideation
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Funding
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Launch
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Growth & Scaling
              </span>
            </li>
            <li>
              <span target="_blank" rel="noopener noreferrer">
                Sustain & Adapt
              </span>
            </li>
          </ul>
        </div>
        <div className="image-explore">
          <div className="explore-section">
            <button className="explore-button">Explore →</button>
          </div>
          <div className="startup-info-card-section">
            <div className="startup-info-cards">
              <div className="card">
               
                <h3>Ideation</h3>
              </div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStartup;
