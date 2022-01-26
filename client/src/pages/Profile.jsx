import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import styled from "styled-components";
import axios from "axios";

export default function Profile() {
  /* const { userId } = useParams();

  const oneUser = users.find((user) => user._id === userId); */

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate("");

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
        const { regData } = await axios.post(
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
        console.log(regData);
      } catch (error) {
        alert("Oops, something is wrong! " + error.message);
      }
    }
  };

  return (
    <div>
      <h2>Profile page</h2>
      {/* <p>Welcome {oneUser.name}</p> */}
      <h3>Add new dog</h3>
      <form onSubmit={handleSubmit}>
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
        <input
          required
          type="name"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
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
      </form>
    </div>
  );
}

/* styled-components */

const AddDogBtn = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
