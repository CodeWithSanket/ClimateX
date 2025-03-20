import { getIcon } from "../../hooks/getFileIcon";
import WeatherItem from "../../Interface/WeatherItem"

export const WeatherCardDisplayF = ({ currentWeather }: { currentWeather: WeatherItem[] }) => {
    return (
        <div className="flex flex-wrap gap-5 mt-12 ml-7">
            {currentWeather && currentWeather.map((item, index) => {
                const weatherImage = getIcon(item.condition.text, item.is_day);
                console.log("WeatherImage: ", weatherImage);
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
                            <span>{`${item.temp_f}`}</span>
                            <span>°C</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}