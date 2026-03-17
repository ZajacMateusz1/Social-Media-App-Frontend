import type { ReactNode } from "react";
import {
  type HTMLFormMethod,
  Link,
  Form,
  useNavigation,
} from "react-router-dom";

import Button from "../../shared/Button";

interface CustomFormProps {
  children: ReactNode;
  method: HTMLFormMethod;
  headerText: string;
  buttonText: string;
  bottomLink: string;
  bottomLinkMessage: string;
  errorMessage: string;
}
export default function CustomForm({
  children,
  method,
  headerText,
  buttonText,
  bottomLink,
  bottomLinkMessage,
  errorMessage,
}: CustomFormProps) {
  const navigaton = useNavigation();
  const isSubmitting = navigaton.state === "submitting";
  return (
    <>
      <h1 className="text-2xl p-2">{headerText}</h1>
      <Form
        method={method}
        className="flex flex-col items-center w-3/4 max-w-md p-4 rounded-xl shadow-lg bg-white"
      >
        {errorMessage && <h2 className="text-red-600 m-4">{errorMessage}</h2>}
        {children}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : buttonText}
        </Button>
        <Link className="text-s text-blue-400 hover:underline" to={bottomLink}>
          {bottomLinkMessage}
        </Link>
      </Form>
    </>
  );
}
