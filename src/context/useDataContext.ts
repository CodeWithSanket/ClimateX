import { createContext } from "react";
import WeatherInfo from "../Interface/WeatherInfo";

interface DataContextType {
    data: WeatherInfo | null;
    setData: (data: WeatherInfo) => void;
}

const DataContext = createContext<DataContextType>({
    data: null,
    setData: () => {},
});

export default DataContext;