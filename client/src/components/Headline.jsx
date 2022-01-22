import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logoIdefix.png";

function Headline() {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Head>
        <Container>
          <NavLink to="/AddDog" style={{ textDecoration: "none" }}>
            <Para> Add Dog</Para>
          </NavLink>
          <IdefixImg src={logo} alt="Logo" />
          <h1>Idefix</h1>
          <NavLink to="/ShelterRegister" style={{ textDecoration: "none" }}>
            <Para>Register as shelter / Login</Para>
          </NavLink>
        </Container>
      </Head>
    </NavLink>
  );
}
export default Headline;

/* styled-components */

const Head = styled.header`
  color: var(--third);
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  padding: 0.2rem;
  font-family: "ObelixPro";
`;
const IdefixImg = styled.img`
  width: 4rem;
  padding-right: 2.5rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Para = styled.p`
  color: black;
  background-color: var(--third);
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
`;
