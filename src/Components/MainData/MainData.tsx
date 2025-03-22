import axios from "axios";
import UpperNavBar from "./UpperNavBar";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../context/useSearchContext";
import WeatherCardDisplay from "./WeatherCardDisplayC";
import ActiveContext from "../../context/useActiveContext";
import { WeatherCardDisplayF } from "./WeatherCardDisplayF";
import WeatherInfoCard from "./WeatherInfoCard/WeatherInfoCard";
import DataContext from "../../context/useDataContext";
import WeatherItem from "../../Interface/WeatherItem";

function MainData() {
    const { inputValue } = useContext(SearchContext);
    const [currentWeather, setCurrentWeather] = useState<WeatherItem[]>([]);
    const { isActive } = useContext(ActiveContext);
    const { data } = useContext(DataContext);

    console.log("Data in MainData: ", data);

    useEffect(() => {
        const fetchForecastData = async () => {
            const response = await axios.get(
                `http://api.weatherapi.com/v1/forecast.json?key=7a3b3af98d3e464b80e183152251503&q=${inputValue}&days=1&aqi=no&alerts=no`
            );
            console.log("Response: ", response.data?.forecast.forecastday[0].hour);
            setCurrentWeather(response.data?.forecast.forecastday[0].hour || []);
        };

        if (inputValue) {
            fetchForecastData();
        }
    }, [inputValue]);

    return (
        <>
            <div className="basis-9/12 text-black h-full bg-[#f6f6f8] rounded-tr-3xl rounded-br-3xl p-6 overflow-auto">
                <UpperNavBar />
                {isActive ? <WeatherCardDisplay currentWeather={currentWeather} /> : <WeatherCardDisplayF currentWeather={currentWeather} />}
                {inputValue && (
                    <div className="mt-12">
                        <div>
                        <h2 className="text-[20px] font-semibold capitalize ml-8">Today's highlights</h2>
                        <div className="flex flex-wrap gap-10 p-4 m-8">
                            <WeatherInfoCard/>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </>
    );
}

export default MainData;
