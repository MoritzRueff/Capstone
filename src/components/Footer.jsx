import styled from "styled-components"

export default function Footer() {
    return (
        <FooterContainer>
            <nav>
                <FooterBar href="/">Home</FooterBar>
                <FooterBar href="/Impressum">Impressum</FooterBar>
            </nav>
        </FooterContainer>
    )
}

/* styled-components */


const FooterContainer = styled.footer`
    display:grid;
    justify-content: center;
    background-color: var(--secondary);
    `
const FooterBar = styled.button`
    background-color: var(--primary);
    color: var(--fourth);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    margin: 0.5rem
    `