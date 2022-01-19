import { useState } from "react";
import styled from "styled-components";
import SinSingleDogCardgleDog from "../pages/SingleDogCard";

export default function SearchForDogs({ dogs }) {
  const [findDog, setFindDog] = useState("");
  const [isBtnActive, setIsBtnActive] = useState(false);

  return (
    <Container>
      <button
        onClick={() => setIsBtnActive(!isBtnActive)}
        className={isBtnActive ? "inactive" : "active"}
      >
        Search for dog
      </button>
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
      <div>
        {isBtnActive
          ? dogs
              .filter((item) =>
                item.name.toLowerCase().includes(findDog.toLowerCase())
              )
              .map((dog) => (
                <div key={dog._id}>
                  <SingleDogCard name={dog.name} image={dog.image} />
                </div>
              ))
          : true}
      </div>
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  display: grid;
  justify-content: space-evenly;
  input {
    color: black;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background-color: var(--secondary);
    border: none;
    border-radius: 0.5rem;
  }
`;
