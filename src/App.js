import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';
import { getWeatherData } from './api';

function App() {
  const weather = useWeather()
  // console.log(weather)

  useEffect(()=>{
    const res = getWeatherData('new delhi').then(data=>weather.setData(data))
  },[])
  useEffect(()=>{
    weather.getUserLocation()
  },[])



  return (
    <div className="App">
      <Input/>
      <button className='btn' disabled={!weather.search} value="Search" onClick={weather.fetchData}>Search</button>
     <Card/>
     <button className='btn'>Refresh</button>

    </div>
  );
}

export default App;
