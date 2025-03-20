import { useState } from 'react';
import './App.css'
import SearchContext from './context/useSearchContext'
import Home from './Pages/Home'
import WeatherInfo from './Interface/WeatherInfo';
import DataContext from './context/useDataContext';
import ActiveContext from './context/useActiveContext';

function App() {
  const [locationValue, setLocationValue] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<WeatherInfo | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);

  return (
    <ActiveContext.Provider value={{ isActive, setIsActive }}>
      <SearchContext.Provider value={{ locationValue, setLocationValue, inputValue, setInputValue }}>
        <DataContext.Provider value={{ data, setData }}>
          <Home />
        </DataContext.Provider>
      </SearchContext.Provider>
    </ActiveContext.Provider>
  )
}

export default App
