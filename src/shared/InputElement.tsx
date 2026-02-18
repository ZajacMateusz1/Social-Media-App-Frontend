import type { InputHTMLAttributes } from "react";
interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  id: string;
}
export default function InputElement({
  children,
  id,
  ...props
}: InputElementProps) {
  return (
    <input
      className="p-2 border border-gray-300 rounded-md m-1 w-full"
      id={id}
      placeholder={children}
      {...props}
    />
  );
}
