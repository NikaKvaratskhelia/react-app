import { useCart } from "../../context/CartContext";
import bagImg from "../../assets/images/bagIcon.png";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function cartPopup(props: any) {
  const { cartItems, removeFromCart, total } = useCart();

  return (
    <div className="fixed inset-0 w-full h-full bg-[#00000079] z-100">
      <div className="flex flex-col h-187.5 justify-between items-center fixed top-0 right-0 bg-white">
        <div className="flex flex-col w-full">
          <div className="flex  my-6.25 justify-between items-center w-full px-7">
            <h2 className=" text-[24px] font-semibold ">Shopping Cart</h2>

            <img
              src={bagImg}
              alt="bag icon"
              className="w-4 h-4.75 cursor-pointer"
              onClick={props.closeCart}
            />
          </div>
          <hr className="w-[70%]" />
        </div>
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-5 w-full max-h-115 px-7 mt-10 overflow-y-auto">
            {cartItems.map((p) => (
              <CartItem
                key={p.id}
                product={p}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <p className="flex items-center justify-between max-w-[70%] w-full self-start pl-7 mb-6 mt-auto">
            Subtotal:{" "}
            <span className="text-[#B88E2F] font-semibold">{total}$</span>
          </p>
          <div className="p-7 flex gap-3.5 border-t border-[#D9D9D9]">
            <Link
              to={"cart"}
              onClick={props.closeCart}
              className="text-center rounded-[50px] px-7.5 py-1.5 border border-black text-[12px] cursor-pointer transition-all duration-200 hover:bg-black hover:text-white"
            >
              Cart
            </Link>
            <Link
              to={"checkout"}
              onClick={props.closeCart}
              className="text-center rounded-[50px] px-7.5 py-1.5 border border-black text-[12px] cursor-pointer transition-all duration-200 hover:bg-black hover:text-white"
            >
              Checkout
            </Link>
            <Link
              to={"comparison"}
              onClick={props.closeCart}
              className="text-center rounded-[50px] px-7.5 py-1.5 border border-black text-[12px] cursor-pointer transition-all duration-200 hover:bg-black hover:text-white"
            >
              Comparison
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
