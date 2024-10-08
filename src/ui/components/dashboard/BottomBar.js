import React from "react";
import "../dashboard/styles/BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="section-wrapper">
        <div className="section">
          <h4>Important Links</h4>
          <ul>
            <li>
              <a
                href="https://aim.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AIC
              </a>
            </li>
            <li>
              <a
                href="https://www.startupindia.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Startup India
              </a>
            </li>
            <li>
              <a
                href="https://www.startupbihar.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Startup Bihar
              </a>
            </li>
            <li>
              <a
                href="https://www.msme.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ministry of Small Industry
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4>Registration Links</h4>
          <ul>
            <li>
              <a
                href="/idea-registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                Idea Registration
              </a>
            </li>
            <li>
              <a
                href="/about-idea-registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Idea Registration
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4>Visits Also</h4>
          <ul>
            <li>
              <a
                href="https://incubationcell.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Incubation Cell
              </a>
            </li>
            <li>
              <a
                href="https://www.startup.karnataka.gov.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Startup Karnataka
              </a>
            </li>
          </ul>
        </div>

        <div className="section">
          <h4>Social Links</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
