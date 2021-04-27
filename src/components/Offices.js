import React from 'react'
import { Icon } from '@brandwatch/axiom-components'
import OfficeList from './OfficeList'
import './offices.css'

const Offices = () => {
  return (
    <div>
      <div className="brandwatchOffice">
        <span>The Offices of</span>
      </div>
      <div className="brandwatch">
        <div className="bwIcon">
          <Icon name="brandwatch" size="4rem" />
        </div>
        <span>Brandwatch</span>
      </div>
      <OfficeList />
    </div>
  )
}

export default Offices
