import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMemberList, getTestimonials } from "../apis/AppContentAPI";
import { useSnackbar } from "../context/SnackbarProvider";

export default function AboutContainers({ section }) {
  const [memberData, setMemberData] = useState(null);
  const [sortedmemberData, setSortedMemberData] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (memberData != null) {
      const sortedData = memberData.sort((a, b) => {
        return parseInt(a.category) - parseInt(b.category);
      });

      setSortedMemberData(sortedData);
    }
  }, [memberData]);

  useEffect(() => {
    try {
      Promise.all([getMemberList(), getTestimonials()]).then(function (
        results
      ) {
        const memberList = results[0].data;
        const testimonials = results[1].data;
        setMemberData(memberList);
        setTestimonials(testimonials);
      }).catch((error)=>{
        showSnackbar("Network Error", "error");
      });
    } catch (error) {
      showSnackbar("Network Error", "error");
    }
  }, []);

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return {
    sortedmemberData,
    testimonials,
  };
}

// Prop validation for future-proofing
AboutContainers.propTypes = {
  section: PropTypes.string, // expecting a string that represents the section class name
};
