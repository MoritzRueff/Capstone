import { useState } from "react";
import styled from "styled-components";

export default function Searchbar({ dogs, onFilter }) {
  const [findDog, setFindDog] = useState("");
  const [BtnActive, setBtnActive] = useState(false);
  function handleClick() {
    onFilter(findDog);
  }
  console.log(findDog.name);
  return (
    <Container>
      <SearchButton
        onClick={handleClick}
        className={BtnActive ? "inactive" : "active"}
      >
        Search for dog
      </SearchButton>
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
