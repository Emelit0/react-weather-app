import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/currentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <div className="weather-container">
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
