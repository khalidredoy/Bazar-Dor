import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryProductList from "@/components/CategoryProductList";
import type { Product } from "@/types/product";
import type { Category } from "@/types/category";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

async function getCategoryProducts(
  slug: string
): Promise<Product[]> {
  const response = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }

  return response.json();
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;

  const categories = await getCategories();

  const category = categories.find(
    (item) => item.slug === slug
  );

  if (!category) {
    notFound();
  }

  const products = await getCategoryProducts(slug);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-green-700 hover:underline"
        >
          ← হোম পেজে ফিরে যান
        </Link>

        <div className="mb-8 rounded-2xl border bg-white p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-4xl">
              {category.icon}
            </div>

            <div>
              <h1 className="text-3xl font-bold">
                {category.nameBn}
              </h1>

              <p className="mt-2 text-gray-500">
                এই ক্যাটাগরির সকল পণ্যের আজকের বাজারদর।
              </p>
            </div>
          </div>
        </div>

        <CategoryProductList products={products} />
      </section>
    </main>
  );
}