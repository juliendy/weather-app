import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherService";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: 'Berlin'  })
    console.log('data: ', data);
  }

  fetchWeather()

    return (
        <div className="mx-auto max-w-screen-md py-5 px-32 bg-gradient-to-br from bg-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
            <TopButtons />
            <Inputs />

            <TimeAndLocation />
            <TemperatureAndDetails />

            <Forecast title="hourly forecast" />
            <Forecast title="daily forecast" />
        </div>
    );
}

export default App;
