import React from "react";
import ReactDOM from "react-dom/client";
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import App from './App'
import { ThemeContextProvider } from "./useThemeContext";

const AppRouter = createBrowserRouter(createRoutesFromElements(
 <Route path="/" element={<App />}  />
))

function Apps() {
  return <RouterProvider router={AppRouter} />
}

ReactDOM.createRoot(
  document.getElementById("root")).render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
)