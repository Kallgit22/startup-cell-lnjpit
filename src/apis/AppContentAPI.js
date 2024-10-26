// This Api file contain all axios api to fetch website content data, like blog data, initiative data, member data etc.
import axios from "axios";

const getGuests = () => {
  return axios.get(
    "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/guests"
  );
};
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

const getInitiative = (id) => {
  return axios.get(
    `https://api.startupcelllnjpitchapra.in/wp-json/wp/v2/initiatives/${id}`
  );
};

const getInitiatives = () => {
  return axios.get(
    "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/initiatives"
  );
};

const getEventAlbums = () => {
  return axios.get(
    "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/event-albums"
  );
};

export {
  getMemberList,
  getTestimonials,
  getNotifications,
  getInitiatives,
  getGuests,
  getInitiative,
  getEventAlbums
};
