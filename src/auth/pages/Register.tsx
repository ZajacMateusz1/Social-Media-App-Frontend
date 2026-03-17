import { useActionData } from "react-router-dom";
import { registerAction } from "../../utils/auth/userActions";
import CustomForm from "../components/CustomForm";
import InputElement from "../../shared/InputElement";

export default function Register() {
  const data = useActionData<typeof registerAction>();
  return (
    <>
      <CustomForm
        headerText="Create new account"
        method="post"
        buttonText="Register"
        bottomLink="/auth/login"
        bottomLinkMessage="Already have an account?"
        errorMessage={data?.message ?? ""}
      >
        <InputElement
          id="name"
          name="name"
          type="text"
          error={data?.errors?.name?._errors[0]}
        >
          Name
        </InputElement>
        <InputElement
          id="lastName"
          name="lastName"
          type="text"
          error={data?.errors?.lastName?._errors[0]}
        >
          Last name
        </InputElement>
        <InputElement
          id="email"
          name="email"
          type="email"
          error={data?.errors?.email?._errors[0]}
        >
          Email
        </InputElement>
        <InputElement
          id="password"
          name="password"
          type="password"
          error={data?.errors?.password?._errors[0]}
        >
          Password
        </InputElement>
        <InputElement
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          error={data?.errors?.repeatPassword?._errors[0]}
        >
          Repeat password
        </InputElement>
      </CustomForm>
    </>
  );
}
