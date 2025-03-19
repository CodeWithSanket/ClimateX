interface WeatherData {
    time: string;
    temp_c: number;
    condition: {
        text: string;
        icon: string;
    };
}

export default WeatherData;