import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";
import PageThree from "../pages/PageThree";
import PageFour from "../pages/PageFour";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // layout utama
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/page1", element: <PageOne /> },
      { path: "/page2", element: <PageTwo /> },
      { path: "/page3/:id/:name", element: <PageThree /> },
      { path: "/page4", element: <PageFour /> },
    ],
  },
]);
