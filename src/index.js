import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./i18n.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Loading from "./pages/Loading.jsx";
import Error404 from "./pages/Error404.jsx";

const AppRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const routers = createBrowserRouter(AppRoutes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback=<Loading />>
      <RouterProvider router={routers}></RouterProvider>
    </Suspense>
  </React.StrictMode>
);
