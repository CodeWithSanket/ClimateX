import SunnyDay from "../../Assets/SunnyDay.png"
import clearNight from '../../Assets/clearNight.png';
import DayCloudy from '../../Assets/partly-cloudy-day.png';
import Rain from '../../Assets/Rain.png';
import ClearDayNight from '../../Assets/ClearDayNight.png';
import Mist from '../../Assets/Mist.png'

interface WeatherItem {
    time: string;
    temp_c: number;
    is_day: number;
    condition: {
        text: string;
    }
}

const getIcon = (weatherMode: string, is_day: number) => {
    console.log("WeatherMode: ", weatherMode);
    if (is_day) {
        // Day Event
        if (weatherMode === "Partly Cloudy" || weatherMode === "Overcast") {
            return DayCloudy;
        } else if (weatherMode === "Patchy rain nearby" || weatherMode === "Light rain") {
            return Rain;
        } else if (weatherMode === "clear-day") {
            return SunnyDay;
        } else if (weatherMode === "Mist") {
            return Mist;
        } else {
            return SunnyDay;
        }
    } else if (is_day === 0) {
        if (weatherMode === "Partly Cloudy" || weatherMode === "Overcast") {
            return DayCloudy;
        } else if (weatherMode === "partly-cloudy-night") {
            return clearNight;
        } else if (weatherMode === "Patchy rain nearby" || weatherMode === "Light rain") {
            return Rain;
        } else if (weatherMode === "Clear ") {
            return ClearDayNight;
        } else if (weatherMode === "Mist") {
            return Mist;
        }
    }

}



function WeatherCardDisplay({ currentWeather }: { currentWeather: WeatherItem[] }) {

    console.log("CurrentWeather: ", currentWeather)

    return (
        <div className="flex flex-wrap gap-5 mt-12 ml-7">
            {currentWeather && currentWeather.map((item, index) => {
                const weatherImage = getIcon(item.condition.text, item.is_day);
                return (
                    <div className="font-bold w-[100px] h-[130px] rounded-[20px] text-[#1a1a1a] bg-white text-center p-[10px_0] flex flex-col justify-between"
                        key={index}
                    >
                        {/* First Block for Time */}
                        <div>
                            <h2>{item.time.slice(10)}</h2>
                        </div>
                        {/* Second Block for Current Day Status */}
                        <div className="w-13 ml-6">
                            <img src={weatherImage} />
                        </div>

                        {/* Third Block for Temperature */}
                        <div>
                            <span>{item.temp_c}</span>
                            <span>°C</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WeatherCardDisplay;


