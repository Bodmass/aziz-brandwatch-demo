import React, { useState, useEffect } from 'react'
import { Toggle, Icon } from '@brandwatch/axiom-components'
import './header.css'

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    document.body.className = darkMode ? 'ax-theme--night' : 'ax-theme--day'
  }, [darkMode])
  return (
    <div className="header">
      <div className="themeToggle">
        <Toggle
          onToggle={() => {
            setDarkMode(!darkMode)
          }}
        >
          {darkMode ? (
            <Icon name="moon" color="moon-lagoon" size="2rem" />
          ) : (
            <Icon name="sun" color="sun-maker" size="2rem" />
          )}
        </Toggle>
      </div>
    </div>
  )
}

export default Header
