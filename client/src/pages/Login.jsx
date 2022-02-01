import "../App.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const [error, setError] = useState({ value: "" });

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/profile");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/login",
        {
          email,
          password,
        },
        config
      );

      if (data.token && data.token !== "") {
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/profile");
      } else {
        throw new Error("Could not authenticate user.");
      }
    } catch (error) {
      alert("Oops, email or password not correct! " + error.message);
    }
  };

  return (
    <Container>
      <div>
        <Form onSubmit={handleSubmit}>
          <h3>Login as shelter</h3>
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
          <RegisterButtons>Login</RegisterButtons>
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
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
`;

const Formlabel = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
  margin: 0 0 2vh 0;
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

const RegisterButtons = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
