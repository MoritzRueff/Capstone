import { NavLink } from "react-router-dom"
import styled from "styled-components"

function Headline() {
    return (
    <NavLink to="/">
    <Head>Idefix</Head> 
    </NavLink>
    )
    }
    export default Headline


    /* styled-components */

const Head = styled.h1`
    color: var(--primary);
    background-color: var(--secondary);
    display: grid;
    justify-content: center;
    margin-top:0;
    `
