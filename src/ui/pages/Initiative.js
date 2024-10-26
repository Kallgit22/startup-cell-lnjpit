import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles/Initiative.css";
import InitiativeInfoBox from "../components/InitiativeInfoBox";
import InitiativeContainer from "../../containers/InitiativeContainer";

export default function Initiative() {
  const { section } = useParams();
  const navigation = useNavigate();

  const { initiatives } = InitiativeContainer();

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`); // Adjusted to use className or id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  const handleClick = (id) => {
    navigation(`/initiative/${id}`);
  };

  return (
    <div className="initiative-page">
      <section className="initiative-poster-section">
        <h1>
          Startup Cell LNJPIT
          <br />
          Initiatives
        </h1>
        <p>
          At <strong>Startup Cell LNJPIT</strong>, we aim to ignite the
          entrepreneurial spirit in students by providing the resources,
          guidance, and opportunities needed to turn ideas into reality. Our
          mission is to nurture creativity, foster innovation, and support
          startups at every stage of their journey, empowering the next
          generation of successful entrepreneurs.
        </p>
      </section>

      <section className="initiative-context-section impact">
        <h1>About Initiatives</h1>
        <p>
          At <strong>Startup Cell LNJPIT</strong>, our initiatives are focused
          on driving innovation and entrepreneurship among students. We offer a
          range of programs and resources aimed at developing skills, providing
          mentorship, and creating opportunities for young innovators. From
          hands-on workshops to startup competitions, our goal is to empower
          students to transform their ideas into thriving businesses and make a
          real-world impact.
        </p>
        <div className="about-initiative-container">
          <InitiativeInfoBox
            data={{
              title: "BOOST IDEA",
              content:
                "Join the Startup Cell to refine your business concept with expert mentorship. Experienced entrepreneurs will provide valuable feedback, helping you develop a solid business model and a compelling value proposition.",
            }}
          />
          <InitiativeInfoBox
            data={{
              title: "SCALE UP IDEA",
              content:
                "Access resources and workshops designed to help you scale your business. Network with other entrepreneurs and industry leaders, and participate in pitch events to gain exposure and insights for growth.",
            }}
          />
          <InitiativeInfoBox
            data={{
              title: "RAISE FUND",
              content:
                "While the Startup Cell doesn’t provide direct funding, it guides you in navigating funding opportunities. You'll learn how to prepare effective pitches and connect with platforms like Startup India and Startup Bihar to secure financial support for your startup.",
            }}
          />
        </div>
      </section>

      <section className="intiative-list-section program">
        <h1>Our Initiatives</h1>
        <div className="initiative-box-wrapper">
          {initiatives != null
            ? initiatives.map((data, index) => (
                <div key={index} className="initiative-box elevation-2">
                  <h4>{data.title}</h4>
                  <div className="initiative-box-details">
                    <p>{data.description}</p>
                    <button
                      onClick={() => {
                        handleClick(data.id);
                      }}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </section>
    </div>
  );
}
