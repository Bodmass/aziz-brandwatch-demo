export const doFetch = url => {
  return fetch(`${url}&appid=${process.env.REACT_APP_WEATHER_ID}&units=metric`)
}
