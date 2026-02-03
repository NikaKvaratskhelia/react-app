import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import productsArr from "../../db/db";
import { useCartStore } from "../../store";

export default function ProductsSection(props: any) {
  const { addToCart } = useCartStore();

  return (
    <div className="max-w-300 w-full mx-auto mt-15 flex items-center px-6 justify-center flex-wrap gap-y-10 box-content">
      <h2 className=" text-center font-bold text-[40px] text-[#3A3A3A] my-8">
        Our Products
      </h2>
      <div className="flex items-center justify-between flex-wrap max-w-300 w-full mx-auto gap-y-8 ">
        {productsArr.slice(0, props.productQty).map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

      {props.ShowBtn && (
        <Link
          to={"/shop"}
          className="max-w-61.25 w-full border-[#B88E2F] border py-3 inline-block cursor-pointer text-[#B88E2F]  transition-all duration-500 hover:bg-[#B88E2F] hover:text-white font-semibold text-center"
        >
          See More...
        </Link>
      )}
    </div>
  );
}
