function WeaklyContent({
  dateText,
  cityText,
  tempText,
  weatherText,
  item,
  windSpeed,
}) {
  return (
    <>
      <div className="">
        <h2 className="text-xl font-bold mb-2">날짜 : {dateText}</h2>
        <h2 className="text-lg font-semibold mb-2">{cityText} 날씨</h2>
        <p className="text-md mb-1">온도 : {tempText}</p>
        <p className="text-md mb-1">상태: {weatherText}</p>
        <p className="text-md mb-4">풍속: {windSpeed}</p>
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
