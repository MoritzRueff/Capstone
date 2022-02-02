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

  const renderCorrectDogCard = () => {
    if (filterDogs.length > 0) {
      return <DogCard dogs={filterDogs} />;
    } else if (dogs) {
      return <DogCard dogs={dogs} />;
    }
  };

  return (
    <Container>
      <Searchbar dogs={dogs} onFilter={searchDogs} />
      {renderCorrectDogCard()}
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  padding: 0.5rem;
`;
