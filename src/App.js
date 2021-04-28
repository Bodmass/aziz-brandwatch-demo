import React from 'react'
import './App.css'
import Offices from './components/Offices'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <main>
      <>
        <div>
          <Header />
          <Offices />
          <Footer />
        </div>
      </>
    </main>
  )
}

export default App
