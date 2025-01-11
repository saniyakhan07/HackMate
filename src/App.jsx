import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/navbar'
import Herosection from './Components/Herosection/Herosection'
import Footer from './Components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar></Navbar>
       <Herosection></Herosection>
       <Footer></Footer>
    </>
  )
}

export default App
