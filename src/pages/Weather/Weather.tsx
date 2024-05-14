import { useState } from "react";
import { WeatherWrapper, Header, Title, WeatherDataContainer } from "./styles";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherError from "./components/WeatherError/WeaterError";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Spinner from "components/Spinner/Spinner";

const API_KEY = "2d9a6fef8a1b19901b76d4dd0331e599";

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<number | null>(null);
  const [showData, setShowData] = useState(false);

  const getWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!response.ok) {
        setError(response.status);
        return;
      }
      const data = await response.json();
      setWeatherData(data);
      setShowData(true);
    } catch (error: any) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = () => {
    if (!city.trim()) {
      alert("Please enter a city name");
      return;
    }
    getWeatherData();
  };

  return (
    <WeatherWrapper>
      <Header>
        <Title>Weather App</Title>
      </Header>
      <Input
        name="city"
        placeholder="Enter city"
        onInputChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <Button name="Get Weather" onButtonClick={handleButtonClick} />
      {showData && (
        <WeatherDataContainer>
          {loading ? (
            <Spinner />
          ) : error ? (
            <WeatherError errorCode={error} />
          ) : weatherData ? (
            <WeatherInfo data={weatherData} />
          ) : null}
        </WeatherDataContainer>
      )}
    </WeatherWrapper>
  );
}

export default Weather;
