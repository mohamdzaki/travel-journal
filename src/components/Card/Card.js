import React from "react";
import "./Card.css";

function Card({ img, country, place, duration, description }) {
  return (
    <div className="card">
      <div className="img--container">
        <img src={img} alt="" />
      </div>
      <div className="text--container">
        <span>
          <img src="/images/pin.png" alt="" />
        </span>
        <span className="text--country">{country}</span>
        <span className="text--google">View on Google Maps</span>
        <h2 className="text--place">{place}</h2>
        <p className="text--duration">{duration}</p>
        <p className="text--discription">{description}</p>
      </div>
    </div>
  );
}

export default Card;
