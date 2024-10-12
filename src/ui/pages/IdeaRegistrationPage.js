import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import "./styles/IdeaRegistrationPage.css";

export default function IdeaRegistrationPage() {
    const { section } = useParams();

  useEffect(() => {
    if (section) {
      const element = document.querySelector(`.${section}`); // Adjusted to use className or id
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <div className="registration-page">
      <div className="header-section">
        <h1>Idea Registration Portal</h1>
        <p>
          Submit your innovative ideas to be part of the future entrepreneurship
          journey!
        </p>
      </div>
      <div className="motivation-section">
        <h2>Why Submit Your Idea?</h2>
        <p>
          At our Startup Cell, we believe that every great idea deserves a
          platform. Whether you're a student with a passion for innovation or an
          entrepreneur ready to make a mark, we encourage you to bring forward
          your ideas and take the first step towards shaping the future!
        </p>
      </div>
      <div className="guideline-section guidlines">
        <h2>Guidelines for Submission</h2>
        <ul>
          <li>Only one idea submission per applicant is allowed.</li>
          <li>Your idea should be original and innovative.</li>
          <li>
            Submissions will be evaluated based on creativity, feasibility, and
            potential impact.
          </li>
          <li>
            All submissions should be made before the deadline mentioned below.
          </li>
        </ul>
      </div>
      <div className="dates-section">
        <h2>Important Dates</h2>
        <ul>
          <li>
            <strong>Submission Deadline:</strong> November 30, 2024
          </li>
          <li>
            <strong>Evaluation Period:</strong> December 1 - December 15, 2024
          </li>
          <li>
            <strong>Results Announcement:</strong> December 20, 2024
          </li>
        </ul>
      </div>
      <div className="form-section registration-form">
        <h2>Submit Your Idea</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter your phone number" required />

          <label>Affiliation</label>
          <select>
            <option>Student</option>
            <option>Entrepreneur</option>
          </select>

          <label>Idea Title</label>
          <input type="text" placeholder="Enter your idea title" required />

          <label>Idea Description</label>
          <textarea
            placeholder="Describe your idea"
            rows="5"
            required
          ></textarea>

          <div class="file-input-container">
            <label for="fileInput">Attachments (Optional)</label>
            <input type="file" class="file-input" id="fileInput" />
            <label
              for="fileInput"
              class="custom-file-input"
              data-file-name="No file chosen"
            >
              Choose File
            </label>
          </div>

          <button type="submit">Submit Idea</button>
        </form>
      </div>
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Who can submit their idea?</h3>
          <p>Anyone who is a student or entrepreneur can submit their idea.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a submission fee?</h3>
          <p>No, the submission is free for all participants.</p>
        </div>
      </div>
      <div className="contact-section">
        <h2>Need Help?</h2>
        <p>
          For any inquiries, please reach out to us at:{" "}
          <strong>startupcell@example.com</strong>
        </p>
      </div>
    </div>
  );
}
