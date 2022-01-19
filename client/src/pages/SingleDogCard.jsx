import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DogCard from "../components/DogCard";
import { ReactDOM } from "react";

export default function SingleDogCard({ dogs }) {
  const { dogId } = useParams();

  // console.log(dogId);

  const oneDog = dogs.find((dog) => dog._id === dogId);
  // console.log(oneDog);

  return (
    <Container>
      <h2>{oneDog.name}</h2>
      <Image src={oneDog.image} />
      <p>
        Hi! My name is {oneDog.name}! I´m {oneDog.age} years old and a{" "}
        {oneDog.gender}! I´m currently located in {oneDog.location}
      </p>
      <p> Apply for me </p>
    </Container>
  );
}
/* styled-components */

const Container = styled.div`
  border: 1px solid var(--primary);
  border-radius: 5px;
  width: 85%;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const Image = styled.img`
  width: 250px;
  border-radius: 5px;
`;
