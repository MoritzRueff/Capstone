import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Para>Home</Para>
      </NavLink>
      <NavLink to="/Impressum" style={{ textDecoration: "none" }}>
        <Para>Impressum</Para>
      </NavLink>
    </FooterContainer>
  );
}
/* styled-components */

const FooterContainer = styled.footer`
  background-color: var(--secondary);
  opacity: 0.8;
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  width: 100%;
  bottom: 0;
`;
const Para = styled.p`
  color: var(--secondary);
  background-color: var(--primary);
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.3rem;
`;
