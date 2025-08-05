import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Pages & Components
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Kollywood from "./components/Kollywood";
import Mollywood from "./components/Mollywood";
import Hollywood from "./components/Hollywood";
import Anime from "./components/Anime";
import Webseries from "./components/Webseries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "kollywood", element: <Kollywood /> },
      { path: "mollywood", element: <Mollywood /> },
      { path: "hollywood", element: <Hollywood /> },
      { path: "anime", element: <Anime /> },
      { path: "webseries", element: <Webseries /> },
    ],
  },
  {
    path: "*",
    element: (
      <div className="p-10 text-center text-red-600 text-xl">
        404 - Page Not Found
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
