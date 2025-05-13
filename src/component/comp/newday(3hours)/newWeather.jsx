function NewWeather({ content }) {
  return (
    <>
      <div
        className={`
                border border-black rounded-2xl 
                p-6 
                w-full 
                max-w-md 
                text-center
                transition-transform transform hover:scale-105`}
      >
        <p className="flex justify-center items-center text-[#fafafb] text-2xl mb-2">
          오늘의 날씨
        </p>
        {content}
      </div>
    </>
  );
}

export default NewWeather;
