import styled from "styled-components";
import "../App.css";
import { NavLink } from "react-router-dom";
import SingleDogCard from "../pages/SingleDogCard";

export default function DogCard({ dogs }) {
  return (
    <div>
      {dogs?.map((dog, key) => (
        <Container key={dog._id}>
          <h2>{dog.name}</h2>
          <Image src={`${dog.image}`} />
          <p>Breed: {dog.breed}</p>
          <p>Age: {dog.age}</p>
          <p>Gender: {dog.gender}</p>
          <NavLink
            to={`/dogs/${dog._id}`}
            style={{ textDecoration: "none" }}
            element={<SingleDogCard />}
          >
            <Info>More Infos</Info>
          </NavLink>
        </Container>
      ))}
    </div>
  );
}

/* styled-components */

const Container = styled.div`
  border: 1px solid var(--third);
  border-radius: 5px;
  width: 85%;
  margin: auto;
  margin-bottom: 1rem;
  justify-items: center;
`;
const Info = styled.button`
  background-color: var(--third);
  border: 1px solid black;
  width: 5rem;
`;
const Image = styled.img`
  width: 250px;
  border-radius: 15px;
`;
