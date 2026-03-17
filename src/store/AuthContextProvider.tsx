import { useState, type ReactNode } from "react";
import AuthContext, { type authContextInterface } from "./auth-context";
interface AuthContextProviderProps {
  children: ReactNode;
}
export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token") || null;
  });
  function handleLogout() {
    setToken(null);
    localStorage.removeItem("token");
  }
  const authCTX: authContextInterface = {
    token,
    handleLogout,
  };
  return <AuthContext value={authCTX}>{children}</AuthContext>;
}
