import Hero from "../components/Home/Hero";
import ProductsSection from "../components/ProductsSection";

export default function HomePage() {
  return (
    <main className="flex flex-col  items-center justify-between gap-5">
      <Hero/>
      <ProductsSection productQty={8}/>
    </main>
  );
}
