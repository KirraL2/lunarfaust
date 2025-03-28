import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/about'
import AnimatedBackgroundSection from './components/introduction'

function App() {

  return (
    <>
      <div className='container'>
        <AnimatedBackgroundSection/>
        <AboutMe/>
      </div>
    </>
  )
}

export default App
