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
                <p>
                  <strong>Ideation</strong> is the creative process of
                  generating, developing, and refining new ideas. It involves
                  brainstorming, exploring possibilities, and shaping concepts
                  into workable solutions. In business, ideation is crucial for
                  innovation, product development, and problem-solving. It helps
                  companies stay competitive by encouraging fresh thinking and
                  new approaches.
                </p>
              </div>
              <div className="card">
                <h3>Prototyping</h3>
                <p>
                  <strong>Prototyping</strong> is the process of creating a
                  preliminary model or version of a product to test and refine
                  ideas before full-scale production. It allows businesses to
                  visualize, evaluate, and iterate on their concepts, ensuring
                  they meet customer needs and function as intended.
                </p>
              </div>
              <div className="card">
                <h3>Working Model</h3>
                <p>
                  A <strong>Working Model</strong> is a functional version of a
                  product or system that demonstrates how it operates in
                  real-world conditions. Unlike a prototype, which might only
                  showcase certain features or design aspects, a working model
                  is closer to the final product and shows how different parts
                  interact and perform together.
                </p>
              </div>
              <div className="card">
                <h3>Funding</h3>
                <p>
                  <strong>Funding</strong> refers to the financial resources provided to support
                  the growth and development of a business or project. It can
                  come from various sources, such as investors, loans, grants,
                  or personal savings. Funding is essential for starting new
                  ventures, expanding operations, or launching new products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStartup;
