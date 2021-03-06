import "../App.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import DogCard from "../components/DogCard";
import Searchbar from "../components/Searchbar";
import styled from "styled-components";

export default function Home({ dogs }) {
  const [filterDogs, setFilterDogs] = useState([]);

  function searchDogs(findDog) {
    setFilterDogs(
      dogs.filter((item) =>
        item.name.toLowerCase().includes(findDog.toLowerCase())
      )
    );
  }
  console.log(filterDogs);
  return (
    <Container>
      {/* <Container>
        <NavLink to="/AddDog" style={{ textDecoration: "none" }}>
          <Para> Add Dog</Para>
        </NavLink>
        <NavLink to="/ShelterRegister" style={{ textDecoration: "none" }}>
          <Para>Register as shelter / Login</Para>
        </NavLink>
      </Container> */}
      <Searchbar dogs={dogs} onFilter={searchDogs} />
      <DogCard dogs={dogs} />
    </Container>
  );
}

// DogCard anzeigen wenn filterDogs leer ist, sont nur filter dogs

/* styled-components */

const Container = styled.div`
  padding: 0.5rem;
`;

const Para = styled.p`
  color: black;
  background-color: var(--third);
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
`;
