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
    </div>
  );
};

export default CurrentWeather;
