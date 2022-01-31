import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import axios from "axios";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("New user registrated");
      navigate("/profile");
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { regData } = await axios.post(
          "http://localhost:4000/api/user",
          {
            email,
            name,
            password,
          },
          config
        );
        console.log(regData);
        localStorage.setItem("userInfo", JSON.stringify(regData));
      } catch (error) {
        alert("Oops, something is wrong! " + error.message);
      }
    }
  };

  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <h3>Register as shelter</h3>
          <label>E-Mail</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Name</label>
          <input
            required
            type="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label>Confirm Password</label>
          <input
            required
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <RegisterButtons>Register</RegisterButtons>
        </form>
      </div>
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterButtons = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
