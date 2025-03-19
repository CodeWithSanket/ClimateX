import WeatherInfo from "../../Interface/WeatherInfo";
import clearNight from '../../Assets/clearNight.png';
import DayCloudy from '../../Assets/partly-cloudy-day.png';
import Rain from '../../Assets/Rain.png';
import SunnyDay from '../../Assets/SunnyDay.png';
import ClearDayNight from '../../Assets/ClearDayNight.png';
import Mist from '../../Assets/Mist.png'

const getIcon = (condition: { text: string }) => {
    if (condition.text === "Partly Cloudy" || condition.text === "Overcast") {
        return DayCloudy;
    } else if (condition.text === "partly-cloudy-night") {
        return clearNight;
    } else if (condition.text === "Patchy rain nearby" || condition.text === "Light rain") {
        return Rain;
    } else if (condition.text === "clear-day") {
        return SunnyDay;
    } else if (condition.text === "Clear") {
        return ClearDayNight;
    } else if (condition.text === "Mist") {
        return Mist;
    } 
}

function WeatherImage({ condition }: WeatherInfo) {

    const Weather = getIcon(condition);


    return (
        <img
            src={Weather}
            alt="Weather"
            className="w-full h-[150px] text-center mt-5 mb-[100px]"
        />
    )
}

export default WeatherImage;