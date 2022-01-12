import styled from 'styled-components';
import '../App.css'
// import DogImage from '../components/DogImage'

export default function DogCard () {
    return (
      <Container>
        {/* <DogImage /> */}
        <h3>Bello</h3>
        <p>All infos about the dog</p>
        
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