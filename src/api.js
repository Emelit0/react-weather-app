require("dotenv").config();

export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.GEO_API_KEY,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

export const geoApiUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const weatherApiUrl = "https://api.openweathermap.org/data/2.5";

export const weatherApiKey = process.env.OP_API_KEY;
