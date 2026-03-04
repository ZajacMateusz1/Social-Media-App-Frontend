import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import UserLayout from "../user/UserLayout";
import Register from "../user/pages/Register";
import Login from "../user/pages/Login";
import { registerAction } from "../utils/user/userActions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
