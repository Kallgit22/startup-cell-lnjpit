import React, { useState, useEffect, useMemo } from "react";
import "../dashboard/styles/Slider.css";

const Slider = () => {
  const [mainPoster, setMainPoster] = useState("/images/startup-poster.jpg");
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoizing the posters array to avoid unnecessary re-renders
  const posters = useMemo(
    () => [
      "/images/startup-poster.jpg",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/Startup_Mahakumbh_PM_Narendra_Modi_ecosystem_1710915148775_1710915148910.webp",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/hashstudioz-at-startup-mahakumbh-expo.webp",
    ],
    []
  ); // Empty dependency array to ensure it only initializes once

  const handlePosterClick = (poster, index) => {
    setActiveIndex(index);
    setMainPoster(poster);
  };

  // Auto sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % posters.length; // Loop back to start
        setMainPoster(posters[nextIndex]); // Update main poster
        return nextIndex;
      });
    }, 3000); // Change poster every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [posters]); // Posters are now stable due to useMemo

  return (
    <div className="app-container">
      <div className="notice-bar">
        <a
          href="https://link1.com"
          className="notice"
          target="_blank"
          rel="noreferrer"
        >
          Upcoming Outreach program coming soon
        </a>
        <a
          href="https://link2.com"
          className="notice"
          target="_blank"
          rel="noreferrer"
        >
          Idea submission is live now
        </a>
      </div>

      <div className="main-poster">
        <img src={mainPoster} alt="Main Poster" />
      </div>

      <div className="poster-slider">
        {posters.map((poster, index) => (
          <img
            key={index}
            src={poster}
            alt={`Poster ${index + 1}`}
            className={`small-poster ${activeIndex === index ? "active" : ""}`}
            onClick={() => handlePosterClick(poster, index)}
          />
        ))}
      </div>

      <button className="explore-button">Explore</button>
    </div>
  );
};

export default Slider;
