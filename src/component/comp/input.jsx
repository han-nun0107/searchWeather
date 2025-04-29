import { useRef, useContext } from "react";
import { WeatherContext } from "../../context/weatherContext";

function InputForm() {
  const { setCity } = useContext(WeatherContext);
  const inputRef = useRef();

  const handleSubmit = () => {
    const value = inputRef.current.value
      .trim()
      .toLowerCase()
      .replace(/\s/g, "");
    if (value) {
      setCity(value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <input
        type="text"
        ref={inputRef}
        placeholder="지역을 입력 해주세요"
        className="
        bg-white
          border border-gray-300 rounded-lg 
          p-2 w-64
          focus:outline-none focus:ring-2 focus:ring-blue-400
          transition
        "
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        onClick={handleSubmit}
        className="
          border border-black rounded-lg
          p-2 w-24
          bg-white
          hover:bg-black hover:text-white 
          transition-colors
          active:scale-95
        "
      >
        검색
      </button>
    </div>
  );
}

export default InputForm;
