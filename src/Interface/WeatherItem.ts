interface WeatherItem {
    time: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    uv: number;
    wind_kmph: number;
    humidity: number;
    condition: {
        text: string;
    }
}

export default WeatherItem;