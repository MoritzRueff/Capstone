import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function DogCard({ key, dog_name, breed, age, gender, location, dog_image }) {
  return (
    <div>
      {/* <DogImage src={dog_image} /> */}
      <DogData>{dog_name}</DogData>
    </div>
  )
}

const DogData = styled.div`
    background-color: black`
