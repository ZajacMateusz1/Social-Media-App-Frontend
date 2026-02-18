import type { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="p-2 m-2 w-3/4 max-w-md tracking-wider bg-blue-600 text-white rounded-md font-bold hover:cursor-pointer hover:bg-blue-700 transition-colors"
      {...props}
    >
      {children}
    </button>
  );
}
