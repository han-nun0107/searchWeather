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
