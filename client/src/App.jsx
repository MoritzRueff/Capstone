import './App.css'
import AddDog from './pages/AddDog'
import DogCard from './pages/DogCard'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import ShelterRegister from './pages/ShelterRegister'
import Footer from './components/Footer'
import Headline from './components/Headline'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';

import { loadFromLocal, saveToLocal} from './lib/localStorage.js'


function App() {

  const [dogs, setDogs] = useState( loadFromLocal('_DOGS'))
  console.log(dogs)
  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await fetch('/api/dogs')
        const DogOfApi = await response.json()
        setDogs(DogOfApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchDogs()
  }, [])
  
  useEffect(() => {
    saveToLocal('_DOGS', dogs)
  }, [])

  return (
    <div className="App">
      <Headline title="Idefix"/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddDog" element={<AddDog />}/> 
        <Route path="/DogCard" element={<DogCard dogs={dogs}/>} />
        <Route path="/ShelterRegister" element={<ShelterRegister />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
    <Footer />
    </div>
  )
}

export default App