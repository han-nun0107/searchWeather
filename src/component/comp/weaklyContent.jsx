import { getTempColor, getWeatherCategory } from "../../utills/utills";
import "../../App.css";

function WeaklyContent({
  dateText,
  cityText,
  tempText,
  weatherText,
  item,
  windSpeed,
  weatherId,
}) {
  const tempColor = getTempColor(tempText);
  const weatherBg = getWeatherCategory(weatherId);
  const backgroundImg = `/assets/weatherBackground/${weatherBg}.jpg`;

  return (
    <>
      <div
        className="bg-cover rounded-xl text-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
        <h2 className="text-xl font-bold mb-2 text-[#fafafa]">
          날짜 : {dateText}
        </h2>
        <h2 className="text-lg font-semibold mb-2 text-[#fafafa]">
          {cityText} 날씨
        </h2>
        <p className={`mb-1 font-black text-[#fafafa] ${tempColor}`}>
          온도 : {tempText}
        </p>
        <p className="text-md mb-1 text-[#fafafa]">상태: {weatherText}</p>
        <p className="text-md mb-4 text-[#fafafa]">풍속: {windSpeed}</p>
        <img
          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="날씨 아이콘"
          className="mx-auto"
        />
      </div>
    </>
  );
}

export default WeaklyContent;
