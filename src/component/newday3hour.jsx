import { useContext } from "react";
import InputForm from "./comp/input";
import { WeatherContext } from "../context/weatherContext";
import {
  cityName,
  dateWeatherBackground,
  formattedDate,
  temp,
  today,
  weatherDesc,
  wind,
} from "../utills/utills";
import { useWeaklyWeather } from "../hooks/fetchWeather";
import WeaklyContent from "./comp/weaklyContent";
import LoadingText from "./comp/loading";
import NewWeather from "./comp/newday(3hours)/newWeather";

function DayWeather() {
  const { weather, setWeather, city, error, setError, apiKey } =
    useContext(WeatherContext);

  useWeaklyWeather(city, apiKey, setWeather, setError);

  const tempBack = Number(weather?.list?.[0]?.main?.temp?.toFixed(1));
  const backgroundColor = dateWeatherBackground(tempBack);

  return (
    <>
      <InputForm />
      {error && <p>{error}</p>}
      {!weather && !error && <LoadingText />}
      {weather && (
        <>
          <div className={`flex flex-col min-h-screen ${backgroundColor}`}>
            <div
              className={`grid grid-cols-4
              justify-center
              p-6 m-auto
              rounded-xl
              shadow-xl
              text-balance
              gap-6`}
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
                          weather={weather}
                          weatherId={weatherId}
                        />
                      </>
                    );

                    return (
                      <NewWeather key={index} index={index} content={content} />
                    );
                  })}
            </div>
            <div className="mb-[200px]">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequuntur deleniti ipsum perspiciatis hic, enim architecto
                alias nemo inventore excepturi, non suscipit error, eveniet
                expedita! Placeat, deserunt molestias! Deserunt, commodi ipsum.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DayWeather;
