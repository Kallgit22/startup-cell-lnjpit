import { useEffect, useState } from "react";
import { getEventAlbums } from "../apis/AppContentAPI";
import { useSnackbar } from "../context/SnackbarProvider";

export default function GalleryContainer() {
  const [eventAlbums, setEventAlbums] = useState(null);
  const [randomImageList, setRandomImageList] = useState([]);
  const { showSnackbar } = useSnackbar();

useEffect(() => {
  const imageList = [];
  if (eventAlbums != null) {
    eventAlbums.forEach((album) => imageList.push(...album.album)); // Spread operator to flatten
    setRandomImageList(imageList);
  }
}, [eventAlbums]);


  const eventNames = [
    ...new Set((eventAlbums || []).map((album) => album.event_name)), // Use event_name based on your API response
  ];

  const years = [
    ...new Set(
      (eventAlbums || []).map((album) =>
        album.date ? new Date(album.date).getFullYear() : null
      )
    ),
  ];

  const [albums, setAlbums] = useState(eventAlbums || []);
  const [filters, setFilters] = useState({
    eventName: "",
    year: "",
    month: "",
  });

  useEffect(()=>{
    setAlbums(eventAlbums);
  },[eventAlbums])

  useEffect(() => {
    const filteredAlbums = (eventAlbums || []).filter((album) => {
      const matchesEvent = filters.eventName
        ? album.event_name === filters.eventName // Use event_name based on your API response
        : true;
      const matchesYear = filters.year
        ? new Date(album.date).getFullYear() === parseInt(filters.year)
        : true;
      const matchesMonth = filters.month
        ? new Date(album.date).toLocaleString("default", { month: "long" }) ===
          filters.month
        : true;

      return matchesEvent && matchesYear && matchesMonth;
    });

    setAlbums(filteredAlbums);
  }, [filters]);

  useEffect(() => {
    try {
      Promise.all([getEventAlbums()]).then(function (results) {
        const eventAlbums = results[0].data;
        setEventAlbums(eventAlbums);
      }).catch((error)=>{
        showSnackbar("Network Error", "error");
      });
    } catch (error) {
      showSnackbar("Network Error","error");
    }
  }, []);
  return {
    albums,
    filters,
    eventNames,
    years,
    months,
    randomImageList,
    setFilters
  };
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
