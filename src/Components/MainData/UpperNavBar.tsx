import { useState } from "react";

function UpperNavBar() {

    const [isActive, setIsActive] = useState<boolean>(true);
    const [isColour, setIsColour] = useState<boolean>(true);

    const handleActiveState = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }

    const handleColourState = () => {
        if (isColour) {
            setIsColour(false);
        } else {
            setIsColour(true);
        }
    }


    return (
        <div className="flex justify-between items-center p-8">
            {/* Left Section: Today and Week Buttons */}
            <div className="flex gap-20 items-center">
                <button
                    className={isColour ? "text-blue-500 border-none bg-none text-[16px] font-bold text-[#495057] cursor-pointer capitalize" : "border-none bg-none text-[16px] font-semibold text-[#495057] cursor-pointer capitalize"}
                    onClick={handleColourState}
                >
                    Today
                </button>
                <button
                    className={!isColour ? "text-blue-500 border-none bg-none text-[16px] font-bold text-[#495057] cursor-pointer capitalize" : "border-none bg-none text-[16px] font-semibold text-[#495057] cursor-pointer capitalize"}
                    onClick={handleColourState}
                >
                    Week
                </button>
            </div>

            {/* Right Section: °C and °F Buttons */}
            <div className="flex gap-20 items-center">
                <button
                    onClick={handleActiveState}
                    className={isActive ? "w-[40px] h-[40px] font-bold rounded-[20px] border-none bg-black text-white text-[16px] text-[#495057] cursor-pointer" : "border-none bg-none text-[16px] font-bold text-[#495057]  cursor-pointer"}>
                    °C
                </button>
                <button
                    onClick={handleActiveState}
                    className={!isActive ? "w-[40px] h-[40px] font-bold rounded-[20px] border-none bg-black text-white text-[16px]text-[#495057] cursor-pointer" : "border-none bg-none text-[16px] font-bold text-[#495057] cursor-pointer"}>
                    °F
                </button>
            </div>
        </div>
    );
}

export default UpperNavBar;
