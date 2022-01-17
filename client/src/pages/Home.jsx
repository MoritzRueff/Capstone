import "../App.css";
import SearchForDogs from "../components/SearchForDog";

import DogCard from "./DogCard";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function Home({ dogs }) {
  return (
    <div>
      <Container>
        <NavLink to="/AddDog" style={{ textDecoration: "none" }}>
          <Para> Add Doggo</Para>
        </NavLink>
        <NavLink to="/ShelterRegister" style={{ textDecoration: "none" }}>
          <Para>Register as shelter / Login</Para>
        </NavLink>
      </Container>
      {/* <ButtonConti><NavLink to="/AddDog">
          <button primary as={NavLink}>Add Dog</button>
        </NavLink>
        <NavLink to="/ShelterRegister">
          <button primary as={NavLink}>Register as shelter / Login</button>
        </NavLink>
        </ButtonConti> */}
      <SearchForDogs />
      <DogCard dogs={dogs} />
    </div>
  );
}

/* styled-components */

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

const Para = styled.p`
  color: var(--secondary);
  background-color: var(--primary);
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5rem;
`;
