import Layout from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/Shop";
import HomePage from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "product/:id", element: <div>Product</div> },
      { path: "cart", element: <CartPage /> },
      { path: "checkout", element: <Checkout /> },
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
