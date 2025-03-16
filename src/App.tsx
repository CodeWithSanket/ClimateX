import { useState } from 'react';
import './App.css'
import SearchContext from './context/useSearchContext'
import Home from './Pages/Home'
import WeatherInfo from './Interface/WeatherInfo';
import DataContext from './context/useDataContext';

function App() {
  const [locationValue, setLocationValue] = useState<string>("");
  const [data, setData] = useState<WeatherInfo | null>(null);

  return (
    <SearchContext.Provider value={{ locationValue, setLocationValue }}>
      <DataContext.Provider value={{ data, setData }}>
        <Home />
      </DataContext.Provider>
    </SearchContext.Provider>
  )
}

export default App
