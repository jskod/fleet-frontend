import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Layout } from "./components/Layout.tsx";
import Vehicles from "./pages/vehicles";
import RegisterVehicle from "./pages/vehicles/RegisterVehicle.tsx";
import CreateMaintenanceLog from "./pages/vehicles/CreateMaintenanceLog.tsx";

export const routes = {
  RegisterVehicle: "/vehicle/register",
  CreateMaintenanceLog: "/vehicle/:vehicleId/create-log",
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
      {
        path: routes.CreateMaintenanceLog,
        element: <CreateMaintenanceLog />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
