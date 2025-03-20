import SunnyDay from "../Assets/SunnyDay.png"
import clearNight from '../Assets/clearNight.png';
import DayCloudy from '../Assets/partly-cloudy-day.png';
import Rain from '../Assets/Rain.png';
import ClearDayNight from '../Assets/ClearDayNight.png';
import Mist from "../Assets/Mist.png"



export const getIcon = (weatherMode: string, is_day: number) => {
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