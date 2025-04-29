import { useState } from "react";
import { WeatherContext } from "./weatherContext";

export function WeatherProvider({ children }) {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("서울");
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        city,
        setCity,
        error,
        setError,
        apiKey,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
