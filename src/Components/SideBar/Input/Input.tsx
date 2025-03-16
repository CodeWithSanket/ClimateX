import { useContext } from "react";
import SearchContext from "../../../context/useSearchContext";

function Input() {
    const { locationValue, setLocationValue } = useContext(SearchContext);
    return (
        <input
            type="text"
            placeholder="Search..."
            value={locationValue}
            className="w-full h-10 border border-gray-300 rounded-l-md px-4 bg-white focus:outline-none"
            onChange={(e) => setLocationValue(e.target.value)}
        />
    )
}

export default Input;