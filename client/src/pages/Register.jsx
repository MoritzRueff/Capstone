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
      navigate("/shelter");
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
        <Form onSubmit={handleSubmit}>
          <h3>Register as shelter</h3>
          <Formlabel>E-Mail</Formlabel>
          <Formminput
            required
            type="email"
            placeholder="examplemail@mail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Formlabel>Name</Formlabel>
          <Formminput
            required
            type="name"
            placeholder="Example Shelter Munich"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Formlabel>Password</Formlabel>
          <Formminput
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Formlabel>Confirm Password</Formlabel>
          <Formminput
            required
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <RegisterButtons>Register</RegisterButtons>
        </Form>
      </div>
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: block;
  padding: 0.5rem;
  margin: 0.9vw 0;
  border: 0;
`;

const Formminput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

const Formlabel = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
  margin: 0 0 2vh 0;
`;

const RegisterButtons = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
