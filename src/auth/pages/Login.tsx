import { useActionData } from "react-router-dom";
import { loginAction } from "../../utils/auth/userActions";
import CustomForm from "../components/CustomForm";
import InputElement from "../../shared/InputElement";
export default function Login() {
  const data = useActionData<typeof loginAction>();
  return (
    <CustomForm
      headerText="Login to your account"
      method="post"
      buttonText="Login"
      bottomLink="/register"
      bottomLinkMessage="Create new account"
      errorMessage={data?.message ?? ""}
    >
      <InputElement
        id="email"
        name={"email"}
        type="email"
        error={data?.errors?.email?._errors[0]}
      >
        Email
      </InputElement>
      <InputElement
        id="password"
        name={"password"}
        type="password"
        error={data?.errors?.password?._errors[0]}
      >
        Password
      </InputElement>
    </CustomForm>
  );
}
