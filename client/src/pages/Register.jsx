import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../App.css";

export default function Register({ setToken }) {
  const [userMail, setUserMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userMail,
      password,
    });
    setToken(token);
  };

  return (
    <Container>
      <div>
        <h3>Registration as shelter</h3>
        <label>E-Mail</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
        <RegisterButtons>Register</RegisterButtons>
      </div>
    </Container>
  );
}

Register.propTypes = {
  setToken: PropTypes.func.isRequired,
};

/* styled-components */

const Container = styled.div`
  display: flex;
  align-content: center;
`;

const RegisterButtons = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
