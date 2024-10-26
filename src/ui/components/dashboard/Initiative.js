import React from "react";
import "../dashboard/styles/Initiative.css";
import { useNavigate } from "react-router-dom";

const Initiative = ({ data, className }) => {

  const navigate = useNavigate();
  const handleClick = (id)=>{
    navigate(`/initiative/${id}`)
  }
  return (
    <div className={className}>
      <h1 className="topic">Our Initiative</h1>

      <div className="paragraphs">
        <p>
          The Startup Cell, LNJPIIT Chapra has launched various initiatives and
          recurring programs to foster innovation
        </p>
        <p>
          and entrepreneurship among students. These efforts aim to build a
          vibrant startup ecosystem, empowering
        </p>
        <p>students to transform their ideas into successful ventures.</p>
      </div>

      <div className="smart-slider-wrapper">
        <div className="smart-slider">
          {data.map((initiative, index) => (
            <div key={index} className="smart-slide">
              <img
                src="/images/startup-poster.jpg"
                alt="Startup Internship Program"
              />
              <div className="overlay"></div>
              <h1>{initiative.title}</h1>
              <div className="slide-details">
                <b>
                {initiative.description}
                </b>
                <button onClick={()=>{handleClick(initiative.id)}}>Know More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Initiative;
