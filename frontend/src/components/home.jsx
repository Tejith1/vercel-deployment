import React from 'react';
import './home.css'; // Import the CSS file
import { useNavigate  } from 'react-router-dom'; // Import navigate from react-router-dom
const Home = () => {
    const navigate = useNavigate(); 
    const handleProfileClick = () => {
        navigate('/ProfilePage'); // Navigate to /profile route when button is clicked
      }; 
      const handleAboutClick = () => {
        navigate('/AboutUs'); // Navigate to /profile route when button is clicked
      };
      const handledetectClick = () => {
        navigate('/Detect'); // Navigate to /profile route when button is clicked
      };
  return (
    <div className="container2">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbarContent">
          <div className="logo">MyWebsite</div>
          <div className="navButtons">
          <button className="navButton" onClick={handleProfileClick}>Profile</button>
          <button className="navButton" onClick={handleAboutClick}>About Us</button>
          </div>
        </div>
      </nav>    

      {/* Main Content */}
      <div className="mainContent">
        <div className="contentWrapper">
          <h1 className="title">Welcome to MyWebsite</h1>
          <p className="description">
            Explore our platform and discover amazing features tailored just for you. Whether you're here to connect, learn, or grow, we've got you covered.
          </p>
          <div className="buttons">
            <button className="button buttonPrimary" onClick={handledetectClick}>Detection</button>
            <button className="button buttonSecondary">Learn More</button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;
