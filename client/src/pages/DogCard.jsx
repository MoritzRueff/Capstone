import styled from "styled-components";
import "../App.css";
import { NavLink } from "react-router-dom";

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
          <NavLink to="DogCard/dog._id" style={{ textDecoration: "none" }}>
            <Info>More Infos</Info>
          </NavLink>
        </Container>
      ))}
    </div>
  );
}
const Container = styled.div`
  border: 1px solid var(--primary);
  border-radius: 5px;
  width: 85%;
  margin: auto;
  margin-bottom: 1rem;
`;
const Info = styled.button`
  color: var(--secondary);
  background-color: var(--primary);
  border: 1px solid black;
  border-radius: 15px;
  width: 50px;
`;

const Image = styled.img`
  width: 250px;
  border-radius: 5px;
`;

// <img src={`/img/${dog.image.src}.jpg`} width="50" />
