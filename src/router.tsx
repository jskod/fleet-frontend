import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import { Layout } from "./components/Layout.tsx";
import Vehicles from "./pages/vehicles";

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
    ],
  },
]);
