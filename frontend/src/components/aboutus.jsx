import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to Clean & Green Hyperspectral Processing, where we harness the power of advanced hyperspectral imaging technology to drive sustainable solutions.
        </p>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-text">
          Our mission is to provide cutting-edge hyperspectral image processing solutions that promote environmental sustainability, efficient resource management, and innovative research.
        </p>
        <h2 className="about-subtitle">What We Do</h2>
        <ul className="about-list">
          <li>Precision Agriculture</li>
          <li>Environmental Monitoring</li>
          <li>Remote Sensing Applications</li>
          <li>Industrial Quality Control</li>
          <li>AI-Driven Image Analysis</li>
        </ul>
        <h2 className="about-subtitle">Our Technology</h2>
        <p className="about-text">
          We leverage state-of-the-art Convolutional Neural Networks (CNN) to analyze hyperspectral images with high precision, enabling smarter decision-making and efficient processing.
        </p>
        <h2 className="about-subtitle">Why Choose Us?</h2>
        <p className="about-text">
          We combine state-of-the-art technology with a commitment to sustainability, ensuring that our hyperspectral image processing solutions benefit both businesses and the planet.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

/* AboutUs.css */
