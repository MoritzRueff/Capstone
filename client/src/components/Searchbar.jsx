import { useState } from "react";
import styled from "styled-components";

export default function Searchbar({ dogs, onFilter }) {
  const [findDog, setFindDog] = useState("");

  /* const sortedDogNames = dogs.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
  });

  const searchedDog = sortedDogNames.filter((dog) =>
    findDog !== "" && dog.name
      ? dog.name.toLowerCase().includes(findDog.toLowerCase())
      : true
  ); */

  function handleClick() {
    onFilter(findDog);
  }
  return (
    <Container>
      <SearchButton onClick={handleClick}>Search for dog</SearchButton>
      <div>
        <input
          className="searchinput"
          type="search"
          name="search"
          id="search"
          placeholder="search ..."
          value={findDog}
          onChange={(event) => setFindDog(event.target.value)}
        />
      </div>
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  display: grid;
  justify-content: space-evenly;
  border: 1px solid var(--third);
  border-radius: 5px;
  width: 85%;
  margin: auto;
  margin-bottom: 1rem;
  input {
    color: var(--third);
    padding: 0.5rem;
    background-color: var(--secondary);
    border: 0.5px solid black;
    border-radius: 5px;
  }
`;

const SearchButton = styled.button`
  background-color: var(--third);
  border: 1px solid black;
  border-radius: 5px;
  color: black;
  font-size: medium;
`;
