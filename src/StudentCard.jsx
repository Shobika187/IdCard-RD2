import React, { useState } from "react";
import "./StudentCard.css";
import Photo from "./im1.jpg";

const StudentCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="card">
      <img src={Photo} alt="Student Photo" className="photo-img" />
      <h2 className="title">Name: SHOBIKA P</h2>
      <p className="details">Registration No: 212221230096</p>
      <p className="details">Course : B.Tech(AI&DS)</p>

      <button className="toggle-button" onClick={toggleVisibility}>
        {isVisible ? "Hide Details" : "Show Details"}
      </button>
      {isVisible && (
        <div className="additional-info">
          <p>Blood Group: A+</p>
          <p>Date of Birth: 18/7/2003</p>
          <p>Contact:9876543210</p>
          <p>Address:xy street,Chennai.</p>
        </div>
      )}
    </div>
  );
};

export default StudentCard;