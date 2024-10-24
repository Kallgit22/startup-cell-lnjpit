import React, { useState, useEffect } from "react";
import "../dashboard/styles/Slider.css";

const Slider = ({ posters, notices, onclickExplore }) => {
  const [mainPoster, setMainPoster] = useState(posters[0]);
  const [activeIndex, setActiveIndex] = useState(0);

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
        {notices &&
          notices.map((notice, index) => (
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={notice.url}
                className="notice"
                target="_blank"
                rel="noreferrer"
              >
                {notice.notification}
              </a>
              {index < notices.length - 1 ? (
                <div
                  style={{
                    width: "1.5px",
                    height: "100%",
                    backgroundColor: "black",
                    rotate: "20deg",
                  }}
                ></div>
              ) : (
                ""
              )}
            </div>
          ))}
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

      <button className="explore-button" onClick={onclickExplore}>
        Explore
      </button>
    </div>
  );
};

export default Slider;
