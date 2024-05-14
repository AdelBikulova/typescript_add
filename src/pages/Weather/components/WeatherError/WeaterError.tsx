import { WeatherErrorWrapper } from "./styles";
import { WeatherErrorProps } from "./types";

const displayError = (errorCode: number) => {
  let errorMessage = "";
  switch (errorCode) {
    case 404:
      errorMessage = "City not found";
      break;
    case 500:
      errorMessage = "Server error";
      break;
    default:
      errorMessage = `API Error: Something went wrong with API data. Error code: ${errorCode}`;
  }
  return errorMessage;
};

function WeatherError({ errorCode }: WeatherErrorProps) {
  const message = displayError(errorCode);
  return <WeatherErrorWrapper>{message}</WeatherErrorWrapper>;
}

export default WeatherError;
