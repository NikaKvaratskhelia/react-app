import CheckoutModul from "../components/Cart/CheckoutModul";
import Table from "../components/Cart/Table";
import Hero from "../components/shared/Hero";
import { useCartStore } from "../store";

export default function Cart() {
  const { cartItems, removeFromCart, total } = useCartStore();

  return (
    <div>
      <Hero text="Cart" />

      <div className="max-w-310 mx-auto my-17.5 flex justify-between items-start">
        <Table cartItems={cartItems} removeFromCart={removeFromCart} />
        <CheckoutModul total={total} />
      </div>
    </div>
  );
}
