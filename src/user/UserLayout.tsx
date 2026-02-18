import { Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
export default function UserLayout() {
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
