import React from "react";
import "../styles/Testimonial.css";

export default function Testimonial({data}) {
  return (
    <div className="testimonial-slide">
      <div className="testimonial-author-data">
        <img src={data.image_src} alt="" />
        <h2>{data.name}</h2>
        <h3>{data.designation}</h3>
      </div>
      <div className="testimonial-text-container" dangerouslySetInnerHTML={{ __html: data.testimonial }}>
      </div>
    </div>
  );
}
