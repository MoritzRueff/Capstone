import styled from "styled-components";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import DogCard from "../components/DogCard";
import { ReactDOM } from "react";
import { ContactUs } from "../components/ContactUs.js";

export default function SingleDogCard({ dogs }) {
  const { dogId } = useParams();

  // console.log(dogId);

  const oneDog = dogs.find((dog) => dog._id === dogId);
  // console.log(oneDog);

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
          <form>
            <label>Apply for me: </label>
            <input type="teemailxt" name="user_email" placeholder="E-Mail" />
            <label>Message</label>
            <InputButton type="submit" value="Send" />
          </form>
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
`;
const Image = styled.img`
  width: 250px;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

const InputButton = styled.input`
  background-color: var(--third);
  color: white;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  margin-top: 0.5rem;
`;
