import { WeatherInfoWrapper } from "./styles";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

function WeatherInfo({ data }: { data: WeatherData }) {
  const temperatureInCelsius = Math.round(data.main.temp - 273.15);
  const icon = data.weather[0].icon;

  return (
    <WeatherInfoWrapper>
      <h2 className="city-name">{data.name}</h2>
      <p className="temperature">{temperatureInCelsius}°C</p>
      <img
        className="weather-icon"
        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt="Weather icon"
      />
    </WeatherInfoWrapper>
  );
}

export default WeatherInfo;
