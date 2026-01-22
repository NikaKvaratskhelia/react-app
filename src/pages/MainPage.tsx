import ProductCard from "../components/ProductCard";
import productsArr from "../db/db";
import bgImage from "../assets/images/bg.jpg";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <main className="flex flex-col  items-center justify-between gap-5">
      <div
        className="flex items-center justify-end px-14.5 h-[80vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col items-start gap-11 py-15 px-10  bg-[#FFF3E3]">
          <div className="flex flex-col  gap-4">
            <p className="text-[16px] text-[#333333] font-semibold">
              New Arrival
            </p>
            <h1 className="text-[52px] text-[#B88E2F] font-bold max-w-110 w-full leading-16.25">
              Discover Our New Collection
            </h1>
            <p className="text-[18px] font-medium max-w-137.5 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>

          <button className="text-white bg-[#B88E2F] py-6.25 px-18 font-bold">
            BUY NOW
          </button>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-between gap-5">
        <h2 className=" text-center font-bold text-[40px] text-[#3A3A3A] my-8">
          Our Products
        </h2>
        <div className="flex items-center justify-between flex-wrap max-w-300 w-full mx-auto gap-y-8 ">
          {productsArr.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Link
          to={"/shop"}
          className="max-w-61.25 w-full border-[#B88E2F] border py-3 inline-block cursor-pointer text-[#B88E2F]  transition-all duration-500 hover:bg-[#B88E2F] hover:text-white font-semibold text-center"
        >
          See More...
        </Link>
      </div>
    </main>
  );
}
