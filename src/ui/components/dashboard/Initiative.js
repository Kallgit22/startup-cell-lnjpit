import React from "react";
import "../dashboard/styles/Initiative.css";

const Initiative = ({ data, className }) => {
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
          <div className="smart-slide">
            <img src="/images/startup-poster.jpg" alt="Outreach Program" />
            <div className="overlay"></div>
            <h1>Outreach Program</h1>
            <div className="slide-details">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis praesentium nihil nesciunt modi tempore, corrupti
                vitae necessitatibus ipsa quae deserunt, fuga itaque dicta animi
                odio perferendis. Corrupti, amet ipsum!
              </b>
              <button>Know More</button>
            </div>
          </div>
          <div className="smart-slide">
            <img src="/images/startup-poster.jpg" alt="Start Vyapar" />
            <div className="overlay"></div>
            <h1>Start Vyapar</h1>
            <div className="slide-details">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis praesentium nihil nesciunt modi tempore, corrupti
                vitae necessitatibus ipsa quae deserunt, fuga itaque dicta animi
                odio perferendis. Corrupti, amet ipsum!
              </b>
              <button>Know More</button>
            </div>
          </div>
          <div className="smart-slide">
            <img
              src="/images/startup-poster.jpg"
              alt="Startup Internship Program"
            />
            <div className="overlay"></div>
            <h1>Startup Internship Program</h1>
            <div className="slide-details">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis praesentium nihil nesciunt modi tempore, corrupti
                vitae necessitatibus ipsa quae deserunt, fuga itaque dicta animi
                odio perferendis. Corrupti, amet ipsum!
              </b>
              <button>Know More</button>
            </div>
          </div>
          <div className="smart-slide">
            <img
              src="/images/startup-poster.jpg"
              alt="Startup Internship Program"
            />
            <div className="overlay"></div>
            <h1>Startup Internship Program</h1>
            <div className="slide-details">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis praesentium nihil nesciunt modi tempore, corrupti
                vitae necessitatibus ipsa quae deserunt, fuga itaque dicta animi
                odio perferendis. Corrupti, amet ipsum!
              </b>
              <button>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
