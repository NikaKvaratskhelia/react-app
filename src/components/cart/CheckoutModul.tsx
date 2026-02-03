import { Link } from "react-router-dom";

export default function CheckoutModul(props: any) {
  return (
    <div className="bg-[#F9F1E7] py-5 max-w-100 w-full flex flex-col justify-center items-center gap-6">
      <h2 className="text-[32px] font-semibold ">Cart Totals</h2>
      <p className="flex justify-between max-w-50 w-full font-medium">
        Subtotal: <span className="font-normal text-[#9F9F9F]">${props.total}</span>
      </p>
      <p className="flex justify-between max-w-50 w-full font-medium">
        Total:{" "}
        <span className="text-[#B88E2F] text-[20px] font-medium">
          ${props.total}
        </span>
      </p> 
      <Link to="/checkout" className="bg-transparent border text-center border-black rounded-[18px] py-4 text-[20px] w-56 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
        Check Out
      </Link>
    </div>
  );
}
