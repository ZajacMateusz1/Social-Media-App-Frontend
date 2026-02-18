import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../user/UserLayout";
import Register from "../user/pages/Register";
import Login from "../user/pages/Login";

const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default router;
