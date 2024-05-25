import React from 'react';
import './AboutUs.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="content">
          <h2>About Us</h2>
          <p>Welcome to our online store! We are passionate about providing high-quality products and exceptional customer service to our valued customers. Our mission is to...</p>
          <p>Learn more about our team and what drives us to deliver excellence every day.</p>
          <a href="#team" className="btn">Meet Our Team</a>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
