import { useContext } from "react";
import InputForm from "./comp/input";
import { WeatherContext } from "../context/weatherContext";
import {
  cityName,
  formattedDate,
  temp,
  today,
  weatherDesc,
  wind,
} from "../utills/utills";
import { useWeaklyWeather } from "../hooks/fetchWeather";
import WeaklyContent from "./comp/weaklyContent";
import LoadingText from "./comp/loading";
import NewWeather from "./comp/newday/newWeather";

function DayWeather() {
  const { weather, setWeather, city, error, setError, apiKey } =
    useContext(WeatherContext);

  useWeaklyWeather(city, apiKey, setWeather, setError);

  return (
    <>
      <InputForm />
      {error && <p>{error}</p>}
      {!weather && !error && <LoadingText />}
      {weather && (
        <>
          <div
            className="
              grid grid-cols-4
              justify-center 
              bg-gradient-to-r from-blue-400 to-cyan-400
              p-6 m-auto
              rounded-xl
              shadow-xl
              text-balance
              gap-6
          "
          >
            {weather?.list &&
              weather.list
                .filter((item) => {
                  const utcDate = new Date(item.dt_txt);
                  const koreaDate = new Date(
                    utcDate.getTime() + 9 * 60 * 60 * 1000
                  );

                  const year = koreaDate.getFullYear();
                  const month = String(koreaDate.getMonth() + 1).padStart(
                    2,
                    "0"
                  );
                  const day = String(koreaDate.getDate()).padStart(2, "0");

                  const koreaDateString = `${year}-${month}-${day}`;

                  return koreaDateString === today();
                })
                .map((item, index) => {
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

                  return (
                    <NewWeather key={index} index={index} content={content} />
                  );
                })}
          </div>
        </>
      )}
    </>
  );
}

export default DayWeather;
