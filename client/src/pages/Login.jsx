import "../App.css";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import PropTypes from "prop-types";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/profile");
      console.log(userInfo);
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:4000/api/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      alert("Oops, email or password not correct! " + error.message);
    }
  };

  return (
    <Container>
      <div>
        {/*   {error && } */}
        <form onSubmit={handleSubmit}>
          <h3>Login as shelter</h3>
          <label>E-Mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <RegisterButtons>Login</RegisterButtons>
        </form>
      </div>
    </Container>
  );
}

/* Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}; */

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
