import { useContext } from "react";
import { WeatherContext } from "../context/weatherContext";
import InputForm from "./comp/input";
import DayMain from "./comp/dayWeather/dayMain";
import LoadingText from "./comp/loading";
import { useDayWeather } from "../hooks/fetchWeather";
import { dateWeatherBackground } from "../utills/utills";

function Day() {
  const { weather, setWeather, city, error, setError, apiKey } =
    useContext(WeatherContext);
  useDayWeather(city, apiKey, setWeather, setError);

  const temp = Number(weather?.main?.temp.toFixed(1));
  const backgroundColor = dateWeatherBackground(temp);
  console.log(temp);

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center min-h-screen ${backgroundColor}`}
      >
        <p className="text-2xl font-black">현재 날씨</p>
        <InputForm />
        {error && <p>{error}</p>}
        {!weather && !error && <LoadingText />}
        {weather && weather.main && weather.weather?.[0] && (
          <>
            <DayMain weather={weather} />
          </>
        )}
      </div>
    </>
  );
}

export default Day;
