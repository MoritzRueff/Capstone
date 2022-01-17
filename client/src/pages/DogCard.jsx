import styled from "styled-components";
import "../App.css";

export default function DogCard({ dogs }) {
  console.log(dogs);
  return (
    <div>
      {dogs?.map((dog, key) => (
        <div key={dog._id}>
          <p>{dog.name}</p>
        </div>
      ))}
    </div>
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
