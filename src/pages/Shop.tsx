import { useState } from "react";
import Filter from "../components/Shop/Filter";
import db from "../db/db";
import Pagination from "../components/Shop/Pagination";
import Hero from "../components/shared/Hero";
import ProductsSection from "../components/shared/ProductsSection";

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
      <Hero text="Shop" />

      <Filter
        showQty={showQty}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />

      <ProductsSection productQty={visibleProducts.length} />

      <Pagination
        showQty={showQty}
        dbLength={db.length}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
