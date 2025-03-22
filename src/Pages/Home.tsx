import MainData from "../Components/MainData/MainData";
import SideBar from "../Components/SideBar/SideBar";
import Dayimage from "/src/Assets/Dayimage.jpg";
import NightImage from "../Assets/NightImage.jpg";
import { useContext } from "react";
import DataContext from "../context/useDataContext";


function Home() {
    const { data } = useContext(DataContext);

    const getBackgroundImage = (isDay: number) => {
        if (isDay) {
            return Dayimage;
        } else {
            return NightImage;
        }
    }


    return (
        <div className="h-[100vh]" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${getBackgroundImage(data?.currentInfo.is_day || 0)})`
        }}>
            <div className="h-full mx-8 py-8 flex flex-row justify-center items-center">
                <SideBar />
                <MainData />
            </div>
        </div>
    );
}

export default Home;