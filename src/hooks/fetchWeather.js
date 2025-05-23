import { useEffect } from "react";
import { InputName } from "../component/Inputname";

export function useWeaklyWeather(city, apiKey, setWeather, setError) {
  useEffect(() => {
    const fetchWeather = async () => {
      const cityID = InputName[city];
      if (!cityID) {
        setError("지원하지 않는 지역입니다.");
        setWeather(null);
        return;
      }
      try {
        const respone = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${apiKey}&units=metric&lang=kr`
        );
        const data = await respone.json();

        if (data.error) {
          setError(data.message);
          setWeather(null);
        } else {
          setWeather(data);
          setError(null);
        }
        console.log(data);
      } catch (error) {
        console.log("날씨 데이터를 불러오는 중 오류 발생", error);
      }
    };
    fetchWeather();
  }, [city, apiKey, setError, setWeather]);
}

export function useDayWeather(city, apiKey, setWeather, setError) {
  useEffect(() => {
    const fetchWeather = async () => {
      console.log("현재 city 값:", city);
      console.log("InputName 객체 전체:", InputName);
      console.log("InputName[city]로 찾은 ID:", InputName[city]);
      const cityID = InputName[city];
      if (!cityID) {
        setError("지원하지 않는 지역입니다.");
        setWeather(null);
        return;
      }
      try {
        const respone = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}&units=metric&lang=kr`
        );
        const data = await respone.json();

        if (data.error) {
          setError(data.message);
          setWeather(null);
        } else {
          setWeather(data);
          setError(null);
        }
        console.log(data);
      } catch (error) {
        console.log("날씨 데이터를 불러오는 중 오류 발생", error);
      }
    };
    fetchWeather();
  }, [city, apiKey, setError, setWeather]);
}
