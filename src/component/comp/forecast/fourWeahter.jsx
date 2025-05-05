import { useContext } from "react";
import { WeatherContext } from "../../../context/weatherContext";

function FourWeather({ index, content }) {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  return (
    <>
      <div
        key={index}
        data-index={index}
        className="
            flex flex-col 
            items-center 
            w-auto 
          bg-white shadow-md 
            rounded-xl 
            p-4 
            hover:scale-105 
            transition-transform
                    "
      >
        <div
          className="
                flex 
                justify-center items-center
                    "
        >
          {content}
        </div>
      </div>
    </>
  );
}

export default FourWeather;
