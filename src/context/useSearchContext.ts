import { createContext } from "react";

interface SearchContextProps {
    locationValue: string;
    setLocationValue(value: string): void;
}


const SearchContext = createContext(<SearchContextProps>{});
export default SearchContext;