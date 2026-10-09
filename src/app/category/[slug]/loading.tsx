export default function CategoryLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 h-5 w-40 animate-pulse rounded bg-gray-200" />

        <div className="mb-8 rounded-2xl border bg-white p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 animate-pulse rounded-2xl bg-gray-200" />

            <div className="flex-1">
              <div className="h-8 w-40 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 h-4 w-64 max-w-full animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>

        <div className="mb-6 flex justify-between">
          <div className="h-5 w-28 animate-pulse rounded bg-gray-200" />
          <div className="h-9 w-48 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-2xl border bg-white p-5"
            >
              <div className="h-32 animate-pulse rounded-xl bg-gray-200" />
              <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-gray-200" />
              <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-gray-200" />
              <div className="mt-6 h-7 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}