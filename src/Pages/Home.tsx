import MainData from "../Components/MainData/MainData";
import SideBar from "../Components/SideBar/SideBar";
import Dayimage from "../Assets/Dayimage.jpg";

function Home() {
    return (
        <div className="h-[100vh]" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Dayimage})`
        }}>
            <div className="h-full mx-8 py-8 flex flex-row justify-center items-center">
                <SideBar />
                <MainData />
            </div>
        </div>
    );
}

export default Home;