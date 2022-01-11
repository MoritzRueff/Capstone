import styled from "styled-components"
import '../App.css'
export default function () {
    return (
    <Container>
        <button>Tier inserieren</button>
        <button>Tierheim Login / Registrierung</button>
    </Container>
    )
}

/* styled-components */

const Container = styled.div`
    display:flex;
    flex-wrap: row;
    flex-flow: wrap;
    justify-content:center;
    `
