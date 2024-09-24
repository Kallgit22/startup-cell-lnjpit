import React, { useState } from "react";
import "../styles/Header.css";

export default function Header() {
  const [number, setNumber] = useState("123456789")
  return (
    <div className="header-box">
      <div className="header-upper-box">
        <div className="my-container">
          <div className="tobar-left">
            <ul>
              <li className="logo-1">
                <a href="https://www.india.gov.in/">
                  <img
                    src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Gov%20of%20IND.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="logo-2">
                <a href="https://commerce.gov.in/">
                  <img
                    src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/MOCAI.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="tobar-right">
            <ul>
              <li>
                <p className="help-number">
                  <strong>Our Toll Free Number : </strong>
                  <a href="tel:1800115565">{number}</a>
                  <span>(10:00 AM to 05:30 PM)</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="my-container">
          <div className="midbar-left">
            <ul>
              <li className="startup-cell-logo">
                <a href="https://startupcelllnjpitchapra.in/">
                  <img
                    src="/images/startup-cell.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="logo-2">
                <a href="https://commerce.gov.in/">
                  <img
                    src="https://startup.bihar.gov.in/static/media/new_logo.efdd49a20c5fb7fe0b73.png"
                    alt=""
                  />
                </a>
              </li>
              <li className="logo-2">
                <a href="https://commerce.gov.in/">
                  <img
                    src="https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/Logo1.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="midbar-right"></div>
        </div>
      </div>
      <div className="header-nav-box"></div>
    </div>
  );
}
