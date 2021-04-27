import React from 'react'
import OfficeCard from './OfficeCard'

const OFFICES = [
  {
    name: 'Brighton (HQ)',
    flag: 'gb',
    tel: '+44 (0) 1273 234 290',
    address: '1st Floor, Sovereign House, Church Street, Brighton, BN1 1UJ',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=brighton'
  },
  {
    name: 'New York',
    flag: 'us',
    tel: '+1 212 229 2240',
    address: '48 West 21st Street, Suite 1100, New York, NY, 10010',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=5128581'
  },
  {
    name: 'Boston',
    flag: 'us',
    tel: '+1 857 990-6500',
    address: '253 Summer St, Boston, Massachusetts, MA, 02210',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=4930956'
  },
  {
    name: 'London',
    flag: 'gb',
    tel: '',
    address: '5th Floor, Blue Fin Building, 110 Southwark Street, London, SE1 0SU',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=2643743'
  },
  {
    name: 'Madrid',
    flag: 'es',
    tel: '+34 677 300 962',
    address: 'WeWork, Calle Eloy Gonzalo, 27, Madrid, 28010',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=3117735'
  },
  {
    name: 'Paris',
    flag: 'fr',
    tel: '+33 (0)1 86 65 25 33',
    address: '92 avenue des Champs-Elysées, 75008 Paris, France',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=2988507'
  },
  {
    name: 'Stuttgart',
    flag: 'de',
    tel: '+49 (0)711 217 268 73',
    address: 'Brandwatch GmbH, Leuschnerstr. 12, 70174 Stuttgart Germany',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=2825297'
  },
  {
    name: 'Berlin',
    flag: 'de',
    tel: '+49 (0)305 683 700 40',
    address: 'Brandwatch GmbH, c/o WeWork, Stralauer Allee 6, 10245 Berlin, Germany',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=2950159'
  },
  {
    name: 'Singapore',
    flag: 'sg',
    tel: '+65 3163 9200',
    address: 'WeWork, 71 Robinson Road, Singapore 068895',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=1880252'
  },
  {
    name: 'Sydney',
    flag: 'au',
    tel: '',
    address: 'WeWork, Level 5, 383 George Street, Sydney NSW 2000',
    url: 'https://api.openweathermap.org/data/2.5/weather?id=2147714'
  }
]
const OfficeList = () => {
  return (
    <div className="officeContainer">
      {OFFICES.map(office => (
        <OfficeCard {...office} />
      ))}
    </div>
  )
}

export default OfficeList
