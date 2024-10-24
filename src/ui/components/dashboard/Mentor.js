import React, { useEffect, useState } from "react";
import "../dashboard/styles/Mentors.css";
import axios from "axios";

const Mentors = () => {
  const [mentorData, setMentorData] = useState(null);

  useEffect(()=>{
    axios.get("https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/mentors")
    .then((response)=>{
      console.log(response.data[0]);
      setMentorData(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
  return (
    <div className="mentors-container">
      <h2>Our Mentors</h2>
      <div className="mentors-gallery">
        <div className="mentor-slider">
          {mentorData && mentorData.map((mentor, index) => (
            <div key={index} className="mentor-slide">
              <img src={mentor.image_src} alt="Mentor 4" />
              <div className="mentor-details">
                <h4>{mentor.name}</h4>
                <span>{mentor.designation}</span>
                <div className="mentor-email">
                  <span>Email:</span>
                  <a href="mailto:shivmouryacse@gmail.com">
                    {mentor.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
