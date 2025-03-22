interface WeatherInfo {
    condition: {
        text: string;
    },
    currentInfo: {
        humidity: string;
        is_day: number;
        curr_time: string;
        temp_c: number;
        temp_f: number;
        wind_dir: string;
        wind_kph: number;
        wind_mph: number;
        uv: number;
        visibility: number;
    },
    location: {
        country: string;
        cityName: string;
        region: string;
    }
}

export default WeatherInfo;