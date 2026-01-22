import Layout from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import { CartProvider } from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "product/:id", element: <div>Product</div> },
    ],
  },
]);

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
