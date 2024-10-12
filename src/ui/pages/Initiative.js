import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles/Initiative.css";
import InitiativeInfoBox from "../components/InitiativeInfoBox";
import InitiativeDetails from "../components/InitiativeDetails";

export default function Initiative() {
  const [activeTab, setActiveTab] = useState(0);


  const { section } = useParams();

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`); // Adjusted to use className or id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);


  const initiativeData = [
    {
      title: "Outreach Program",
      details: {
        introduction: {
          1: "Outreach introduction text...",
          2: "More introduction text...",
          3: "Further information...",
        },
        whoApply: {},
        howApply: {},
        benifitImpact: {
          1: "Benefit 1...",
          2: "Benefit 2...",
          3: "Benefit 3...",
        },
      },
    },
    {
      title: "Start Vyapar",
      details: {
        introduction: {
          1: "Vyapar introduction...",
          2: "More info about Vyapar...",
        },
        whoApply: {
          1: "Who can apply to Vyapar 1...",
          2: "Who can apply to Vyapar 2...",
        },
        howApply: {
          1: "How to apply 1...",
          2: "How to apply 2...",
        },
        benifitImpact: {
          1: "Vyapar benefit 1...",
          2: "Vyapar benefit 2...",
        },
      },
    },
    {
      title: "Startup Internship Yojna",
      details: {
        introduction: {
          1: "Internship Yojna introduction...",
          2: "More introduction...",
        },
        whoApply: {
          1: "Who can apply for Internship...",
        },
        howApply: {
          1: "How to apply for Internship 1...",
          2: "How to apply for Internship 2...",
        },
        benifitImpact: {
          1: "Internship Benefit 1...",
          2: "Internship Benefit 2...",
        },
      },
    },
  ];

  const [tabData, setTabData] = useState(initiativeData[0]);

  // Set tab data whenever activeTab changes
  useEffect(() => {
    setTabData(initiativeData[activeTab]);
  }, [activeTab]);

  return (
    <div className="initiative-page">
      <section className="initiative-poster-section">
        <h1>
          Startup Cell LNJPIT
          <br />
          Initiatives
        </h1>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt sed repellat saepe omnis, officiis laborum cupiditate eius nisi quod! Deleniti nemo provident iste repellat tenetur voluptatibus odit voluptate et!
        </h3>
      </section>

      <section className="initiative-context-section impact">
        <h1>About Initiatives</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus sed voluptatum fuga rem, quo, enim minima iste nobis illo debitis a cupiditate sint!
        </p>
        <div className="about-initiative-container">
          <InitiativeInfoBox data={{ title: "BOOST IDEA" }} />
          <InitiativeInfoBox data={{ title: "SCALE UP IDEA" }} />
          <InitiativeInfoBox data={{ title: "RAISE FUND" }} />
        </div>
      </section>

      <section className="initiative-tab-section program">
        <div className="tab-bar-container">
          {initiativeData.map((initiative, index) => (
            <React.Fragment key={index}>
              <div
                className={`tab-bar ${activeTab === index ? "tab-active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{initiative.title}</span>
              </div>
              {index < initiativeData.length - 1 && <div className="vertical-divider" style={{width:'3px',height:'auto',backgroundColor:'rgb(204, 226, 244)'}}></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="tab-content">
          <InitiativeDetails details={tabData.details} title={tabData.title} />
        </div>
      </section>
    </div>
  );
}
