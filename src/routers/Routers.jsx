import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import AddTask from "../pages/AddTask/AddTask";
import Dashboard from "../pages/Dashboard/Dashboard";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "addTask",
        element: (
          <PrivateRouter>
            <AddTask />
          </PrivateRouter>
        ),
      },

      {
        path: "dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },

      {
        path: "update/:id",
        element: (
          <PrivateRouter>
            <UpdateTask />
          </PrivateRouter>
        ),
        loader: ({params}) =>
          axios.get(`${import.meta.env.VITE_DB_URL}/task/${params.id}`),
      },
    ],
  },
]);

export default router;
