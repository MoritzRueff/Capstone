import styled from "styled-components"

export default function SearchForDogs () {

   
    return (
        <Form>
            <label>
            <input type="text" name="name" placeholder="Search for specific dog"/>
            </label>
        </Form>      
    )
}

/* styled-components */

const Form = styled.form`
    display: grid;
    justify-content: center;
    input {
    color:black;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: var(--secondary);
    border:none;
    border-radius: 0.5rem;
    }
`