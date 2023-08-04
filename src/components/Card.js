import React from 'react'
import { useWeather } from '../context/Weather'

export default function Card() {
    const weather = useWeather()

    if (!weather.data || weather.data.error) return (
        <div className="card">
            Invalid City name !! 😭
        </div>
    )
    return (
        <div className='card' >
            <div className="upper">
                <img src={weather.data && weather.data.current.condition.icon} alt="" />
                <div className="right">
                    <h2>{weather.data.current.temp_c}°C</h2>
                    <p style={{fontSize:"14px"}} ><i>feels like {weather.data.current.feelslike_c}°C</i></p>
                    <p>{weather.data.current.condition.text}</p>
                </div>
            </div>
            <h3>{weather.data.location.name}</h3>
            <p>{weather.data.location.region},{weather.data.location.country} </p>
            <p>Localtime - {weather.data.location.localtime}</p>
        </div>
    )
}
