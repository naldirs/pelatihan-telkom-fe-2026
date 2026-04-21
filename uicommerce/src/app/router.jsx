import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/auth/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // layout utama
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);
