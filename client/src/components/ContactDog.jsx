import React from "react";
import emailjs from "emailjs-com";
import { Input, TextArea } from "semantic-ui-react";
import Swal from "sweetalert2";
import styled from "styled-components";

const SERVICE_ID = "service_im2pldo";
const TEMPLATE_ID = "template_pfnrtba";
const USER_ID = "user_9HhEUdaMixfPfl4LLnxXP";

const ContactDog = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Container>
      <ContactForm onSubmit={handleOnSubmit}>
        <FormLabel>E-Mail</FormLabel>
        <ContInput
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
        />
        <FormLabel>Name</FormLabel>
        <ContInput
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
        />
        <FormLabel>Your Message</FormLabel>
        <ContInput
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <Button type="submit" color="green">
          Apply
        </Button>
      </ContactForm>
    </Container>
  );
};
export default ContactDog;

/* styled-components */

const Button = styled.button`
  background-color: var(--third);
  border: 1px solid black;
  width: 5rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ContactForm = styled.form`
  display: block;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
`;

const ContInput = styled.input`
  display: block;
  width: 50%%;
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  margin: 0.9vw 0;
  border: 0;
  border-radius: 5px;
  font-size: 20px;
`;

const FormLabel = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
  margin: 0 0 2vh 0;
`;
