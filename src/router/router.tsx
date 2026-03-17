import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../shared/ErrorPage";
import AuthLayout from "../auth/AuthLayout";
import Register from "../auth/pages/Register";
import Login from "../auth/pages/Login";
import { registerAction, loginAction } from "../utils/auth/userActions";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: <Register />,
            action: registerAction,
          },
          { path: "login", element: <Login />, action: loginAction },
          { path: "logout" },
        ],
      },
    ],
  },
]);

export default router;
