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
          "/api/dogs",
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
    <>
      <h2>Shelter page</h2>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h3>Add new dog</h3>
          <Formlabel>Name</Formlabel>
          <Formminput
            required
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Formlabel>Breed</Formlabel>
          <Formminput
            required
            type="breed"
            placeholder="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
          <Formlabel>Age</Formlabel>
          <Formminput
            required
            type="number"
            placeholder="age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <Formlabel>Gender</Formlabel>
          <FormSelect
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
          </FormSelect>
          <Formlabel>Size</Formlabel>
          <Formminput
            required
            type="number"
            placeholder="dog size in cm"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <Formlabel>Image</Formlabel>
          <Formminput
            required
            type="url"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            placeholder="please only per url"
          />
          <Formlabel>Location</Formlabel>
          <Formminput
            required
            type="name"
            placeholder="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <Button>Add new dog to database</Button>
        </Form>
      </Container>
    </>
  );
}

/* styled-components */

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: block;
  margin: 1vw;
  padding: 0.5rem;
  width: 65%;
  border: 0;
  border: 1px solid black;
`;

const Formminput = styled.input`
  display: block;
  width: 97%;
  padding: 0.2rem;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

const Formlabel = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
  padding: 0.2rem;
  margin: 0 0 1vh 0;
`;

const FormSelect = styled.select`
  display: block;
  width: 96%;
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

const Button = styled.button`
  color: black;
  background-color: var(--third);
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 10px;
  font-family: "ObelixPro";
`;
