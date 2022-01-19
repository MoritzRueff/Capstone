import "../App.css";
import Searchbar from "../components/Searchbar";
import DogCard from "../components/DogCard";
import FilterDogs from "../components/Filter";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Home({ dogs }) {
  return (
    <div>
      <Container>
        <NavLink to="/AddDog" style={{ textDecoration: "none" }}>
          <Para> Add Dog</Para>
        </NavLink>
        <NavLink to="/ShelterRegister" style={{ textDecoration: "none" }}>
          <Para>Register as shelter / Login</Para>
        </NavLink>
      </Container>
      <Searchbar />
      <DogCard dogs={dogs} />
    </div>
  );
}

/* styled-components */

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Para = styled.p`
  color: black;
  background-color: var(--third);
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
`;
