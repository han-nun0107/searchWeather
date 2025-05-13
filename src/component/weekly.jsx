import { useContext } from "react";
import InputForm from "./comp/input";
import { WeatherContext } from "../context/weatherContext";
import {
  cityName,
  dateWeatherBackground,
  formattedDate,
  mainWeatherBackground,
  temp,
  weatherDesc,
  wind,
} from "../utills/utills";
import { useWeaklyWeather } from "../hooks/fetchWeather";
import WeaklyContent from "./comp/weaklyContent";
import TodayWeather from "./comp/forecast/fourTodayWeather";
import FourWeather from "./comp/forecast/fourWeahter";
import LoadingText from "./comp/loading";

function Weekily() {
  const { weather, setWeather, city, error, setError, apiKey } =
    useContext(WeatherContext);

  useWeaklyWeather(city, apiKey, setWeather, setError);

  const filterWeather =
    weather?.list?.filter((_, index) => index % 8 === 0) || [];

  const tempBg = Number(weather?.list?.[0]?.main?.temp.toFixed(1));
  const backgroundColor = dateWeatherBackground(tempBg);
  const mainBackgroundColor = mainWeatherBackground(tempBg);
  return (
    <>
      <InputForm />
      {error && <p>{error}</p>}
      {!weather && !error && <LoadingText />}
      {weather && (
        <>
          <div className={`min-h-screen ${backgroundColor}`}>
            <div
              className={`flex flex-wrap justify-center 
              ${mainBackgroundColor}
              p-6 m-auto
              rounded-xl
              shadow-xl
              text-balance
              gap-6`}
            >
              {filterWeather.map((item, index) => {
                const dateText = formattedDate(item);
                const cityText = cityName(weather);
                const tempText = temp(item);
                const weatherText = weatherDesc(item);
                const windSpeed = wind(item);
                const weatherId = item.weather[0].id;

                const content = (
                  <>
                    <WeaklyContent
                      dateText={dateText}
                      cityText={cityText}
                      tempText={tempText}
                      weatherText={weatherText}
                      item={item}
                      windSpeed={windSpeed}
                      weatherId={weatherId}
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
          </div>
        </>
      )}
    </>
  );
}

export default Weekily;
