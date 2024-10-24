import React, { useEffect, useRef, useState } from "react";
import "./styles/Gallery.css";
import { useParams } from "react-router-dom";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

export default function Gallery() {
  const { section } = useParams();
  const videoRef = useRef(null); // To reference the video element
  const [isMuted, setIsMuted] = useState(true); // Mute state
  const [volume, setVolume] = useState(0.5); // Volume state, default to 50%
  const dummyAlbums = [
    {
      id: 1,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 2,
      title: "Tech Fest 2023",
      year: "2023",
      month: "March",
      eventName: "Tech Fest",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Tech Fest Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Tech Fest Image 2" },
      ],
    },
    {
      id: 3,
      title: "Startup Meet",
      year: "2022",
      month: "May",
      eventName: "Startup",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Startup Meet Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Startup Meet Image 2" },
      ],
    },
    {
      id: 4,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 5,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 6,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 7,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 8,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 9,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 10,
      title: "Tech Fest 2023",
      year: "2023",
      month: "March",
      eventName: "Tech Fest",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Tech Fest Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Tech Fest Image 2" },
      ],
    },
    {
      id: 11,
      title: "Startup Meet",
      year: "2022",
      month: "May",
      eventName: "Startup",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Startup Meet Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Startup Meet Image 2" },
      ],
    },
    {
      id: 12,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 13,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 14,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 15,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
    {
      id: 16,
      title: "Inauguration Ceremony",
      year: "2023",
      month: "January",
      eventName: "Inauguration",
      images: [
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 1" },
        { url: "/images/startup-poster.jpg", alt: "Inauguration Image 2" },
      ],
    },
  ];

  // Unique values for the dropdowns
  const eventNames = [...new Set(dummyAlbums.map((album) => album.eventName))];
  const years = [...new Set(dummyAlbums.map((album) => album.year))];
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

  const [albums, setAlbums] = useState(dummyAlbums); // Albums state
  const [filters, setFilters] = useState({
    eventName: "",
    year: "",
    month: "",
  });

  // Filter logic based on the selected filters
  useEffect(() => {
    const filteredAlbums = dummyAlbums.filter((album) => {
      const matchesEvent = filters.eventName
        ? album.eventName === filters.eventName
        : true;
      const matchesYear = filters.year ? album.year === filters.year : true;
      const matchesMonth = filters.month ? album.month === filters.month : true;

      return matchesEvent && matchesYear && matchesMonth;
    });

    setAlbums(filteredAlbums);
  }, [filters]);

  // Handle changes in the filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const imageList = [
   
    { image: "/images/startup-poster.jpg" },
    {
      image:
        "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
    },
    { image: "/images/startup-poster.jpg" },
    {
      image:
        "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
    },
    {
      image:
        "/images/backgrounds/Startup_Mahakumbh_PM_Narendra_Modi_ecosystem_1710915148775_1710915148910.webp",
    },
    { image: "/images/startup-poster.jpg" },
    {
      image:
        "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
    },
    { image: "/images/startup-poster.jpg" },
    {
      image:
        "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
    },
    {
      image:
        "/images/backgrounds/Startup_Mahakumbh_PM_Narendra_Modi_ecosystem_1710915148775_1710915148910.webp",
    },
    { image: "/images/startup-poster.jpg" },
    {
      image:
        "/images/backgrounds/startup-mahakumbh-to-tell-the-world-that-spring-is-coming.webp",
    },
  ];

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  const handleConntext = (targetSection) => {
    const element = document.querySelector(`.${targetSection}`); // Use the class or ID of the section
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume; // Update the video volume
      videoRef.current.muted = isMuted; // Set the mute/unmute state
    }
  }, [volume, isMuted]);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume); // Update the state with the new volume
  };

  const toggleMute = () => {
    setIsMuted(!isMuted); // Toggle the mute state
  };

  return (
    <div className="gallery-page">
      <section className="galley-poster-section">
        <video
          ref={videoRef}
          src="/videos/Shiva Shambho_ Most Watched Bharatanatyam Dance _ Best of Indian Classical Dance.mp4"
          autoPlay
          muted={isMuted} // Apply the mute state to the video
        ></video>
        <div className="gallery-bottom-bar">
          <div className="context-bar"></div>
          <div className="volume-controller">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              title="Volume"
            />
            {isMuted ? (
              <HiMiniSpeakerXMark
                onClick={toggleMute}
                style={{ width: "48px", height: "48px", color: "white" }}
              />
            ) : (
              <HiMiniSpeakerWave
                onClick={toggleMute}
                style={{ width: "48px", height: "48px", color: "white" }}
              />
            )}
          </div>
        </div>
        <img className="left-cloud" src="/images/cloud.png" alt="" />
        <img className="right-cloud" src="/images/cloud.png" alt="" />
      </section>
      <section className="gallery-context-section">
        <h1>Welcome to Gallery</h1>
        <div className="gallery-info">
          <div className="gallery-context-menu">
            <span onClick={() => handleConntext("event-gallery-section")}>
              Event Gallery
            </span>
            <div className="horizontal-devider"></div>
            <span onClick={() => handleConntext("cell-gallery-section")}>
              Startup Cell Gallery
            </span>
            <div className="horizontal-devider"></div>
            <span onClick={() => handleConntext("college-gallery-section")}>
              College Gallery
            </span>
            <div className="horizontal-devider"></div>
            <span onClick={() => handleConntext("common-gallery-section")}>
              Common Gallery
            </span>
            <div className="horizontal-devider"></div>
            <span onClick={() => handleConntext("video-gallery-section")}>
              Video Gallery
            </span>
          </div>
          <div className="about-gallery">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              libero quam excepturi sint, doloribus repellat adipisci non a.
              Porro explicabo veniam esse molestias a excepturi, distinctio rem
              accusantium delectus dolores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              libero quam excepturi sint, doloribus repellat adipisci non a.
              Porro explicabo veniam esse molestias a excepturi, distinctio rem
              accusantium delectus dolores? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt libero quam excepturi sint,
              doloribus repellat adipisci non a. Porro explicabo veniam esse
              molestias a excepturi, distinctio rem accusantium delectus
              dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt libero quam excepturi sint, doloribus repellat adipisci
              non a. Porro explicabo veniam esse molestias a excepturi,
              distinctio rem accusantium delectus dolores?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              libero quam excepturi sint, doloribus repellat adipisci non a.
              Porro explicabo veniam esse molestias a excepturi, distinctio rem
              accusantium delectus dolores? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt libero quam excepturi sint,
              doloribus repellat adipisci non a. Porro explicabo veniam esse
              molestias a excepturi, distinctio rem accusantium delectus
              dolores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt libero quam excepturi sint, doloribus repellat adipisci
              non a. Porro explicabo veniam esse molestias a excepturi,
              distinctio rem accusantium delectus dolores?
            </p>
          </div>
        </div>
      </section>
      <section className="event-gallery-section">
        <div className="upper-image-container">
          <div className="about-event-gallery">
            <h1>Event Gallery</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              sunt quas nulla quo dolor atque, fuga nesciunt, dolore et
              reprehenderit numquam sint mollitia quos aperiam! Asperiores,
              tenetur aliquam! Expedita, neque.
            </p>
          </div>
          <div className="upper-image-wrapper">
            <div className="image-slideshow">
              {imageList.map((image, index) => (
                <img
                  className={`${index === 1 ? "active-image" : ""}`}
                  key={index}
                  src={image.image}
                  alt=""
                ></img>
              ))}
            </div>

            <div className="slider-container">
              {imageList.map((image, index) => (
                <img key={index} src={image.image} alt=""></img>
              ))}
            </div>
          </div>
        </div>
        <div className="search-album-wrapper">
          <h2>Search Album</h2>
          <div className="search-bar-container">
            <div>
              <h4>Event Name</h4>
              <select
                name="eventName"
                value={filters.eventName}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                {eventNames.map((event, idx) => (
                  <option key={idx} value={event}>
                    {event}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>Event Year</h4>
              <select
                name="year"
                value={filters.year}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                {years.map((year, idx) => (
                  <option key={idx} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <h4>Event Month</h4>
              <select
                name="month"
                value={filters.month}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                {months.map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Album list */}
          <div className="album-list">
            {albums.length > 0 ? (
              albums.map((album) => (
                <div key={album.id} className="album-item">
                  <h3>{album.title}</h3>
                  <p>Year: {album.year}</p>
                  <p>Month: {album.month}</p>
                  <p>Event: {album.eventName}</p>
                  <div className="album-thumbnails">
                    {album.images.map((image, idx) => (
                      <img key={idx} src={image.url} alt={image.alt} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p>No albums found for the selected filters.</p>
            )}
          </div>
        </div>
      </section>
      <section className="cell-gallery-section"></section>
      <section className="college-gallery-section"></section>
      <section className="common-gallery-section"></section>
      <section className="video-gallery-section"></section>
    </div>
  );
}
