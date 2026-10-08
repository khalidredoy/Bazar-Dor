import Link from "next/link";
import type { Product } from "@/types/product";
import { toBanglaNumber } from "@/utils/number";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block"
    >
      <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <div className="flex h-32 items-center justify-center rounded-xl bg-green-50 text-7xl">
          {product.image}
        </div>

        <div className="mt-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold">
                {product.nameBn}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {product.categoryNameBn} · প্রতি {product.unit}
              </p>
            </div>

            <span className="text-2xl">
              {product.categoryIcon}
            </span>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-500">
              আজকের দাম
            </p>

            <div className="mt-1 flex items-end justify-between">
              <p className="text-2xl font-bold">
                {toBanglaNumber(product.today)} টাকা
              </p>

              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  isUp
                    ? "bg-green-100 text-green-700"
                    : isDown
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                {isUp && "▲"}
                {isDown && "▼"}

                {product.change.pct !== 0 && " "}

                {toBanglaNumber(product.change.pct)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}