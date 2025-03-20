import { createContext } from "react";

interface ActiveContextType {
    isActive: boolean;
    setIsActive(value: boolean): void;
}

const ActiveContext = createContext(<ActiveContextType>{
    isActive: true,
    setIsActive: () => { }
})

export default ActiveContext;