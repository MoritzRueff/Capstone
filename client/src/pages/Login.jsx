import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import "../App.css";

async function Login(credentials) {
  return fetch("http://localhost:4000/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

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
        <h3>Login as shelter</h3>
        <label>E-Mail</label>
        <input
          type="text"
          onChange={(e) => {
            setUserMail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <RegisterButtons>Login</RegisterButtons>
      </div>
    </Container>
  );
}

Login.propTypes = {
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
