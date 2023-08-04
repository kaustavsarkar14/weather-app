import React from 'react'
import { useWeather } from '../context/Weather'

export default function Input() {
    const weather = useWeather()
    return (
        <input className='input-field' type="text"
        placeholder='Enter City name'
        value={weather.search} onChange={e=>weather.setSearch(e.target.value)} />
    )
}
