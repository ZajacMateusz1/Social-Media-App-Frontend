import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { z } from "zod";
import { RegisterFormSchema, RegisterSchema, LoginSchema } from "./userSchema";
import httpHelper from "../httpHelper";

export async function registerAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = RegisterFormSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    const errors = z.formatError(result.error);
    return { message: "", errors };
  }
  const userData = RegisterSchema.parse(result.data);
  const response = await httpHelper<string>(
    "http://localhost:5000/api/users/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    },
  );
  if (!response.ok) {
    return {
      message: response.data.message,
      errors: response.data.details,
    };
  }
  const token: string = response.data;
  localStorage.setItem("token", token);
  return redirect("/");
}

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = LoginSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    const errors = z.formatError(result.error);
    return { message: "", errors };
  }
  const response = await httpHelper<string>(
    "http://localhost:5000/api/users/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.data),
    },
  );
  if (!response.ok) {
    return { message: response.data.message, errors: response.data.details };
  }
  const token: string = response.data;
  localStorage.setItem("token", token);
  return redirect("/");
}
