import React, { useEffect, useRef, useState } from "react";
import "./styles/Gallery.css";
import { useParams } from "react-router-dom";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";
import GalleryContainer from "../../containers/GalleryContainer";
import UniversalCustomDialog from "../components/UniversalCustomDialog";

export default function Gallery() {
  const { section } = useParams();
  const videoRef = useRef(null); // To reference the video element
  const [isMuted, setIsMuted] = useState(false); // Mute state
  const [volume, setVolume] = useState(0.5); // Volume state, default to 50%
  const {
    albums,
    filters,
    eventNames,
    years,
    months,
    setFilters,
    randomImageList,
  } = GalleryContainer();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Number of images to show per page

  const handleAlbumClick = (album) => {
    console.log(album);
    setSelectedAlbum(album);
    setCurrentPage(0); // Reset to first page
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAlbum(null);
  };

  const totalPages = selectedAlbum
    ? Math.ceil(selectedAlbum.album.length / itemsPerPage)
    : 0;

  // Handle changes in the filters
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

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
          loop
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
              Step into our vibrant world of innovation and creativity! Here at
              the Startup Cell, we believe in showcasing the journey of our
              young entrepreneurs and the milestones they've achieved. Our
              gallery is a visual celebration of passion, collaboration, and
              groundbreaking ideas that are shaping the future.
            </p>
            <p>
              Explore images from workshops, events, and startup showcases where
              students have transformed their visions into reality. You'll find
              inspiring moments of teamwork, mentorship, and success that
              reflect the spirit of our community.
            </p>
            <p>
              Whether you're a budding entrepreneur, a mentor, or just curious
              about the startup ecosystem, our gallery offers a glimpse into the
              dynamic environment at LNJPIT Chapra. Join us in celebrating
              creativity, entrepreneurship, and the incredible stories that
              unfold here.
            </p>
            <p>Dive in, get inspired, and be part of our journey!</p>
          </div>
        </div>
      </section>
      <section className="event-gallery-section">
        <div className="upper-image-container">
          <div className="about-event-gallery">
            <h1>Event Gallery</h1>
            <p>
              Welcome to our Event Gallery! Here, you’ll find a vibrant
              collection of moments captured during our various events and
              initiatives. From workshops and guest lectures to pitch
              competitions and networking sessions, each image tells a story of
              collaboration, learning, and innovation.
            </p>
            <p>
              Our events are designed to empower aspiring entrepreneurs and
              foster a community of creativity. Browse through the highlights
              that showcase the enthusiasm, dedication, and teamwork of our
              participants.
            </p>
          </div>
          <div className="upper-image-wrapper">
            <div className="image-slideshow">
              {randomImageList != null
                ? randomImageList.map((image, index) => (
                    <img
                      className={`${index === 1 ? "active-image" : ""}`}
                      key={index}
                      src={image}
                      alt=""
                    ></img>
                  ))
                : null}
            </div>

            <div className="slider-container">
              {randomImageList != null
                ? randomImageList.map((image, index) => (
                    <img key={index} src={image} alt=""></img>
                  ))
                : null}
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
            {albums != null ? (
              albums.length > 0 ? (
                albums.map((album) => (
                  <div
                    key={album.id}
                    className="album-item"
                    onClick={() => handleAlbumClick(album)}
                  >
                    <h3>{album.title}</h3>
                    <p>Year: {new Date(album.date).getFullYear()}</p>
                    <p>
                      Month:{" "}
                      {new Date(album.date).toLocaleString("default", {
                        month: "long",
                      })}
                    </p>
                    <p>Event: {album.event_name}</p>
                    <div className="album-thumbnails">
                      {album.thumbnail.map((image, idx) => (
                        <img key={idx} src={image} alt={image.alt} />
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <p>No albums found for the selected filters.</p>
              )
            ) : (
              ""
            )}
          </div>
        </div>
        <UniversalCustomDialog
          open={openDialog}
          onClose={handleCloseDialog}
          title={selectedAlbum ? `${selectedAlbum.title} - Images` : "Album"}
          content={
            selectedAlbum && (
              <>
                <div className="album-images">
                  {selectedAlbum.album
                    .slice(
                      currentPage * itemsPerPage,
                      (currentPage + 1) * itemsPerPage
                    )
                    .map((image, idx) => (
                      <img key={idx} src={image} alt={`Album ${idx + 1}`} />
                    ))}
                </div>
                <div className="pagination">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index)}
                      disabled={index === currentPage}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </>
            )
          }
        />
      </section>
      <section className="cell-gallery-section"></section>
      <section className="college-gallery-section"></section>
      <section className="common-gallery-section"></section>
      <section className="video-gallery-section"></section>
    </div>
  );
}
