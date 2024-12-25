import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/login'); // Adjust the path to the route you want to navigate to
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="navbar-logo" onClick={handleLogoClick}></div>

        {/* Search Section */}
        <div className="navbar-search">
          <input type="text" placeholder=" Search..." />
          <i className="fas fa-search search-icon"></i>
        </div>

        {/* Profile Section */}
        <div className="navbar-profile">
          <div className="profile-pic"></div>
          <div className="language">English</div>
        </div>
      </nav>

      {/* Jumbotron for Menu Section */}
      <div className="navbar-jumbotron">
        <div className="menu-container">
          <a href="#" className="fa-solid fa-house" title="Home"></a>
          <a href="?" className="fa-solid fa-pencil-alt" title="Edit"></a>
          <a href="/javascriptAss.html" className="fa-solid fa-user" title="Profile"></a>
          <a href="#" className="fa-solid fa-circle-info" title="Info"></a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
