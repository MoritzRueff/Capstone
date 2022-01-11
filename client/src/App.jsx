import { useState } from 'react'
import './App.css'
import Headline from './components/Headline'
import Footer from './components/Footer'
import React from 'react'
import styled from 'styled-components'
import SearchForDogs from './components/SearchForDog'
import ButtonLogin from './components/ButtonLogin'

function App() {
  
  return (
    <div className="App">
    <Headline title="Idefix"/>
    <ButtonLogin />
    <form>
    <SearchForDogs />
    </form>
    
    <Footer />
    </div>
  )
}

export default App