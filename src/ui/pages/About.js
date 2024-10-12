import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/About.css";
import MemberProfile from "../components/MemberProfile";
import Testimonial from "../components/Testimonial";
import ExpandableDialog from "../components/ExpandableDialog";

export default function About() {
  const { section } = useParams(); // Capture the section name from the URL

  const [currentSlide, setCurrentSlide] = useState(0);
  const membersPerSlide = 10;

  const handleNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(memberData.length / membersPerSlide)
    ); // Increment slide index
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(memberData.length / membersPerSlide)) %
        Math.ceil(memberData.length / membersPerSlide)
    ); // Decrement and loop to the end if at the start
  };

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`); // Adjusted to use className or id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  const memberData = [
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha 5",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
    {
      name: "Shivrajit Kushwaha 10",
      designation: "Technical Head",
      image: "/images/Shiv.jpg",
      linkedin:
        "https://www.linkedin.com/in/shivrajit-kushwaha-595494319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/shivmourya20",
      email: "shivmouryacse@gmail.com",
      facebook: "",
    },
  ];

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
            Dignissimos hic cumque praesentium fuga libero eaque consequuntur
            enim vero maxime, illum, labore possimus ipsam ipsa porro? Commodi
            maiores sint harum eius? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dignissimos hic cumque praesentium fuga libero
            eaque consequuntur enim vero maxime, illum, labore possimus ipsam
            ipsa porro? Commodi maiores sint harum eius? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Dignissimos hic cumque
            praesentium fuga libero eaque consequuntur enim vero maxime, illum,
            labore possimus ipsam ipsa porro? Commodi maiores sint harum eius?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos hic cumque praesentium fuga libero eaque consequuntur
            enim vero maxime, illum, labore possimus ipsam ipsa porro? Commodi
            maiores sint harum eius? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dignissimos hic cumque praesentium fuga libero
            eaque consequuntur enim vero maxime, illum, labore possimus ipsam
            ipsa porro? Commodi maiores sint harum eius?
          </h2>
        </div>
      </section>

      <section className="about-us-mission-section mission">
        <div className="mission-section-heading">
          <h1>Our Mission</h1>
        </div>
        <div className="mission-box">
          <div className="mission-logo">
            <img
              src="/images/backgrounds/abstract-bubbles-background-with-gradient-line-and-blue-color-good-for-background-banner-or-layout-vector.jpg"
              alt=""
            />
          </div>
          <div className="mission-details">
            <div className="mission-details-heading">
              <div className="verticle-line"></div>
              <h2>Igniting Entrepreneurial Spirit:</h2>
            </div>
            <b>
              Empower students to develop innovative ideas into viable startups
              by providing mentorship, resources, and real-world industry
              connections.
            </b>
          </div>
        </div>
        <div className="mission-box">
          <div className="mission-logo">
            <img
              src="/images/backgrounds/abstract-bubbles-background-with-gradient-line-and-blue-color-good-for-background-banner-or-layout-vector.jpg"
              alt=""
            />
          </div>
          <div className="mission-details">
            <div className="mission-details-heading">
              <div className="verticle-line"></div>
              <h2>Inclusive and Sustainable Growth:</h2>
            </div>
            <b>
              Promote diverse entrepreneurship while encouraging the creation of
              ethical, sustainable businesses that contribute to the community
              and the economy.
            </b>
          </div>
        </div>
        <div className="mission-box">
          <div className="mission-logo">
            <img
              src="/images/backgrounds/abstract-bubbles-background-with-gradient-line-and-blue-color-good-for-background-banner-or-layout-vector.jpg"
              alt=""
            />
          </div>
          <div className="mission-details">
            <div className="mission-details-heading">
              <div className="verticle-line"></div>
              <h2>Bridging Academia and Innovation:</h2>
            </div>
            <b>
              Create a dynamic platform where academic knowledge meets practical
              entrepreneurship, fostering a culture of problem-solving and
              creative thinking.
            </b>
          </div>
        </div>
      </section>

      <section className="about-us-vision-section"></section>

      <section className="about-us-support-section"></section>

      <section className="about-us-journey-section"></section>

      <section className="about-us-gallery-section"></section>

      <section className="about-us-team-section team">
        <div className="team-section-heading">
          <span style={{ color: "#004699" }}>Faces</span>
          <span>Behind The Cell</span>
        </div>
        <div className="team-slider-wrapper">
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
        </div>
      </section>

      <section className="about-us-testimonial-section">
        <h1>Testimonial</h1>
        <div className="testimonial-slider">
          <Testimonial />
        </div>
      </section>

      <section className="about-us-help-section faqs">
        <div className="help-section-details">
          <h1 style={{color:'white'}}>FAQs</h1>
        </div>
        <div className="faq-menu">
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
          <ExpandableDialog />
        </div>
      </section>
    </div>
  );
}
