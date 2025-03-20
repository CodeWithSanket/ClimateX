import axios from "axios";
import UpperNavBar from "./UpperNavBar";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../context/useSearchContext";
import WeatherCardDisplay from "./WeatherCardDisplayC";
import WeatherData from "../../Interface/WeatherData";
import ActiveContext from "../../context/useActiveContext";
import { WeatherCardDisplayF } from "./WeatherCardDisplayF";

function MainData() {

    const { inputValue } = useContext(SearchContext);
    const [currentWeather, setCurrentWeather] = useState<WeatherData[]>([]);
    const { isActive } = useContext(ActiveContext);


    useEffect(() => {
        const fetchForecastData = async () => {
            const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=7a3b3af98d3e464b80e183152251503&q=${inputValue}&days=1&aqi=no&alerts=no`);
            console.log("Response: ", response.data?.forecast.forecastday[0].hour);
            setCurrentWeather([...currentWeather, response.data?.forecast.forecastday[0].hour])
        }
        if (inputValue) {
            fetchForecastData();
        }
    }, [inputValue])


    return (
        <div className="basis-9/12 text-black h-full bg-[#f6f6f8;] rounded-tr-3xl rounded-br-3xl">
            <UpperNavBar />
            {isActive ? <WeatherCardDisplay currentWeather={currentWeather[0]} /> : <WeatherCardDisplayF currentWeather={currentWeather[0]} />}
        </div>
    );
}

export default MainData;