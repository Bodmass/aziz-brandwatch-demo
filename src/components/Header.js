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
            <div className="moonIcon">
              <Icon name="moon" size="2rem" />
            </div>
          ) : (
            <div className="sunIcon">
              <Icon name="sun" size="2rem" />
            </div>
          )}
        </Toggle>
      </div>
    </div>
  )
}

export default Header
