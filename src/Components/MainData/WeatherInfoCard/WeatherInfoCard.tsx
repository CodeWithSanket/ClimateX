import { useContext } from "react";
import DataContext from "../../../context/useDataContext";


const WeatherInfoCard = () => {
    const { data } = useContext(DataContext);
    const curr_time = data?.currentInfo.curr_time.slice(10);
    return (
        <>
            <div className="w-full max-w-[250px] h-[150px] rounded-[20px] text-[#1a1a1a] bg-white p-[10px] px-[20px] flex flex-col">
                <h4 className="p-2 font-bold text-[#c2c2c2]">UV Index</h4>
                <div className="mt-3">
                    <p className="text-center text-2xl">{data?.currentInfo?.uv}</p>
                </div>
            </div>
            <div className="w-full max-w-[250px] h-[150px] rounded-[20px] text-[#1a1a1a] bg-white p-[10px] px-[20px] flex flex-col">
                <h4 className="p-2 font-bold text-[#c2c2c2]">Wind Status</h4>
                <div className="mt-3">
                    <p className="text-center text-2xl">{data?.currentInfo?.wind_kph}</p>
                </div>
            </div>
            <div className="w-full max-w-[250px] h-[150px] rounded-[20px] text-[#1a1a1a] bg-white p-[10px] px-[20px] flex flex-col">
                <h4 className="p-2 font-bold text-[#c2c2c2]">Sunrise & Sunset</h4>
                <div className="mt-3">
                    <p className="text-center text-2xl">{curr_time}</p>
                </div>
            </div>
            <div className="w-full max-w-[250px] h-[150px] rounded-[20px] text-[#1a1a1a] bg-white p-[10px] px-[20px] flex flex-col">
                <h4 className="p-2 font-bold text-[#c2c2c2]">Humidity</h4>
                <div className="mt-3">
                    <p className="text-center text-2xl">{data?.currentInfo?.humidity}</p>
                </div>
            </div>
            <div className="w-full max-w-[250px] h-[150px] rounded-[20px] text-[#1a1a1a] bg-white p-[10px] px-[20px] flex flex-col">
                <h4 className="p-2 font-bold text-[#c2c2c2]">Visibility</h4>
                <div className="mt-3">
                    <p className="text-center text-2xl">{data?.currentInfo?.visibility}</p>
                </div>
            </div>
            <div className="w-full max-w-[250px] h-[150px] rounded-[20px] text-[#1a1a1a] bg-white p-[10px] px-[20px] flex flex-col">
                <h4 className="p-2 font-bold text-[#c2c2c2]">Wind Direction</h4>
                <div className="mt-3">
                    <p className="text-center text-2xl">{data?.currentInfo?.wind_dir}</p>
                </div>
            </div>
        </>
    );
}

export default WeatherInfoCard;
