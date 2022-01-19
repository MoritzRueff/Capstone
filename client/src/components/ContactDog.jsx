import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
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
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
        />
        <ButtonB type="submit" color="green">
          Apply
        </ButtonB>
      </Form>
    </Container>
  );
};
export default ContactDog;
const Container = styled.div`
  border: 1px solid var(--third);
  border-radius: 5px;
  width: 85%;
  margin: auto;
  margin-bottom: 1rem;
  display: grid;
  justify-items: center;
  background-color: var(--fourth);
`;
const ButtonB = styled.button`
  background-color: var(--third);
  border: 1px solid black;
  width: 5rem;
`;
