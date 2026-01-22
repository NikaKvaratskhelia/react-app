import { useState } from "react";
import bg from "../assets/images/shopBg.jpg";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import db from "../db/db";
import Pagination from "../components/Pagination";

export default function ShopPage() {
  const [showQty, setShowQty] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);

  function onIncrement() {
    setShowQty((prev) => Math.min(prev + 1, db.length));
    setCurrentPage(1);
  }

  function onDecrement() {
    setShowQty((prev) => Math.max(prev - 1, 1));
    setCurrentPage(1);
  }

  const start = (currentPage - 1) * showQty;
  const end = start + showQty;
  const visibleProducts = db.slice(start, end);

  return (
    <main className="flex flex-col">
      <div className=" flex items-center justify-center h-[30vh] relative">
        <div
          className="bg-center bg-cover absolute inset-0 z-2 blur-[3px]"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <h1 className="text-[48px] font-medium relative z-3">Shop</h1>
      </div>
      <Filter
        showQty={showQty}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />

      <div className="max-w-300 w-full mx-auto mt-15 flex items-center px-6 justify-between flex-wrap gap-y-10 box-content">
        {visibleProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <Pagination
        showQty={showQty}
        dbLength={db.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
