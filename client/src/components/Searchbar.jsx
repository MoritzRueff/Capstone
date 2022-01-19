import { useState } from "react";
import styled from "styled-components";

export default function Searchbar({ dogs }) {
  const [findDog, setFindDog] = useState("");
  const [BttActive, setBttActive] = useState(false);

  return (
    <Container>
      <SearchButton
        onClick={() => setBttActive(!BttActive)}
        className={BttActive ? "inactive" : "active"}
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
      <ul>
        {BttActive
          ? dogs
              .filter((item) =>
                item.name.toLowerCase().includes(findDog.toLowerCase())
              )
              .map((dog) => (
                <div key={dog._id}>
                  <SingleDogCard />
                </div>
              ))
          : true}
      </ul>
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
    color: white;
    padding: 0.5rem;
    background-color: var(--secondary);
    border: 1px solid black;
    border-radius: 0.5rem;
  }
`;

const SearchButton = styled.button`
  background-color: var(--third);
  border: 1px solid black;
  color: black;
  font-size: medium;
`;
