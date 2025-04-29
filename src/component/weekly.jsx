import { useContext } from "react";
import InputForm from "./comp/input";
import { WeatherContext } from "../context/weatherContext";
import {
  cityName,
  formattedDate,
  temp,
  weatherDesc,
  wind,
} from "../utills/utills";
import { useWeaklyWeather } from "../hooks/fetchWeather";
import WeaklyContent from "./comp/weaklyContent";
import TodayWeather from "./comp/forecast/todayWeather";
import FourWeather from "./comp/forecast/fourWeahter";
import LoadingText from "./comp/loading";

function Weekily() {
  const { weather, setWeather, city, error, setError, apiKey } =
    useContext(WeatherContext);

  useWeaklyWeather(city, apiKey, setWeather, setError);

  const filterWeather =
    weather?.list?.filter((_, index) => index % 8 === 0) || [];
  return (
    <>
      <InputForm />
      {error && <p>{error}</p>}
      {!weather && !error && <LoadingText />}
      {weather && (
        <>
          <div
            className="
              flex flex-wrap justify-center 
              bg-gradient-to-r from-blue-400 to-cyan-400
              p-6 m-auto
              rounded-xl
              shadow-xl
              text-balance
              gap-6
          "
          >
            {filterWeather.map((item, index) => {
              const dateText = formattedDate(item);
              const cityText = cityName(weather);
              const tempText = temp(item);
              const weatherText = weatherDesc(item);
              const windSpeed = wind(item);

              const content = (
                <>
                  <WeaklyContent
                    dateText={dateText}
                    cityText={cityText}
                    tempText={tempText}
                    weatherText={weatherText}
                    item={item}
                    windSpeed={windSpeed}
                  />
                </>
              );

              if (index === 0) {
                return (
                  <TodayWeather key={index} index={index} content={content} />
                );
              } else if (index >= 1 && index <= 5) {
                return (
                  <FourWeather key={index} index={index} content={content} />
                );
              }
            })}
          </div>
        </>
      )}
    </>
  );
}

export default Weekily;
