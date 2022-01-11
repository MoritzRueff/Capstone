import { NavLink } from "react-router-dom"
import styled from "styled-components"
import '../App.css'
export default function Footer() {
    return (
        <FooterContainer>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Impressum">Impressum</NavLink>
        </FooterContainer>
    )
}

/* styled-components */

const FooterContainer = styled.footer`
    background-color: var(--secondary);
    display:flex;
    flex-wrap: row;
    flex-flow: wrap;
    justify-content:center;
    padding: 0.5rem;
    `
