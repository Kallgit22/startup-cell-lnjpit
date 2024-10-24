import React from "react";
import { useState, useEffect, useMemo } from "react";
import "../pages/styles/Blog.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [mainImage, setMainImage] = useState(
    "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [blogs, setBlogs] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://api.startupcelllnjpitchapra.in/wp-json/startupcell/v1/blogs"
      )
      .then(function (response) {
        setBlogs(response.data);
      })
      .catch(function (error) {
        alert(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  const handleBlogUpdate = (blog) => {
    navigate("/blog-detail", { state: { blog } });
  };

  const images = useMemo(
    () => [
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
      "/images/backgrounds/EC_Startup_Cyborg_Hands_750.jpg",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setMainImage(images[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      <div className="Image">
        <img src={mainImage} alt="Blog Banner" />
      </div>

      {blogs ? (
        <div className="grid-container">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="card-container"
              onClick={() => {
                handleBlogUpdate(blog);
              }}
            >
              <img
                src={blog.image_src}
                alt={blog.title}
                className="card-image"
              />
              <h3 className="card-title">{blog.title}</h3>
              <div className="card-details">
                <p className="card-date">Author: {blog.author}</p>
                <p className="card-date">
                  Publish Date: {new Date(blog.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Blog;
