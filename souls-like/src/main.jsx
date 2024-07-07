import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Game from "./Game.jsx";

import "./assets/css/Index.css";
import "./assets/css/Remedy.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/game/",
        element: <Game />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
