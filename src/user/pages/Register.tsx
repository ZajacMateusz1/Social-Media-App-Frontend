import Form from "../components/Form";
import InputElement from "../../shared/InputElement";

export default function Register() {
  return (
    <Form
      headerText="Create new account"
      bottomLink="/login"
      bottomLinkMessage="Already have an account?"
    >
      <InputElement id="name" type="text">
        Name
      </InputElement>
      <InputElement id="lastName" type="text">
        Last name
      </InputElement>
      <InputElement id="email" type="email">
        Email
      </InputElement>
      <InputElement id="password" type="password">
        Password
      </InputElement>
      <InputElement id="repeatPassword" type="password">
        Repeat password
      </InputElement>
    </Form>
  );
}
