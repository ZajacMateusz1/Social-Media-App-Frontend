import { useActionData } from "react-router-dom";
import { registerAction } from "../../utils/user/userActions";
import CustomForm from "../components/CustomForm";
import InputElement from "../../shared/InputElement";

export default function Register() {
  const errors = useActionData<typeof registerAction>();
  return (
    <>
      <CustomForm
        headerText="Create new account"
        method="post"
        buttonText="Register"
        bottomLink="/login"
        bottomLinkMessage="Already have an account?"
      >
        <InputElement
          id="name"
          name={"name"}
          type="text"
          error={errors?.name?._errors[0]}
        >
          Name
        </InputElement>
        <InputElement
          id="lastName"
          name={"lastName"}
          type="text"
          error={errors?.lastName?._errors[0]}
        >
          Last name
        </InputElement>
        <InputElement
          id="email"
          name={"email"}
          type="email"
          error={errors?.email?._errors[0]}
        >
          Email
        </InputElement>
        <InputElement
          id="password"
          name={"password"}
          type="text"
          error={errors?.password?._errors[0]}
        >
          Password
        </InputElement>
        <InputElement
          id="repeatPassword"
          name={"repeatPassword"}
          type="text"
          error={errors?.repeatPassword?._errors[0]}
        >
          Repeat password
        </InputElement>
      </CustomForm>
    </>
  );
}
