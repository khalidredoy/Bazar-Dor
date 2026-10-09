"use client";

import Link from "next/link";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg rounded-3xl border bg-white p-8 text-center shadow-sm">
        <div className="text-7xl">⚠️</div>

        <h1 className="mt-6 text-2xl font-bold text-gray-900">
          দুঃখিত! কিছু একটা সমস্যা হয়েছে
        </h1>

        <p className="mt-3 text-gray-600">
          তথ্য লোড করা যাচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>

        {process.env.NODE_ENV === "development" && (
          <p className="mt-3 break-words text-xs text-red-600">
            {error.message}
          </p>
        )}

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => reset()}
            className="btn bg-green-600 text-white hover:bg-green-700"
          >
            আবার চেষ্টা করুন
          </button>

          <Link href="/" className="btn btn-outline">
            হোম পেজে যান
          </Link>
        </div>
      </div>
    </main>
  );
}