import { useNavigate } from "react-router-dom";

function ButtonNav() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate("/weekly")}
        className="
          border cursor-pointerborder border-black rounded-lg
          p-2 w-35
          bg-white
          hover:bg-black hover:text-white 
          transition-colors
          active:scale-95"
      >
        주간 날씨 보기
      </button>
    </>
  );
}

export default ButtonNav;
