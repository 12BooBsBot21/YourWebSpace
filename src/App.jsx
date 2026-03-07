import { useState, useEffect, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StartPage from './components/StartPage'
import SecondPage from './components/secondPage'
import ButtonToTab from './components/ButtonToTab'

function App() {
  const [openTab, setOpenTab] = useState('startPage')

  return (
    <>
      <main>
        {openTab === 'startPage' && <StartPage setState={() => setOpenTab('secondPage')} />}
        {openTab === 'secondPage' && <SecondPage />}
      </main>
    </>
  )
}

export default App
