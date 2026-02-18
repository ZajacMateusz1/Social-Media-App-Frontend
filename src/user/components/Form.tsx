import type { ReactNode } from "react";
import { Link } from "react-router-dom";

import Button from "../../shared/Button";

interface FormProps {
  children: ReactNode;
  headerText: string;
  bottomLink: string;
  bottomLinkMessage: string;
}
export default function Form({
  children,
  headerText,
  bottomLink,
  bottomLinkMessage,
}: FormProps) {
  return (
    <>
      <h1 className="text-2xl p-2">{headerText}</h1>
      <form className="flex flex-col items-center w-3/4 max-w-md p-4 rounded-xl shadow-lg bg-white">
        {children}
        <Button type="submit">Register</Button>
        <Link className="text-s text-blue-400 hover:underline" to={bottomLink}>
          {bottomLinkMessage}
        </Link>
      </form>
    </>
  );
}
