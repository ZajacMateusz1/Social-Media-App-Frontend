import Form from "../components/Form";
import InputElement from "../../shared/InputElement";
export default function Login() {
  return (
    <Form
      headerText="Login to your account"
      bottomLink="/register"
      bottomLinkMessage="Create new account"
    >
      <InputElement id="email" type="email">
        Email
      </InputElement>
      <InputElement id="password" type="password">
        Password
      </InputElement>
    </Form>
  );
}
