import React, { useMemo } from "react";
import Slider from "../components/dashboard/Sliders";
import ContactForm from "../components/dashboard/ContactForm";
import Mentors from "../components/dashboard/Mentor";
import AboutStartup from "../components/dashboard/AboutStartup";
import Initiative from "../components/dashboard/Initiative";
import DashboardContainer from "../../containers/DashboardContainer";

export default function Dashboard() {
  const handleScrolling = (targetSection) => {
    const element = document.querySelector(`.${targetSection}`); // Use the class or ID of the section
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { notice, initiatives, mentors } = DashboardContainer();

  const posters = useMemo(
    () => [
      "/images/startup-poster.jpg",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/Startup_Mahakumbh_PM_Narendra_Modi_ecosystem_1710915148775_1710915148910.webp",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/hashstudioz-at-startup-mahakumbh-expo.webp",
    ],
    []
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Slider
        posters={posters}
        notices={notice}
        onclickExplore={() => handleScrolling("initiative-container")}
      />
      {initiatives != null ? (
        <Initiative className={"initiative-container"} data={initiatives} />
      ) : (
        ""
      )}
      <AboutStartup />
      {mentors != null ? <Mentors mentorData={mentors} /> : ""}
      <ContactForm />
    </div>
  );
}
