"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

type CategoryProductListProps = {
  products: Product[];
};

type SortOption = "default" | "low-to-high" | "high-to-low";

export default function CategoryProductList({
  products,
}: CategoryProductListProps) {
  const [sort, setSort] = useState<SortOption>("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-to-high") {
      return a.today - b.today;
    }

    if (sort === "high-to-low") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          মোট পণ্য: {products.length}টি
        </p>

        <label className="flex items-center gap-3 text-sm">
          <span className="font-medium">সাজান:</span>

          <select
            className="select select-bordered select-sm bg-white"
            value={sort}
            onChange={(event) =>
              setSort(event.target.value as SortOption)
            }
          >
            <option value="default">ডিফল্ট</option>
            <option value="low-to-high">
              দাম: কম থেকে বেশি
            </option>
            <option value="high-to-low">
              দাম: বেশি থেকে কম
            </option>
          </select>
        </label>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="rounded-2xl border bg-white p-10 text-center">
          <h2 className="text-xl font-bold">
            কোনো পণ্য পাওয়া যায়নি
          </h2>

          <p className="mt-2 text-gray-500">
            এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
          </p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}