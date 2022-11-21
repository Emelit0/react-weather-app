import React from "react";
import "./currentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="name">Berlin</p>
          <p className="weatherInfo">Sunny</p>
        </div>
        <img src="icons/01d.png" alt="weather" className="weatehrIcon" />
      </div>
      <div className="bottom">
        <p className="temperature">18C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">14 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
