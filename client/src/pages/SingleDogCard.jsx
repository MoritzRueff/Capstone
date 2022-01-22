import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ContactDog from "../components/ContactDog";
import "../App.css";
export default function SingleDogCard({ dogs }) {
  const { dogId } = useParams();

  const oneDog = dogs.find((dog) => dog._id === dogId);

  return (
    <div>
      <h2>{oneDog.name}</h2>
      <Wrapper>
        <Image src={oneDog.image} />
        <p>
          Hi! My name is {oneDog.name}! I´m {oneDog.age} years old and a{" "}
          {oneDog.gender}! I´m currently located in {oneDog.location}. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sed quas, iure quam
          eveniet tenetur nostrum in numquam repellat ex alias voluptatum amet
          quibusdam possimus neque ipsam deleniti ipsa. Pariatur, magni.
        </p>
        <p>
          <ContactDog />
        </p>
      </Wrapper>
    </div>
  );
}
/* styled-components */

const Wrapper = styled.div`
  border: 1px solid var(--third);
  border-radius: 5px;
  width: 85%;
  margin: auto;
  margin-bottom: 1rem;
  justify-items: center;
  background-color: var(--fourth);
`;
const Image = styled.img`
  width: 250px;
  border-radius: 5px;
  margin-top: 0.5rem;
`;
