import "./App.css";
import Weekly from "./component/weekly";
import Day from "./component/day";
import { WeatherProvider } from "./context/weahterProvider";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import DayWeather from "./component/newday";

function Layout() {
  return (
    <>
      <header className="grid grid-cols-1 items-center justify-between bg-gray-800 h-13">
        <nav className="flex items-center justify-between gap-6 text-xl font-semibold text-white">
          <div className="flex ml-2">
            <Link to="/">Weather</Link>
          </div>
          <div className="mr-30">
            <Link
              to="/"
              className="hover:text-gray-400 transition-colors mr-10"
            >
              Day
            </Link>
            <Link
              to="/DayWeather"
              className="hover:text-gray-400 transition-colors mr-10"
            >
              DayWeather
            </Link>
            <Link
              to="/weekly"
              className="hover:text-gray-400 transition-colors"
            >
              Weekily
            </Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <WeatherProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Day />} />
            <Route path="home" element={<Day />} />
            <Route path="DayWeather" element={<DayWeather />} />
            <Route path="weekly" element={<Weekly />} />
          </Route>
        </Routes>
      </WeatherProvider>
    </BrowserRouter>
  );
}

export default App;
