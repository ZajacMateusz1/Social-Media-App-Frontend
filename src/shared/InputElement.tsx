import type { InputHTMLAttributes } from "react";
interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  id: string;
  name: string;
  error: string | undefined;
}
export default function InputElement({
  children,
  id,
  name,
  error,
  ...props
}: InputElementProps) {
  return (
    <>
      <input
        className="p-2 border border-gray-300 rounded-md m-1 w-full"
        id={id}
        placeholder={children}
        name={name}
        {...props}
      />
      {error && <p className="text-red-700">{error}</p>}
    </>
  );
}
