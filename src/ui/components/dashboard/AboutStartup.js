import React from 'react';
import '../dashboard/styles/AboutStartup.css'; 

const AboutStartup = () => {
  return (
    <div className="about-startup-container">
      <h1>About Startup</h1>
      
      <div className="content">
        <div className="steps">
          <div className='step'>
            <div className='box'></div>
          <h2>Steps</h2>

          </div>
          
          <ul>
          
          <li><a target="_blank" rel="noopener noreferrer">Market Research</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Business Plan</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Build a Team</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Product Development</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Legal & Financial Setup</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Ideation</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Funding</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Launch</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Growth & Scaling</a></li>
          <li><a target="_blank" rel="noopener noreferrer">Sustain & Adapt</a></li>
          </ul>
        </div>
        <div className="image-explore">
        <div className="explore-section">
          <button className="explore-button">Explore →</button>
        </div>
        <div className="image-section">
        <div className="images">
          <div className="image">

          </div>
          <div className='image'>
            
            

          </div>
          <div className='image'>

          </div>
          <div className='image'>

          </div>

        </div>
      </div>

        </div>


        
      </div>
      
    </div>
  );
};

export default AboutStartup;
