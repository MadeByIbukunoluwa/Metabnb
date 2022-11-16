import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/pages/App/App'
import PlaceToStay from './pages/PlaceToStay/placeToStay';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "placetostay",
    element: <PlaceToStay/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
