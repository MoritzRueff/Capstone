import styled from "styled-components"
import '../App.css'
export default function Footer() {
    return (
        <FooterContainer>
            <nav>
                <button href="/">Home</button>
                <button href="/Impressum">Impressum</button>
            </nav>
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
    `
