import { createContext } from "react";

export interface authContextInterface {
  token: string | null;
  handleLogout: () => void;
}
const AuthContext = createContext<authContextInterface>({
  token: null,
  handleLogout: () => {},
});
export default AuthContext;
