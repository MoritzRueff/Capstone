import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logoIdefix.png";

function Headline() {
  return (
    <NavLink to="/" style={{ textDecoration: "none" }}>
      <Head>
        <IdefixImg src={logo} alt="Logo" />
        <h1>Idefix</h1>
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
