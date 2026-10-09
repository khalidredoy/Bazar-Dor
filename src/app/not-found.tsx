import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-3xl border bg-white p-8 text-center shadow-sm">
        <div className="text-7xl">🔎</div>

        <p className="mt-6 font-semibold text-green-700">
          ERROR 404
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mt-4 text-gray-500">
          দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}