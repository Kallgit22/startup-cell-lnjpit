import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <p>Helpline Number: <a href="tel:+1234567890">+123 456 7890</a></p>
      </div>

      <div className="footer-section">
        <p>© 2024 All Rights Reserved</p>
      </div>

      <div className="footer-section">
        <p>Developer Contact: <a href="mailto:developer@example.com">rishabhraj1130jnvbgp@gmail.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
