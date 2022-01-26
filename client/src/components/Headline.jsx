import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logoIdefix.png";

function Headline() {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Head>
        <Container>
          {/* <IdefixImg src={logo} alt="Logo" /> */}
          <NavLink to="/Register" style={{ textDecoration: "none" }}>
            <Para>Register </Para>
          </NavLink>
          <Head1>Idefix</Head1>
          <NavLink to="/Login" style={{ textDecoration: "none" }}>
            <Para>Login </Para>
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
  padding: 0.2rem;
`;

const IdefixImg = styled.img`
  width: 2.5rem;
  padding-right: 2rem;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Para = styled.p`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;

const Head1 = styled.h1`
  font-size: 15px;
  font-family: "ObelixPro";
`;
