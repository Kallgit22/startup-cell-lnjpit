import React from "react";
import "../dashboard/styles/Mentors.css";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";

const Mentors = () => {
  const mentorData = [
    {
      name: "Abhishek Paswan",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/abhishek.jpg",
    },
    {
      name: "Lovely Singh",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/lovely.jpg",
    },
    {
      name: "Dr. Mithilesh Singh",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/Mithilesh-Singh.jpg",
    },
    {
      name: "Surbhi Singh",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/Surbhi-Singh.jpg",
    },
    {
      name: "Abhishek Paswan",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/abhishek.jpg",
    },
    {
      name: "Lovely Singh",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/lovely.jpg",
    },
    {
      name: "Dr. Mithilesh Singh",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/Mithilesh-Singh.jpg",
    },
    {
      name: "Surbhi Singh",
      socialLinks: { linkedIn: "", email: "", facebook: "", ionstagram: "" },
      image: "/images/Surbhi-Singh.jpg",
    },
  ];
  return (
    <div className="mentors-container">
      <h2>Our Mentors</h2>
      <div className="mentors-gallery">
        <div className="mentor-slider">
          {mentorData.map((mentor, index) => (
            <div key={index} className="mentor-slide">
              <img src={mentor.image} alt="Mentor 4" />
              <h4>{mentor.name}</h4>
              <div className="mentor-social-media-link">
                <SiInstagram className="mentor-social-media-icon" />
                <SiLinkedin className="mentor-social-media-icon" />
                <MdEmail className="mentor-social-media-icon-email" />
                <ImFacebook2 className="mentor-social-media-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
