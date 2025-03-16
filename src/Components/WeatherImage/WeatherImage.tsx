import Weather from "../../Assets/Weather.png";

function WeatherImage() {
    return (
        <img
            src={Weather}
            alt="Weather"
            className="w-full h-[150px] text-center mt-5 mb-[100px]"
        />
    )
}

export default WeatherImage;