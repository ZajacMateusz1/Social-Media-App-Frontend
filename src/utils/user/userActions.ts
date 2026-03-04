import { redirect, type ActionFunctionArgs } from "react-router-dom";
import { z } from "zod";
import { RegisterFormSchema, RegisterSchema } from "./userSchema";
import type { HTTPError } from "../../types";

export async function registerAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = RegisterFormSchema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    const errors = z.formatError(result.error);
    return errors;
  }
  const userData = RegisterSchema.parse(result.data);
  try {
    const response = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      const data: HTTPError = await response.json();
      return data.details;
    }
    return redirect("/");
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Network error");
  }
}
