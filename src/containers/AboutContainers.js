import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMemberList, getTestimonials } from "../apis/AppContentAPI";

export default function AboutContainers({ section }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [memberData, setMemberData] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const membersPerSlide = 10;

  useEffect(()=>{
    try {
      Promise.all([getMemberList(),getTestimonials()]).then(function (results) {
        const memberList = results[0].data;
        const testimonials = results[1].data;
        setMemberData(memberList);
        setTestimonials(testimonials);
      });
    } catch (error) {
      console.log(error);
    }
  },[]);


  const handleNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(memberData.length / membersPerSlide)
    );
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(memberData.length / membersPerSlide)) %
        Math.ceil(memberData.length / membersPerSlide)
    );
  };

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return {
    currentSlide,
    membersPerSlide,
    memberData,
    testimonials,
    handleNext,
    handlePrev,
  };
}

// Prop validation for future-proofing
AboutContainers.propTypes = {
  section: PropTypes.string, // expecting a string that represents the section class name
};
