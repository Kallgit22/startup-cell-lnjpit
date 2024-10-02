import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Contact With Us</h2>
        <p style={styles.description}>
          Describe your Idea or Comments to Us. Make some content for this section and suggest if any other details are missing. Because we need to create a helpful platform for new businesses.
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
          
          <button type="submit" style={styles.button}>Send</button>

          
          
        </form>
      </div>
      <div style={styles.imageContainer}>
        {/* Replace with the actual image or SVG for the mobile illustration */}
        <img
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1727282420~exp=1727286020~hmac=6901447a52312c0cad83f7395710c67d5661c9d0853bacb58b7b66a52232f368&w=740" // Placeholder image link
          alt="Contact Illustration"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  formContainer: {
    flex: 1,
    marginRight: '20px',
  },
  heading: {
    color: 'red',
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {   

    fontSize: '16px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#e0f7fa', // Light blue background
  },
  textarea: {
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    height: '100px',
    backgroundColor: '#e0f7fa', // Light blue background
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#00b0ff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    width: '80%',
    maxWidth: '300px',
  },
};

export default ContactForm;
