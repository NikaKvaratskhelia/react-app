import Layout from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "product/:id", element: <div>Product</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
