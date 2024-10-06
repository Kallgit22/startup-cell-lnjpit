import React, { useState } from 'react';
import '../dashboard/styles/Slider.css';  

const Slider = () => {
 
  const [mainPoster, setMainPoster] = useState('/images/startup-poster.jpg');

  
  const posters = [
    '/images/startup-poster.jpg',
    '/images/startup-poster.jpg',
    '/images/startup-poster.jpg',
    '/images/startup-poster.jpg',
    '/images/startup-poster.jpg'
  ];

  
  const handlePosterClick = (poster) => {
    setMainPoster(poster);
  };

  return (
    <div className="app-container">
      
      <div className="notice-bar">
        <a href="https://link1.com" className="notice" target="_blank" rel="noreferrer">
          Upcoming Outreach program coming soon
        </a>
        <a href="https://link2.com" className="notice" target="_blank" rel="noreferrer">
          idea submission is live now
        </a>
      </div>

      
      <div className="main-poster">
        <img src={mainPoster} alt="Main Poster" className="main-poster-img" />
      </div>

      
      <div className="poster-slider">
        {posters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt={`Poster ${index + 1}`}
            className="small-poster"
            onClick={() => handlePosterClick(poster)}
          />
        ))}
      </div>

      
      <div className='explore'>
      <button className="explore-button">Explore</button>

      </div>
      
    </div>
  );
};

export default Slider;
