import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import { useWeather } from './context/Weather';
import { getWeatherData } from './api';

function App() {
  const weather = useWeather()
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    const res = getWeatherData('new delhi').then(data=>weather.setData(data))
  },[])
  useEffect(()=>{
    weather.getUserLocation()
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  },[])


    if(loading) return (<img style={{margin:"auto", display:"block", marginTop:"5rem", width:"100vw", maxWidth:"35rem"}} src='https://i.pinimg.com/originals/53/32/38/533238dd9a8ebfeaf7a8f4d4c2cabab6.gif' />)

  return (
    <div className="App">
      <Input/>
      <button className='btn' disabled={!weather.search} value="Search" onClick={weather.fetchData}>Search</button>
     <Card/>
     

    </div>
  );
}

export default App;
