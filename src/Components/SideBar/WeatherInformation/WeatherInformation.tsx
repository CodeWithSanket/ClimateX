import WeatherInfo from "../../../Interface/WeatherInfo";

function WeatherInformation({ condition, currentInfo, location }: WeatherInfo) {
    return (
        <div className="flex flex-col items-center justify-between w-full h-full p-6 text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg max-w-md mx-auto">
            {/* Temperature Display */}
            <div className="flex items-start">
                <h1 className="text-6xl md:text-7xl font-light leading-none">{currentInfo.temp_c}</h1>
                <span className="text-3xl md:text-4xl -mt-1">°C</span>
            </div>
            
            {/* Current Time */}
            <div className="mt-2">
                <span className="text-sm md:text-base font-bold uppercase">{currentInfo.curr_time}</span>
            </div>
            
            {/* Divider */}
            <div className="w-full my-4">
                <hr className="border-white opacity-50" />
            </div>

            {/* Weather Condition */}
            <div className="mt-2">
                <span className="text-sm md:text-base capitalize">{condition.text}</span>
            </div>
            
            {/* Location */}
            <div className="mt-6 text-center text-lg font-semibold">
                <span>{location.cityName}, {location.country}</span>
            </div>
        </div>
    );
}

export default WeatherInformation;