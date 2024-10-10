import React from "react";
import PropTypes from "prop-types";
import "../styles/MemberProfile.css";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MemberProfile({ data }) {
  return (
    <div className="member-profile-wrapper">
      <img src={data.image || '/images/Surbhi-Singh.jpg'} alt={data.name || "Member Profile"} />
      <div className="member-details">
        <span style={{ fontSize: "18px" }}>{data.name}</span>
        <span>{data.designation}</span>
      </div>
      <div className="social-links">
        {data.linkedin && (
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" style={{ width: "32px", height: "32px" }} />
          </a>
        )}
        {data.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" style={{ width: "32px", height: "32px" }} />
          </a>
        )}
        {data.email && (
          <a href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer">
            <MdEmail className="social-icon" style={{ width: "32px", height: "32px" }} />
          </a>
        )}
        {data.facebook && (
          <a href={data.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare className="social-icon" style={{ width: "32px", height: "32px" }} />
          </a>
        )}
      </div>
    </div>
  );
}

// Adding PropTypes for type checking
MemberProfile.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    designation: PropTypes.string,
    image: PropTypes.string,
    linkedin: PropTypes.string,
    instagram: PropTypes.string,
    email: PropTypes.string,
    facebook: PropTypes.string,
  }),
};

// Adding defaultProps for default values
MemberProfile.defaultProps = {
  data: {
    name: "Unknown Member",
    designation: "Designation",
    image: "/images/profile.png",
    linkedin: "",
    instagram: "",
    email: "",
    facebook: "",
  },
};

