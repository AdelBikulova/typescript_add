export interface WeatherErrorProps {
  errorCode: number;
}

export interface WeatherInfoProps {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}
