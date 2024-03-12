import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import ResetStyles from "./styles/reset.ts";
import ErrorPage from "./pages/error.tsx";
import HomePage from "./pages/home.tsx";
import PricingPage from "./pages/pricing.tsx";
import ProductPage from "./pages/product.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/not-found.tsx";
import AppLayout from "./pages/app-layout.tsx";
import CitiesPage from "./pages/cities.tsx";
import Countries from "./pages/countries.tsx";
import Form from "./pages/form.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pricing",
        element: <PricingPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/app",
        element: <AppLayout />,
        children: [
          {
            path: "cities",
            element: <CitiesPage />,
          },
          {
            path: "countries",
            element: <Countries />,
          },
          {
            path: "form",
            element: <Form />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
