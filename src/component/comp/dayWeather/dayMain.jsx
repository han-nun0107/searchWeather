import {
  dayFormatDateTime,
  getTempColor,
  getWeatherCategory,
} from "../../../utills/utills";
import { cityNameEnToKo } from "../../name";
import weatherDescko from "../weather";
import ButtonNav from "./button";

function DayMain({ weather }) {
  const temp = Number(weather.main.temp.toFixed(1));
  const tempColor = getTempColor(temp);
  const weatherId = weather.weather[0].id;
  const weatherBg = getWeatherCategory(weatherId);
  const backgroundImg = `/assets/weatherBackground/${weatherBg}.jpg`;

  return (
    <>
      <div
        className="
                flex flex-col items-center justify-center
                border rounded-2xl
                mx-auto my-5
                w-[90%] max-w-[500px]
                p-6
                shadow-lg
                text-center
                bg-cover
          "
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <h2>날짜: {dayFormatDateTime(weather.dt)}</h2>
        <h2>
          {cityNameEnToKo[weather.name] || weather.name}
          &nbsp;날씨
        </h2>
        <p className={tempColor}>온도: {temp}</p>
        <p>풍속: {Number(weather.wind.speed.toFixed(1))}m/s</p>
        <p>
          상태:{" "}
          {weatherDescko[weather.weather[0].id] ||
            weather.weather[0].description}
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="날씨 아이콘"
        />
        <ButtonNav />
      </div>
    </>
  );
}

export default DayMain;
