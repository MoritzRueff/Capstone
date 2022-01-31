import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";

export default function Profile() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate("");
  const userInfo = localStorage.getItem("userInfo");
  if (!userInfo) {
    navigate("/login");
    return false;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name != name) {
      alert("error happend");
    } else {
      alert("New dog added to database");
      navigate("/");
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { regDog } = await axios.post(
          "http://localhost:4000/api/dogs",
          {
            name,
            breed,
            age,
            gender,
            size,
            image,
            location,
          },
          config
        );
        console.log(regDog);
      } catch (error) {
        alert("Oops, something is wrong! " + error.message);
      }
    }
  };

  return (
    <Container>
      <h2>Profile page</h2>
      <h3>Add new dog</h3>
      <Form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          required
          type="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Breed</label>
        <input
          required
          type="breed"
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
        <label>Age</label>
        <input
          required
          type="number"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label>Gender</label>
        <select
          id="gender"
          required
          type="name"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          {" "}
          <option value="female">female</option>
          <option value="male">male</option>
        </select>
        <label>Size</label>
        <input
          required
          type="number"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <label>Image</label>
        <input
          required
          type="url"
          value={image}
          onChange={(e) => {
            setImage(e.target.value);
          }}
          placeholder="please only per url"
        />
        <label>Location</label>
        <input
          required
          type="name"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <AddDogBtn>Add new dog to database</AddDogBtn>
      </Form>
    </Container>
  );
}

/* styled-components */

const Container = styled.div`
  justify-content: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
`;
const AddDogBtn = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
