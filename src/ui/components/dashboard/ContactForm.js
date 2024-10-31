import React, { useState } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";

const ContactForm = () => {
  const [hover, setHover] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 480;

  const styles = {
    container: {
      width: isMobile ? "90%" : "80%",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px",
      maxWidth: "1440px",
      marginTop: isMobile ? "20px" : "100px",
      boxSizing:'border-box'
    },
    formContainer: {
      flex: 1,
      marginRight: isMobile ? "0px" : "20px",
    },
    heading: {
      color: "red",
      fontSize: isMobile ? "24px" : "32px",
      marginBottom: "10px",
    },
    description: {
      fontSize: isMobile ? "16px" : "18px",
      marginBottom: "20px",
      textAlign: isMobile ? "center" : "left",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "" : "flex-start",
    },
    input: {
      padding: isMobile ? "10px" : "20px",
      margin: "10px 0",
      fontSize: isMobile ? "16px" : "20px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "100%",
      boxSizing: "border-box",
      backgroundColor: "#e0f7fa",
    },
    textarea: {
      padding: isMobile ? "10px" : "20px",
      margin: "10px 0",
      fontSize: isMobile ? "16px" : "22px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      height: isMobile ? "80px" : "100px",
      backgroundColor: "#e0f7fa",
    },
    button: {
      padding: isMobile ? "8px 20px" : "10px 30px",
      fontSize: isMobile ? "18px" : "22px",
      backgroundColor: hover ? "#008CBA" : "#00b0ff",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      alignSelf: isMobile ? "" : "flex-start",
    },
    imageContainer: {
      flex: 1,
      textAlign: "center",
      marginTop: isMobile ? "20px" : "0px",
    },
    image: {
      width: isMobile ? "60%" : "80%",
      maxWidth: "300px",
    },
  };

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Contact With Us</h2>
        <p style={styles.description}>
          Describe your Idea or Comments to Us. Make some content for this
          section and suggest if any other details are missing. Because we need
          to create a helpful platform for new businesses.
        </p>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone or Mobile"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="comments"
            placeholder="Comments"
            value={formData.comments}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Send
          </button>
        </form>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg"
          alt="Contact Illustration"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default ContactForm;
