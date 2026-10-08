import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/bazardor/products",
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export default async function Home() {
  const products = await getProducts();

  const risingProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallingProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <main className="min-h-screen">
      <Navbar />

      <PriceTicker />

      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">আজ দাম বেড়েছে ▲</h2>

          <p className="mt-2 text-gray-500">
            আজ যেসব পণ্যের দাম তুলনামূলক বেশি বেড়েছে।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {risingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">আজ দাম কমেছে ▼</h2>

          <p className="mt-2 text-gray-500">
            আজ যেসব পণ্যের দাম তুলনামূলক বেশি কমেছে।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {fallingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="সব-পণ্য" className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold">সব পণ্য</h2>

          <p className="mt-2 text-gray-500">
            প্রয়োজনীয় পণ্যের আজকের বাজারদর এক নজরে দেখুন।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
