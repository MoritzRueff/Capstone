import './App.css'
import AddDog from './pages/AddDog'
import DogCard from './pages/DogCard'
import Home from './pages/Home'
import Impressum from './pages/Impressum'
import ShelterRegister from './pages/ShelterRegister'


import Footer from './components/Footer'
import Headline from './components/Headline'
// import SearchForDogs from './components/SearchForDog'

import React from 'react'
import styled from 'styled-components'

import { NavLink, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Headline title="Idefix"/>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddDog" element={<AddDog />} /> 
        <Route path="/DogCard" element={<DogCard />} />
        <Route path="/ShelterRegister" element={<ShelterRegister />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>

    <Footer />
    </div>
  )
}

export default App