import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginSignup.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const LoginSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8080/page/register?email=${formData.email}&password=${formData.password}&firstName=${formData.firstName}&lastName=${formData.lastName}&mobileNumber=${formData.mobileNumber}`
      );
    // try {
    //   const response = await axios.post(
    //     'http://localhost:8080/page/register',
    //     formData, // Send the entire formData as JSON in the body
    //     {
    //       headers: {
    //         'Content-Type': 'application/json' // Make sure the server knows it's JSON
    //       }
    //     }
    //   );
      console.log("Registration successful:", response.data);
      navigate("/login"); // Navigate to the login page after successful registration
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <div className="overlay">
          <div className="logo"></div>
          <p className="subtitle">Stay connected with your world</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <div className="form-container">
          <h2>Sign Up</h2>
          <p className="form-description">Please fill your information below</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="input-with-icon">
                <i className="fas fa-user icon"></i>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <i className="fas fa-user icon"></i>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <i className="fas fa-phone icon"></i>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <i className="fas fa-envelope icon"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <i className="fas fa-key icon"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <div className="button-container">
              <button type="submit" className="btn">Register</button>
            </div>
          </form>
          <hr className="divider" />
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
