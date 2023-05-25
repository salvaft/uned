import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/home.jsx";
import Layout from "./lib/layout/layout.jsx";
import "./styles.css";
import Pelicula, { loader as movieLoader } from "./routes/pelicula.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./routes/error";

// React router > 6.4 style
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Empty layout with index component to have nesting below "/". This allows for a easily set common error page */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path=":id" loader={movieLoader} element={<Pelicula />} />
      </Route>
    </>
  ),
  { basename: "/fwjs/ejercicio-1" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
