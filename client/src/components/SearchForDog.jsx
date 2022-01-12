import styled from "styled-components"

export default function SearchForDogs () {

    return (
        <Form>
            <label>Search for your dog: 
            <input type="text" name="name" placeholder="Enter dog name"/>
            </label>
        </Form>      
    )
}

/* styled-components */

const Form = styled.form`
    display: grid;
    justify-content: space-evenly;
    input {
    color:black;
    padding: 0.5rem;
    margin-bottom: 1rem;
    background-color: var(--secondary);
    border:none;
    border-radius: 0.5rem;

    }
`