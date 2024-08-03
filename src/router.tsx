import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Layout } from "./components/Layout.tsx";
import Vehicles from "./pages/vehicles";
import RegisterVehicle from "./pages/vehicles/RegisterVehicle.tsx";

export const routes = {
  RegisterVehicle: "/vehicle/register",
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Vehicles />,
        errorElement: <ErrorPage />,
      },
      {
        path: routes.RegisterVehicle,
        element: <RegisterVehicle />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
