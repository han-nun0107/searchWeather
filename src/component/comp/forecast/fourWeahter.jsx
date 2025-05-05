function FourWeather({ index, content }) {
  return (
    <>
      <div key={index} data-index={index}>
        <div
          className="
                flex 
                justify-center items-center
                transition-transform transform hover:scale-105

                "
        >
          {content}
        </div>
      </div>
    </>
  );
}

export default FourWeather;
