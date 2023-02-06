import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TodoList from "./components/TodoList";
import protedtedRoute from "./components/ProtedtedRoute";
import ProtedtedRoute from "./components/ProtedtedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Signin />,
      },
      {
        path: "/signin",
        element: (
          <ProtedtedRoute>
            <Signin />
          </ProtedtedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtedtedRoute>
            <Signup />
          </ProtedtedRoute>
        ),
      },
      {
        path: "/todo",
        element: (
          <ProtedtedRoute>
            <TodoList />
          </ProtedtedRoute>
        ),
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
