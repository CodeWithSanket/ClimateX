interface WeatherItem {
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
        text: string;
    }
}

export default WeatherItem;