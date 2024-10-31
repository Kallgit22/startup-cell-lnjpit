import { useEffect, useState } from "react";
import {
  getGuests,
  getInitiatives,
  getNotifications,
} from "../apis/AppContentAPI";
import { useSnackbar } from "../context/SnackbarProvider";

export default function DashboardContainer() {
  const [posters, setPosters] = useState(null);
  const [notice, setNotice] = useState(null);
  const [mentors, setMentors] = useState(null);
  const [guests, setGuests] = useState(null);
  const [initiatives, setInitiatives] = useState(null);
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (guests != null) {
      // Filter for mentors
      const filteredMentors = guests.filter((item) => item.type === "Mentor");
      console.log("Mentors:", filteredMentors);
      setMentors(filteredMentors);

      // Filter for guests
      const filteredGuests = guests.filter((item) => item.type === "Guest");
      console.log("Guests:", filteredGuests);
      // You can set guests if needed, but this might be redundant
    }
  }, [guests]);

  useEffect(() => {
    setPosters([
      "/images/startup-poster.jpg",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/Startup_Mahakumbh_PM_Narendra_Modi_ecosystem_1710915148775_1710915148910.webp",
      "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
      "/images/backgrounds/hashstudioz-at-startup-mahakumbh-expo.webp",
    ]);

    Promise.all([getNotifications(), getInitiatives(), getGuests()])
      .then(function (results) {
        const Notifications = results[0].data;
        const Initiatives = results[1].data;
        const Guests = results[2].data;
        setGuests(Guests); // Correct state variable name
        setNotice(Notifications);
        setInitiatives(Initiatives);
      })
      .catch((error) => {
        showSnackbar("Network Error","error");
      });
  }, []);

  return {
    posters,
    notice,
    mentors,
    initiatives,
  };
}
