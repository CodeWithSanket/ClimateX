import Input from "./Input/Input";
import SearchButton from "./SearchButton/SearchButton";
import WeatherImage from "../WeatherImage/WeatherImage";
import { useContext } from "react";
import DataContext from "../../context/useDataContext";
import WeatherInformation from "./WeatherInformation/WeatherInformation";

function SideBar() {
    const { data } = useContext(DataContext);
    return (
        <div
            className="basis-3/12 flex flex-col items-center text-black h-full rounded-tl-3xl rounded-bl-3xl"
            style={{ backgroundColor: "rgba(255,255,255,0.814)" }}>
            <div className="flex items-center justify-between relative mt-8 mb-7">
                <Input />
                <SearchButton />
            </div>
            {/* Weather Image */}
            <div>
                <WeatherImage />
            </div>
            {/* Weather Information */}
            <div>
                {data && <WeatherInformation {...data}/>}
            </div>
        </div>
    )
}

export default SideBar;


