import React, { useEffect, useRef, useState } from "react";
import "./styles/InitiativeDetailsPage.css";
import { useParams } from "react-router-dom";
import CustomVerticleStepper from "../components/CustomVerticleStepper";
import { getInitiative } from "../../apis/AppContentAPI";

export default function InitiativeDetailsPage() {
  const param = useParams();
  const [initiatives, setInitiatives] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const stepperRef = useRef(null);
  const [datas, setDatas] = useState([
    {
      title: "<p><strong>1. Step First</strong></p>",
      description: "<p>Instruction 1</p>",
    },
    {
      title: "<p><strong>2. Step Two</strong></p>",
      description: "<p>Instruction 2</p>",
    },
    {
      title: "<p><strong>3. Step Three</strong></p>",
      description: "<p>Instruction 3</p>",
    },
    {
      title: "<p><strong>4. Step Four</strong></p>",
      description: "<p>Instruction 4</p>",
    },
    {
      title: "<p><strong>5. Step Five</strong></p>",
      description: "<p>Instruction 5</p>",
    },
    {
      title: "<p><strong>6. Step Six</strong></p>",
      description: "<p>Instruction 6</p>",
    },
  ]);
  useEffect(() => {
    console.log(param.id);
    getInitiative(param.id)
      .then((response) => {
        console.log(response.data.initiatives);
        setInitiatives(response.data.initiatives);
        setDatas(response.data.initiatives.how_to_apply);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (stepperRef.current) {
        const rect = stepperRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (inView) {
          setIsVisible(true); // Expand when in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="initiative-details-banner-section"></div>
      {initiatives.about_initiative && (
        <div className="initiative-details-about-section">
          <div className="title-box elevation-3">
            <h1>
              About
              <br />
              Initiative
            </h1>
          </div>
          <div
            className="content-box"
            dangerouslySetInnerHTML={{ __html: initiatives.about_initiative }}
          ></div>
        </div>
      )}
      {initiatives.our_vision && (
        <div className="initiative-details-vision-section">
          <div className="vision-details-heading-box">
            <div className="verticle-bar-grad"></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3>Our</h3>
              <h1>Vision</h1>
            </div>
          </div>
          <div
            className="initiative-vision-details-box"
            dangerouslySetInnerHTML={{ __html: initiatives.our_vision }}
          ></div>
          <div className="vision-section-bottom-bar-design"></div>
        </div>
      )}
      {initiatives.for_whom && (
        <div className="initiative-details-forwhoom-section">
          <div className="title-box elevation-3"></div>
          <div
            className="content-box elevation-3"
            dangerouslySetInnerHTML={{ __html: initiatives.for_whom }}
          ></div>
        </div>
      )}
      {initiatives.guideline && (
        <div className="initiative-details-guideline-section">
          <div className="guidline-title-box">
            <h1>Guideline</h1>
          </div>
          <div
            className="content-box"
            dangerouslySetInnerHTML={{ __html: initiatives.guideline }}
          ></div>
        </div>
      )}
      <div className="initiative-details-apply-section">
        <div className="apply-section-heading"></div>
        <div className={`apply-section-steps`}>
          {datas &&
            datas.map((data, index) => (
              <CustomVerticleStepper
                data={data}
                isLast={index === datas.length - 1}
              />
            ))}
          <button>Apply Now</button>
        </div>
      </div>
      <div className="initiative-details-coordinators-section"></div>
      {initiatives.faqs && (
        <div className="initiative-details-faqs-section">
          <h1>FAQs</h1>
          <div
            className="faqs-content"
            dangerouslySetInnerHTML={{ __html: initiatives.faqs }}
          ></div>
        </div>
      )}
    </div>
  );
}
