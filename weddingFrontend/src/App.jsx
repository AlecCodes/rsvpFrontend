import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from './Components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
