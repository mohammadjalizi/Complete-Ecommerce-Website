import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'

import Shop from './pages/Shop'
import Footer from './footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar/>
<Shop/>
<Footer/>
    </>
  )
}

export default App
