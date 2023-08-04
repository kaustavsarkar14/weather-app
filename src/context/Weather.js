import { createContext, useContext, useState } from "react";
import { getWeatherData, getWeatherDataForLocation } from "../api";
const WeatherContext = createContext(null)


export const useWeather = ()=>{
    return useContext(WeatherContext)
}

export const WeatherProvider =(props)=>{
    const [data, setData] = useState(null)
    const [search, setSearch] = useState('')
    const fetchData =async ()=>{
        const res = await getWeatherData(search)
        setData(res)
    }
    const getUserLocation =()=>{
        navigator.geolocation.getCurrentPosition((position)=>getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then(data=>setData(data)))
    }
    return <WeatherContext.Provider value={{data, search,setData,setSearch,fetchData,getUserLocation}}>
        {props.children}
    </WeatherContext.Provider> 
}