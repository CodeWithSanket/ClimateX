import { useContext, useEffect, useState } from "react";
import SearchContext from "../../../context/useSearchContext";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import WeatherInfo from "../../../Interface/WeatherInfo";
import DataContext from "../../../context/useDataContext";


function SearchButtonIcon() {
    const { locationValue, setLocationValue, inputValue, setInputValue } = useContext(SearchContext);
    const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
    const { setData } = useContext(DataContext);

    const handleClick = () => {
        if (locationValue.length > 0) {
            setIsButtonClicked(true);
            setLocationValue("");
            setInputValue(locationValue);
        }
    }

    useEffect(() => {
        const fetchDataFromUrl = async (inputValue: string) => {
            try {
                const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=7a3b3af98d3e464b80e183152251503&q=${inputValue}`);
                const weather: WeatherInfo = {
                    condition: {
                        text: response.data.current.condition.text,
                    },
                    currentInfo: {
                        humidity: response.data.current.humidity,
                        is_day: response.data.current.is_day,
                        curr_time: response.data.location.localtime,
                        temp_c: response.data.current.temp_c,
                        temp_f: response.data.current.temp_f,
                        wind_dir: response.data.current.wind_dir,
                        wind_kph: response.data.current.wind_kph,
                        wind_mph: response.data.current.wind_mph,
                    },
                    location: {
                        country: response.data.location.country,
                        cityName: inputValue,
                        region: response.data.location.region,
                    }
                }
                setData(weather);
                setIsButtonClicked(false);
            } catch (e) {
                console.error("Error: ", e);
            }
        }

        if (isButtonClicked && inputValue) {
            fetchDataFromUrl(inputValue);
        }
    }, [isButtonClicked, inputValue, setData])

    return (
        <>
            <div>
                <button
                    onClick={handleClick}
                    className="flex justify-center items-center min-w-[40px] h-10 border-none rounded-r-md bg-blue-500 text-white text-sm cursor-pointer">
                    <IoSearch />
                </button>
            </div>
        </>
    )
}

export default SearchButtonIcon;