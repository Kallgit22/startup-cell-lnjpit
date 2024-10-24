import React from "react";
import AboutContainers from "../../containers/AboutContainers";
import MemberProfile from "../components/MemberProfile";
import Testimonial from "../components/Testimonial";
import ExpandableDialog from "../components/ExpandableDialog";
import { useParams } from "react-router-dom";
import "./styles/About.css";

export default function About() {
  const { section } = useParams();

  const { currentSlide, memberData,testimonials, handleNext, handlePrev } = AboutContainers({
    section,
  });

  return (
    <div className="about-us-page">
      <section className="about-us-main-poster-section">
        <div className="poster-heading">
          <div className="verticle-line"></div>
          <h1>Our Essence</h1>
        </div>
      </section>

      <section className="about-us-startup-cell-section">
        <h1>What Drive Us</h1>
        <div className="about-us-details">
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            {/* Replace with real content */}
          </h2>
        </div>
      </section>

      <section className="about-us-mission-section mission">
        {/* Mission section here */}
      </section>

      <section className="about-us-team-section team">
        <div className="team-section-heading">
          <span style={{ color: "#004699" }}>Faces</span>
          <span>Behind The Cell</span>
        </div>
        <div className="team-slider-wrapper">
          {memberData && (
            <div className="slider-container">
              <img
                className="arrow-icon-left"
                src="/images/icons/right-arrow.png"
                alt="Previous"
                onClick={handlePrev}
              />
              <div className="slide-container">
                {memberData.map((member, index) => (
                  <MemberProfile data={member} key={index} />
                ))}
              </div>
              <img
                className="arrow-icon-right"
                src="/images/icons/right-arrow.png"
                alt="Next"
                onClick={handleNext}
              />
            </div>
          )}
        </div>
      </section>

      <section className="about-us-testimonial-section">
        <h1>Testimonial</h1>
        <div className="testimonial-slider">
          {testimonials && testimonials.map((testimonial, index)=>(
            <Testimonial data={testimonial}/>
          ))}
        </div>
      </section>

      <section className="about-us-help-section faqs">
        <div className="help-section-details">
          <h1 style={{ color: "white" }}>FAQs</h1>
        </div>
        <div className="faq-menu">
          <ExpandableDialog />
          {/* Add more FAQs here */}
        </div>
      </section>
    </div>
  );
}
