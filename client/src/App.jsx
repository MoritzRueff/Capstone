import "./App.css";
import AddDog from "./pages/AddDog";
import DogCard from "./components/DogCard";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import ShelterRegister from "./pages/ShelterRegister";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import SingleDogCard from "./pages/SingleDogCard";

function App() {
  const [dogs, setDogs] = useState([]);
  console.log(dogs);
  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await fetch("/api/dogs");
        const DogOfApi = await response.json();
        setDogs(DogOfApi);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchDogs();
  }, []);

  return (
    <div className="App">
      <Headline title="Idefix" />
      <Routes>
        <Route path="/" element={<Home dogs={dogs} />} />
        <Route path="/AddDog" element={<AddDog />} />
        <Route path="/dogs/:dogId" element={<SingleDogCard dogs={dogs} />} />
        <Route path="/ShelterRegister" element={<ShelterRegister />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Searchbar" element={<Searchbar dogs={dogs} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
