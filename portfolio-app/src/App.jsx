import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './index.css'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero />
    </>
  )
}

export default App
