import styled from 'styled-components';
import '../App.css'

export default function DogCard ( {dog} ) {
    return (
      <>
     <h2>{dog.name}</h2>
      </>
    );
  }

  /* styled-components */

  /* const Container = styled.div`
    border: 1px solid var(--primary);
    border-radius: 5px;
    width: 85%;
    margin: auto;
    margin-bottom: 1rem;
  ` */
  /* const DogData = styled.div`
   color: purple,
   background-color: yellow, 
  `  */
  /* const DogImage = styled.p`
  border-radius: 100px;
  justify-self: center;
  ` */