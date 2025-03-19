import { createContext } from "react";

interface SearchContextProps {
    locationValue: string;
    setLocationValue(value: string): void;
    inputValue: string;
    setInputValue(value: string): void;
}


const SearchContext = createContext(<SearchContextProps>{});
export default SearchContext;