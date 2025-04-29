export default function WeatherContent({
  formattedDate,
  cityName,
  temp,
  weatherDesc,
  icon,
}) {
  return (
    <div>
      <h2>날짜 : {formattedDate}</h2>
      <h2>{cityName} 날씨</h2>
      <p>온도 : {temp}</p>
      <p>상태: {weatherDesc}</p>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="날씨 아이콘"
        className="mx-auto"
      />
    </div>
  );
}
