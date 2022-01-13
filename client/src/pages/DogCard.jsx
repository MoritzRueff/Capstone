import styled from 'styled-components';
import '../App.css'
import { useEffect } from 'react';


export default function DogCard ( { key, name, breed, age, gender, dog_image, location }) {
  
  useEffect(() => {
    async function fetchDogs() {
      try {
        const response = await fetch('/api/dogs')
        const DogOfApi = await response.json()
        setDogs(DogOfApi)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchDogs()
  }, [])

    return (
      <Container>
        <DogName>{name}</DogName>
        <DogData>{breed}</DogData>
        <DogData>{age}</DogData>
        <DogData>{gender}</DogData>
        <DogData>{location}</DogData>
        <DogImage>{dog_image}</DogImage>
        </Container>
    );
  }

  /* styled-components */

  const Container = styled.div`
    border: 1px solid var(--primary);
    border-radius: 5px;
    width: 85%;
    margin: auto;
    margin-bottom: 1rem;
  `
  const DogName = styled.h2`
    text-align: left; 
  `
  const DogData = styled.div`
   color: purple,
   background-color: yellow, 
  `
  const DogImage = styled.p`
  border-radius: 100px;
  justify-self: center;
  `