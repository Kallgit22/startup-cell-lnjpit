import React from "react";
import "../styles/Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonial-slide">
      <div className="testimonial-author-data">
        <img src="/images/Mithilesh-Singh.jpg" alt="" />
        <h2>Dr. Mithilesh Kumar Singh</h2>
        <h3>Principal, LNJPIT Chapra</h3>
        <h5>Other details</h5>
      </div>
      <div className="testimonial-text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatum maiores sequi deleniti odio illo excepturi similique
          provident assumenda dolorem dicta optio non error, omnis, corrupti
          magni perspiciatis suscipit voluptatibus!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatum maiores sequi deleniti odio illo excepturi similique
          provident assumenda dolorem dicta optio non error, omnis, corrupti
          magni perspiciatis suscipit voluptatibus!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatum maiores sequi deleniti odio illo excepturi similique
          provident assumenda dolorem dicta optio non error, omnis, corrupti
          magni perspiciatis suscipit voluptatibus!
        </p>
      </div>
    </div>
  );
}
