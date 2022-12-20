import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.scss";
import ErrorPage from "./routes/error-page";
import Root from "./routes/root";
import Home from "./routes/home";
import Shop from "./routes/shop";
import About from "./routes/about";
import Contact from "./routes/contact";

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
              path: "contact",
              element: <Contact />,
            },
            {
              path: "shop",
              element: <Shop />,
            },
            {
              path: "about",
              element: <About />,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
