// This Api file contain all axios api to fetch website content data, like blog data, initiative data, member data etc.
import axios from "axios";

const getMemberList = () => {
  return axios.get(
    "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/members"
  );
};

const getTestimonials = () => {
  return axios.get(
    "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/testimonials"
  );
};

const getNotifications = () => {
  return axios.get(
    "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/notifications"
  );
};
export { getMemberList, getTestimonials, getNotifications };
