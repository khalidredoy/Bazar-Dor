import Link from "next/link";
import { notFound } from "next/navigation";
import type { Product } from "@/types/product";
import { toBanglaNumber } from "@/utils/number";

type ProductPageProps = {
params: Promise<{
slug: string;
}>;
};

async function getProduct(slug: string): Promise<Product | null> {
const response = await fetch(
"https://api.abcz.workers.dev/api/bazardor/products"
);

if (!response.ok) {
throw new Error("Failed to fetch products");
}

const products: Product[] = await response.json();

return products.find((product) => product.slug === slug) ?? null;
}

export default async function ProductDetailsPage({
params,
}: ProductPageProps) {
const { slug } = await params;
const product = await getProduct(slug);

if (!product) {
notFound();
}

const isUp = product.change.dir === "up";
const isDown = product.change.dir === "down";

return ( <main className="min-h-screen bg-gray-50"> <section className="mx-auto max-w-4xl px-4 py-10"> <Link
       href="/"
       className="inline-block text-sm font-medium text-green-700 hover:underline"
     >
← হোম পেজে ফিরে যান </Link>

```
    <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex h-36 w-full items-center justify-center rounded-2xl bg-green-50 text-7xl sm:w-40">
          {product.image}
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-green-700">
            {product.categoryIcon} {product.categoryNameBn}
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            {product.nameBn}
          </h1>

          <p className="mt-2 text-gray-500">
            প্রতি {product.unit}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-bold">
              {toBanglaNumber(product.today)} টাকা
            </span>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                isUp
                  ? "bg-green-100 text-green-700"
                  : isDown
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-600"
              }`}
            >
              {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
              {toBanglaNumber(product.change.pct)}%
            </span>
          </div>
        </div>
      </div>

      <div className="my-8 border-t" />

      <h2 className="text-xl font-bold">
        বাজারভিত্তিক আজকের দাম
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        বিভিন্ন বাজারে এই পণ্যের সর্বনিম্ন ও সর্বোচ্চ দাম।
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>বাজার</th>
              <th>সর্বনিম্ন দাম</th>
              <th>সর্বোচ্চ দাম</th>
            </tr>
          </thead>

          <tbody>
            {product.markets?.map((market, index) => (
              <tr key={`${market.market}-${index}`}>
                <td>{market.market}</td>
                <td>{toBanglaNumber(market.min)} টাকা</td>
                <td>{toBanglaNumber(market.max)} টাকা</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(!product.markets || product.markets.length === 0) && (
        <p className="mt-4 text-sm text-gray-500">
          বর্তমানে বাজারভিত্তিক তথ্য পাওয়া যায়নি।
        </p>
      )}
    </div>
  </section>
</main>

);
}
