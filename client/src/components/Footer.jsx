import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      {/* <NavLink to="/AddDog" style={{ textDecoration: "none" }}>
        <Para> Add Dog</Para>
      </NavLink> */}
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Para>Home</Para>
      </NavLink>
      <NavLink to="/Impressum" style={{ textDecoration: "none" }}>
        <Para>Impressum</Para>
      </NavLink>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Para
          onClick={() => {
            localStorage.removeItem("userInfo");
            alert("Succesfully logged out");
          }}
        >
          Logout
        </Para>
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
  background-color: var(--third);
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: #000000;
  font-family: "ObelixPro";
  font-size: 10px;
`;
