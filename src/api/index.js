const baseURL = "http://api.weatherapi.com/v1/current.json?key=c3ae946499a642e9900114202230408"

export const getWeatherData =async (cityName)=>{
    const res = await fetch(`${baseURL}&q=${cityName}&aqi=yes`)
    return await res.json()
}
export const getWeatherDataForLocation =async (lat, lon)=>{
    const res = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await res.json()
}

