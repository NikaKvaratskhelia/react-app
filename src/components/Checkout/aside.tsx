import { useState } from "react";
import CartItem from "./CartItem";
import { useCartStore } from "../../store";

export default function aside(props: any) {
  
  const { cartItems, total } = useCartStore();
  const [chosenRadio, setChosenRadio] = useState("");
  const string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quisquam!";
  return (
    <div className="flex flex-col gap-5 items-center max-w-132.5 w-full">
      <div className="w-full flex flex-col gap-5 py-5">
        <div className="flex flex-col w-full gap-4">
          <div className="flex justify-between items-center w-full font-medium text-[24px]">
            <p>Product</p>
            <p>Subtotal</p>
          </div>
          {cartItems.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="flex justify-between items-center w-full">
            <p className="font-regular text-[16px]">Subtotal</p>
            <p>{total}</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p>Total</p>
            <p className="text-[#B88E2F] text-[24px] font-bold">${total}</p>
          </div>
        </div>
        <div className="border border-[#D9D9D9] w-full h-px"></div>
        <div className="flex flex-col">
          <div>
            <div className="flex flex-col items-start cursor-pointer">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="paymentType"
                  value="bankTransfer"
                  id="bankTransfer"
                  checked={chosenRadio === "bankTransfer"}
                  onChange={() => setChosenRadio("bankTransfer")}
                  className="cursor-pointer"
                />
                <label htmlFor="bankTransfer" className="cursor-pointer" 
                  style={{ color: chosenRadio === "bankTransfer" ? "#000" : "#9F9F9F", fontWeight: chosenRadio === "bankTransfer" ? "600" : "400" }}>
                  Direct Bank Transfer
                </label>
              </div>

              {chosenRadio === "bankTransfer" && (
                <p className="text-[14px] text-[#555555]">{string}</p>
              )}
            </div>

            <div className="flex flex-col cursor-pointer">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="paymentType"
                  value="creditCard"
                  id="cash"
                  checked={chosenRadio === "cash"}
                  onChange={() => setChosenRadio("cash")}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="cash"
                  className="cursor-pointer"
                  style={{ color: chosenRadio === "cash" ? "#000" : "#9F9F9F", fontWeight: chosenRadio === "cash" ? "600" : "400" }}
                >
                  Cash On Delivery
                </label>
              </div>

              {chosenRadio === "cash" && (
                <p className="text-[14px] text-[#555555]">{string}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        className="border border-[#000000] rounded-[10px] py-4 max-w-75 w-full cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 font-medium text-[18px]"
        disabled={props.isSubmitted}
        onClick={props.handleSubmit}
      >
        Place Order
      </button>
    </div>
  );
}
