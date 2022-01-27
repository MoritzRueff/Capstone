import "../App.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";
import Profile from "./Profile";

// import ProtectedRoute from "../components/ProtectedRoute";

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
        "http://localhost:4000/api/login",
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
          <label>E-Mail</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
          <RegisterButtons>Login</RegisterButtons>
        </Form>
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

const Form = styled.form`
  display: row;
`;
const RegisterButtons = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
