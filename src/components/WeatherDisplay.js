import React from 'react'
import { ProgressInfinite, AlertIcon } from '@brandwatch/axiom-components'
import './weather.css'

const WeatherDisplay = ({ isLoading, isError, data }) => {
  if (isLoading) {
    return <ProgressInfinite size="large" />
  }
  if (isError) {
    return <AlertIcon size="large" style="primary" type="error" />
  }
  if (data) {
    return (
      <div>
        {data.weather.map(w => (
          <div className="weatherContainer">
            <div className="weatherTemp">
              <img src={`http://openweathermap.org/img/wn/${w.icon}.png`} />
              <span>{Math.round(data.main.temp)}°C</span>
            </div>
            <span>
              Feels like {Math.round(data.main.feels_like)}°C. {w.description}
            </span>

            <div className="weatherExtra">
              <span>{data.wind.speed}</span>
              <span>Humidity: {data.main.humidity}%</span>
              <span>{data.main.pressure}hPa</span>
              <span>Visibility: {(data.visibility / 1000).toFixed(2)}km</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default WeatherDisplay
