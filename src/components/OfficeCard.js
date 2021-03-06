import React, { useEffect, useState } from 'react'
import { Card, CardContent, Flag } from '@brandwatch/axiom-components'
import { doFetch } from '../apiHelper'
import WeatherDisplay from './WeatherDisplay'

const OfficeCard = ({ name, flag, tel, address, url }) => {
  const [isFlipped, setisFlipped] = useState(0)
  const [cardData, setCardData] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await doFetch(url)
        if (!response.ok) {
          setIsError(true)
        } else {
          const data = await response.json()
          setCardData(data)
        }
      } catch (e) {
        setIsError(true)
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }

    if (url) {
      fetchData()
    }
  }, [url])
  return (
    <div className="officeCard">
      <Card
        active
        border
        borderRadius="small"
        shade="shade-1"
        shadow
        hover
        onClick={() => {
          isFlipped === 0 ? setisFlipped(360) : setisFlipped(0)
        }}
        size="large"
        style={{
          transform: `rotateY(${isFlipped}deg)`
        }}
      >
        <CardContent className="cardContent" size="large">
          <div className="locationName">
            {name}
            <div className="flagIcon">
              <Flag alpha2={flag} size="18px" />
            </div>
          </div>
          <WeatherDisplay isError={isError} isLoading={isLoading} data={cardData} />
          <div>
            <div className="address">{address}</div>
            <a href={'tel:' + tel}>{tel}</a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default OfficeCard
