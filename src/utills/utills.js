import { cityNameEnToKo } from "../component/name";
import WeatherContent from "../component/comp/weather";

export function formattedDate(item) {
  return new Date(item.dt * 1000).toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function cityName(weather) {
  return cityNameEnToKo[weather.city.name] || weather.city.name;
}
export function temp(item) {
  return Number(item.main.temp.toFixed(1));
}
export function wind(item) {
  return Number(item.wind.speed.toFixed(1));
}
export function weatherDesc(item) {
  return WeatherContent[item.weather[0].id] || item.weather[0].description;
}

export function dayFormatDateTime(dt) {
  return new Date(dt * 1000).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function today() {
  const nowDate = new Date();
  // const koreaTime = new Date(nowDate.getTime() + 9 * 60 * 60 * 1000);

  const year = nowDate.getFullYear();
  const month = String(nowDate.getMonth() + 1).padStart(2, "0");
  const date = String(nowDate.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}

export function weatherCategory(id) {
  if (id >= 200 && id < 300) return "Thunderstorm";
  if (id >= 300 && id < 400) return "Drizzle";
  if (id >= 500 && id < 600) return "Rain";
  if (id >= 600 && id < 700) return "Snow";
  if (id >= 700 && id < 800) return "Atmosphere";
  if (id === 800) return "Clear";
  if (id >= 800 && id < 900) return "Clouds";
}

export function getTempColor(temp) {
  if (temp <= 0) return "text-blue-400";
  if (temp <= 15) return "text-sky-500";
  if (temp <= 25) return "text-green-500";
  if (temp <= 30) return "text-orange-400";
  return "text-red-500";
}

export function getWeatherCategory(weatherSt) {
  if (!weatherSt) return "default";
  if (weatherSt >= 200 && weatherSt < 300) return "thunderstorm";
  if (weatherSt >= 300 && weatherSt < 400) return "drizzle";
  if (weatherSt >= 500 && weatherSt < 600) return "rain";
  if (weatherSt >= 600 && weatherSt < 700) return "snow";
  if (weatherSt >= 701 && weatherSt < 800) return "atmosphere";
  if (weatherSt === 800) return "clear";
  if (weatherSt >= 801 && weatherSt < 900) return "clouds";
  return "default";
}

export function dateWeatherBackground(temp) {
  if (temp <= 0) return "bg-[#789CCE]";
  if (temp <= 15) return "bg-[#D1EAF5]";
  if (temp <= 25) return "bg-[#E1E7E7]";
  if (temp <= 30) return "bg-[#FBD5B0]";
  return "bg-[#FFC6D0]";
}

export function mainWeatherBackground(temp) {
  if (temp <= 0) return "bg-gradient-to-r from-[##fafafb] to-[#789CCE]";
  if (temp <= 15) return "bg-gradient-to-r from-[#D1EAF5] to-[#E1E7E7]";
  if (temp <= 25) return "bg-gradient-to-r from-[#E1E7E7] to-[#FBD5B0]";
  if (temp <= 30) return "bg-gradient-to-r from-[#FBD5B0] to-[#FFC6D0]";
  return "bg-[#FFC6D0]";
}
