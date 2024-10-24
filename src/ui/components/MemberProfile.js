import React from "react";
import PropTypes from "prop-types";
import "../styles/MemberProfile.css";
import { FaLinkedin, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MemberProfile({ data }) {
  return (
    <div className="member-profile-wrapper">
      <img
        className="member-image"
        src={data.image_src}
        alt={data.name || "Member Profile"}
      />
      <div className="member-details">
        <span style={{ fontSize: "13px" }}>{data.name}</span>
        <span>{data.designation}</span>
      </div>
      <div className="social-links">
        {data.linked_in && (
          <a href={data.linked_in} target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              className="social-icon"
              style={{ width: "22px", height: "22px" }}
            />
          </a>
        )}
        {data.instagram && (
          <a href={data.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram
              className="social-icon"
              style={{ width: "22px", height: "22px" }}
            />
          </a>
        )}
        {data.email && (
          <a
            href={`mailto:${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail
              className="social-icon"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        )}
        {data.facebook && (
          <a href={data.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare
              className="social-icon"
              style={{ width: "22px", height: "22px" }}
            />
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

