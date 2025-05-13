import { InputName } from "../Inputname";

function ApiUse({ setError, setWeather, city, apiKey }) {
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
        setError(data.error.message);
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
}

export default ApiUse;
