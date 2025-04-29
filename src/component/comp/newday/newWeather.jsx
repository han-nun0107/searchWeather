function NewWeather({ index, content }) {
  return (
    <>
      <div
        className="
              bg-white 
                shadow-lg 
                rounded-2xl 
                p-6 
                w-full 
                max-w-md 
                text-center
                transition-transform transform hover:scale-105
                    "
      >
        <p className="flex justify-center items-center font-black text-2xl mb-2">
          오늘의 날씨
        </p>
        <p>Index:{index}</p>
        {content}
      </div>
    </>
  );
}

export default NewWeather;
