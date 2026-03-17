import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";
import logo from "../assets/logo.png";
import { useContext } from "react";
export default function AuthLayout() {
  const { token } = useContext(AuthContext);
  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="min-h-screen flex flex-col items-center py-5 px-1 mt-5">
      <div className="h-25">
        <img
          src={logo}
          alt="Application logo"
          className="h-full w-full object-contain"
        />
      </div>
      <Outlet />
    </main>
  );
}
